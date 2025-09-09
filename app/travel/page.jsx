import Header from "../components/Header";
import TubeOverview from "../components/TubeOverview";

export default function Travel() {
    return (
        <>
            <Header />
            <div className="font-sans">
                <main>
                    <div >
                        <h2 className='mb-4 font-bold'>TfL Tube Line Status Overview</h2>
                        <TubeOverview />
                    </div>
                </main>
            </div>
        </>
    )
}