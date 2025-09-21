export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-[60vh] w-full overflow-hidden py-16 px-8 md:px-24"
        >
            <video
                className="absolute top-0 left-0 h-full w-full object-cover -z-10"
                src="/hero.mp4"
                autoPlay
                muted
            />

            <div className="blur-overlay" />

            <div className="relative flex z-10 h-full items-center justify-center text-center">
                <h2 className='italic text-white text-left'>GeneriCorp drives innovative, scalable solutions that harness synergy, optimise workflows, and delivers transformative value across dynamic, fast-moving markets in London</h2>
            </div>
        </section>
    )
}