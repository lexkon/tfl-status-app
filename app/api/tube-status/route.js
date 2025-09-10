let serverCache = null
let lastFetch = null
const CACHE_DURATION = 5 * 60 * 1000

function transformTfLResponse(data) {
    const now = new Date().toISOString();

    return {
        lastUpdated: now,
        lines: data.map(line => {
            const statusDescriptions = Array.from(
                new Set(line.lineStatuses.map(status => status.statusSeverityDescription))
            );

            const lineStatus = statusDescriptions.join(' & ');

            return {
                id: line.id,
                name: line.name,
                lineStatus
            };
        })
    };
}

export async function GET() {
    const now = Date.now()

    if (serverCache && lastFetch && (now - lastFetch) < CACHE_DURATION) {
        return Response.json(serverCache)
    }

    try {
        const response = await fetch(`https://api.tfl.gov.uk/Line/Mode/tube/Status?app_key=${process.env.PRIMARY_KEY}`)
        if (!response.ok) throw new Error(`TfL API responded: ${response.status} - ${response.text}`)

        const rawData = await response.json()
        const transformed = transformTfLResponse(rawData)

        serverCache = transformed
        lastFetch = now

        return Response.json(serverCache)
    } catch (error) {
        if (serverCache) {
            return Response.json(serverCache)
        }
        return Response.json({ error: 'Failed to fetch tube status and no cached data available' }, { status: 500 })
    }
}
