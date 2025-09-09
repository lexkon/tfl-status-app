import Link from "next/link"
import { tubeLineClasses } from "../lib/tubeColours"

export default function LineOverview({ line }) {
    const { id, name, lineStatus, hasDisruptions, disruptions } = line

    return (
        <div className="line-overview">
            <p className={`name-cell ${tubeLineClasses[id]}`}>{name}</p>
            <Link className="font-medium" href={`/travel/${line.id}`}>
                <div className="flex justify-between ml-2 md:ml-4 font-medium">
                    <span className='italic'>{lineStatus}</span>
                    <span className='justify-self-end font-black mr-4'>&gt;</span>
                </div>
            </Link>
        </div>
    )
} 