import Link from "next/link"
// import Ping from "@/app/components/Ping"
import InvalidLineMessage from "@/app/components/InvalidLineMessage"
import LineStatus from "@/app/components/LineStatus"
import { tubeLineClasses } from "@/app/lib/tubeColours"
import { getTubeStatus } from "@/app/lib/tfl"
import Disruptions from "@/app/components/Disruptions"

export default async function LinePage({ params }) {
    const { lineId } = await params
    const lineIdLower = lineId.toLowerCase()
    const capitalisedLine = lineId.charAt(0).toUpperCase() + lineId.slice(1);

    let data = {}
    let lineInfo = {}


    try {
        data = await getTubeStatus()
    } catch (err) {
        return <p>Error loading tube data: {err.message}</p>
    }

    lineInfo = data.lines.find(line => line.id === lineIdLower)

    if (!lineInfo) {
        return (
            <>
                <InvalidLineMessage line={capitalisedLine} />
            </>
        )
    }
    const { id, name, lineStatus, disruptions } = lineInfo

    return (
        <>
            <div
                id='line-info'
                style={{ backgroundColor: `rgba(var(--${id}-rgb), 0.1)` }}
            >
                <div id='line-info-header'>
                    <h1 className={`underline underline-offset-4 decoration-${id}`}>{name}</h1>
                    <Link href="/travel" className={`rounded-md ${tubeLineClasses[id]} font-bold px-4 py-2`}>Go Back</Link>
                </div>

                {disruptions.length === 0 &&
                    <>
                        <LineStatus id={id} lastUpdated={data.lastUpdated} />
                        <p className='text-[var(--genericorp-slate)] mt-2'>We can't wait to see you in the office</p>
                    </>
                }

                {disruptions.length > 0 &&
                    <>
                        <LineStatus id={id} lastUpdated={data.lastUpdated} lineStatus={lineStatus} />

                        <Disruptions id={id} disruptions={disruptions} />

                    </>
                }

            </div >
        </>
    )
}