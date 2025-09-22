import LineOverview from "./LineOverview";
import Ping from "./Ping";
import { getTubeStatus } from "../lib/tfl";

export default async function TubeOverview() {
    let data = {}

    try {
        data = await getTubeStatus()
    } catch (err) {
        return <p>Error loading tube data: {err.message}</p>
    }

    const { lastUpdated, lines } = data

    return (
        <div className='mx-auto'>
            <div className="flex flex-row gap-2 mb-2 items-center">
                <p className='font-medium md:text-lg'>
                    Last updated: {new Date(lastUpdated).toLocaleTimeString()}
                </p>
                <Ping />
            </div>
            <ul>
                {lines.map(line => (
                    <li key={line.id}>
                        <LineOverview line={line} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
