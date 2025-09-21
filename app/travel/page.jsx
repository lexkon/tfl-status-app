import TubeOverview from "../components/TubeOverview";

export default function Travel() {
    return (
        <div id='tube-page'>
            <h2 className='text-[var(--genericorp-coral)]'>TfL Tube Line Status Overview</h2>
            <TubeOverview />
        </div>
    )
}