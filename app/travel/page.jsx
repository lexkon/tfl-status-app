import TubeOverview from "../components/TubeOverview";

export default function Travel() {
    return (
        <div className='mb-12 mx-auto md:w-[80%]'>
            <h2 className='mb-4 font-medium tracking-tight'>TfL Tube Line Status Overview</h2>
            <TubeOverview />
        </div>
    )
}