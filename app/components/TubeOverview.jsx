import LineOverview from "./LineOverview";
import { getTubeData } from "../lib/utils";

let data = {};

try {
    data = await getTubeData();
} catch (err) {
    return <p>Error loading tube data: {err.message}</p>;
}

const { lastUpdated, lines } = data;

export default async function TubeOverview() {

    return (
        <div className='md:w-[50%] mx-auto'>
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
