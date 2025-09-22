import LastUpdated from "./LastUpdated"
import Ping from "./Ping"

export default function LineStatus({ id, lastUpdated, lineStatus = "Good Service" }) {
    return (
        <>
            <h2 className={`text-${id} mt-4 my-2 md:mb-4`}>{lineStatus}</h2>
            <div id='tube-updates'>
                <LastUpdated date={lastUpdated} />
                <Ping colour={`var(--${id})`} />
            </div>
        </>
    )
}