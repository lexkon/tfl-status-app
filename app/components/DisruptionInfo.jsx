export default function DisruptionInfo({ disruption }) {
    const detailsMsg = disruption.details
    const detailsToDisplay = detailsMsg.split(": ")[1]

    const fromDate = disruption.validityPeriods[0].fromDate
    const toDate = disruption.validityPeriods[0].toDate

    return (
        <>
            <div id='disruption-info'>
                <p className='font-bold'>{disruption.severityDescription}</p>
                <p>{detailsToDisplay}</p>
                <p>
                    <span className='font-bold'>Valid from:</span> {new Date(fromDate).toLocaleString()}
                </p>
                <p>
                    <span className='font-bold'>Until:</span> {new Date(toDate).toLocaleString()}
                </p>
            </div>
        </>
    )
}