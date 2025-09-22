import { formatDate } from "../lib/utils"

export default function DisruptionInfo({ disruption }) {
    const detailsMsg = disruption.details
    const detailsToDisplay = detailsMsg.split(": ")[1]

    const fromDate = disruption.validityPeriods[0].fromDate
    const toDate = disruption.validityPeriods[0].toDate

    const formattedFromDate = formatDate(fromDate)
    const formattedToDate = formatDate(toDate)

    return (
        <>
            <div id='disruption-info'>
                <p className='font-bold'>{disruption.severityDescription}</p>
                <p>{detailsToDisplay}</p>
                <p>
                    <span className='font-bold'>Valid from:</span> {formattedFromDate}
                </p>
                <p>
                    <span className='font-bold'>Until:</span> {formattedToDate}
                </p>
            </div>
        </>
    )
}