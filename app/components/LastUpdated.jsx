export default function LastUpdated({ date }) {
    return (
        <p>
            <span className='font-bold'>Last updated:</span> {new Date(date).toLocaleTimeString()}
        </p>
    )
}