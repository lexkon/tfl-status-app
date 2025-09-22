'use client'

import { formatDate } from "../lib/utils"

export default function LastUpdated({ date }) {
    const formatted = formatDate(date)

    return <p><span className='font-bold'>Last updated:</span> {formatted}</p>
}