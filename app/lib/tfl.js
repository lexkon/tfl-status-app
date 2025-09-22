let serverCache = null
let lastFetch = null
const CACHE_DURATION = 1 * 60 * 1000

function transformTfLResponse(data) {
    const now = new Date().toISOString()
    return {
        lastUpdated: now,
        lines: data.map(line => {
            const statusDescriptions = Array.from(
                new Set(line.lineStatuses.map(status => status.statusSeverityDescription))
            )

            const lineObject = {
                id: line.id,
                name: line.name,
                lineStatus: statusDescriptions.join(' & '),
                disruptions: []
            }

            const disruptions = line.lineStatuses.filter(status => status.disruption)
            if (disruptions.length > 0) {
                lineObject.disruptions = disruptions.map(status => ({
                    details: status.disruption.description,
                    category: status.disruption.category,
                    severityDescription: status.statusSeverityDescription,
                    validityPeriods: status.validityPeriods || []
                }))
            }

            return lineObject
        })
    }
}

export async function getTubeStatus() {
    const now = Date.now()

    if (serverCache && lastFetch && now - lastFetch < CACHE_DURATION) {
        return serverCache
    }

    const response = await fetch(
        `https://api.tfl.gov.uk/Line/Mode/tube/Status?app_key=${process.env.PRIMARY_KEY}`,
        { cache: 'no-store' }
    )
    if (!response.ok) throw new Error(`TfL API responded: ${response.status}`)

    const rawData = await response.json()
    const transformed = transformTfLResponse(rawData)

    serverCache = transformed
    lastFetch = now

    return transformed
}
