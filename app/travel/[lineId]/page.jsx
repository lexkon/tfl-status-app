import Header from "@/app/components/Header"
import Link from "next/link"
import { tubeLineClasses } from "@/app/lib/tubeColours"

export default async function LinePage({ params }) {
    const { lineId } = await params

    const res = await fetch(`https://api.tfl.gov.uk/Line/${lineId}/Status`, {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error(`TfL API failed: ${res.status}`)
    }

    const data = await res.json()
    const lineData = data[0]
    const { id, name, created, lineStatuses } = lineData

    return (
        <>
            <Header />
            <main>
                <div
                    id='line-info'
                    className={`mb-4 md:w-[75%] mx-auto md:p-6 p-4 rounded-lg`}
                    style={{ backgroundColor: `rgba(var(--${id}-rgb), 0.1)` }}
                >

                    <div className='flex flex-row items-center justify-between'>
                        <h1 className={`text-neutral-800 mb-4 underline underline-offset-4 decoration-${id}`}>{name}</h1
                        >
                        <Link href="/travel" className={`rounded-md ${tubeLineClasses[id]} font-bold px-4 py-2`}>Go Back</Link>
                    </div>

                    <p className="mb-1">
                        <span className='font-bold'>Last TfL update:</span> {new Date(created).toLocaleDateString()}{" "}
                        {new Date(created).toLocaleTimeString()}
                    </p>
                    <p className="mb-1">
                        <span className='font-bold'>Last fetched:</span> {new Date().toLocaleDateString()}{" "}
                        {new Date().toLocaleTimeString()}
                    </p>

                    <h2 className="mt-4 mb-2 font-semibold">Disruptions</h2>
                    {lineStatuses.length === 0 && <p>No disruptions on the line</p>}

                    {lineStatuses.map((status, index) => {
                        const { statusSeverityDescription, disruption, validityPeriods } = status
                        if (!disruption) return null

                        const fromDate = validityPeriods[0]?.fromDate
                        const toDate = validityPeriods[0]?.toDate

                        return (
                            <div key={index} className="mb-4">
                                <p className='mb-1'>
                                    <span className="font-bold">Severity:</span>
                                    <span className='italic font-medium'>
                                        {" "}{statusSeverityDescription}
                                    </span>
                                </p>
                                <p className='mb-1'>
                                    <span className="font-bold">Reason:</span> {disruption.description}
                                </p>
                                {fromDate && toDate && (
                                    <p>
                                        <span className="font-bold mb-1">Valid From:</span>{" "}
                                        {new Date(fromDate).toLocaleString()} <br />
                                        <span className="font-bold mb-1">Valid To:</span> {new Date(toDate).toLocaleString()}
                                    </p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}