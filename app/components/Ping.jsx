export default function Ping({ colour = "var(--genericorp-coral)" }) {
    return (
        <span className="relative flex size-3">
            <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: colour }}
            ></span>
            <span
                className="relative inline-flex size-3 rounded-full"
                style={{ backgroundColor: colour }}
            ></span>
        </span>
    )
}  