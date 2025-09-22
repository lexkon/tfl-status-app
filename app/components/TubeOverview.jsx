export const dynamic = 'force-dynamic';
import LineOverview from "./LineOverview";
import Ping from "./Ping";
import { getTubeStatus } from "../lib/tfl";
import LastUpdated from "./LastUpdated";

export default async function TubeOverview() {
    let data = {}

    try {
        data = await getTubeStatus()
    } catch (err) {
        return <p>Error loading tube data: {err.message}</p>
    }

    const { lastUpdated, lines } = data

    return (
        <div id='tube-overview'>
            <div id='tube-updates'>
                <LastUpdated date={lastUpdated} />
                <Ping />
            </div>
            <ul id='tube-lines'>
                {lines.map(line => (
                    <li key={line.id}>
                        <LineOverview line={line} />
                    </li>
                ))}
            </ul>
        </div >
    );
}
