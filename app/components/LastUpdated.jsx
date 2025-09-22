'use client'

export default function LastUpdated({ date }) {
    const newDate = new Date(date)
    const formatted = newDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    })

    return <p><span className='font-bold'>Last updated:</span> {formatted}</p>
}