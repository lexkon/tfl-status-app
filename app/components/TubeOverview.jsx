import LineOverview from "./LineOverview";
import { getTubeData } from "../lib/utils";

export default async function TubeOverview() {
    let data = {};

    try {
        data = await getTubeData();
    } catch (err) {
        return <p>Error loading tube data: {err.message}</p>;
    }

    const { lastUpdated, lines } = data;

    return (
        <div className='md:w-80% mx-auto'>
            <p className='mb-2 font-medium'>Last updated: {new Date(lastUpdated).toLocaleTimeString()}</p>
            <ul>
                {lines.map(line => {
                    return (
                        <li key={line.id}>
                            <LineOverview line={line} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
