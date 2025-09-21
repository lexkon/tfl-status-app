export default function Ping() {
    return (
        <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--genericorp-teal)] opacity-75"></span>
            <span className="absolute inline-flex size-3 rounded-full bg-[var(--genericorp-teal)] "></span>
        </span>
    )
}