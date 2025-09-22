export function formatDate(date) {
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

    return formatted
}