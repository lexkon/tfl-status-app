export default function Hero() {
    return (
        <section id="hero">
            <video
                className="absolute top-0 left-0 h-full w-full object-cover -z-10"
                src="/hero.mp4"
                autoPlay
                muted
            />

            <div className="blur-overlay" />

            <div id='hero-text'>
                <h2 className='italic text-white text-left'>GeneriCorp drives innovative, scalable solutions that harness synergy, optimise workflows, and delivers transformative value across dynamic, fast-moving markets in London</h2>
            </div>
        </section>
    )
}