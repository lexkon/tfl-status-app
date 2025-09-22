import DisruptionInfo from "./DisruptionInfo"

export default function Disruptions({ id, disruptions }) {

    return (
        <div id='disruptions-container'>
            <h3 className={`text-${id} mb-2`}>Disruptions</h3>
            {disruptions.map((disruption, index) => {
                return (
                    <DisruptionInfo key={index} disruption={disruption} />
                )
            })}
        </div>
    )
}