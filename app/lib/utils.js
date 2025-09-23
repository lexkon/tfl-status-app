export function formatDate(date) {
    const newDate = new Date(date)

    const formattedDate = newDate.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })

    const formattedTime = newDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    })

    return `${formattedDate}, ${formattedTime}`
}