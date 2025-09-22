'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/")
        }, 2000)

        return () => clearTimeout(timer)
    }, [router])

    return (
        <div id='not-found'>
            <h1 className='text-[var(--genericorp-coral)]'>Page not found</h1>
            <p>Redirecting you to the homepage</p>
            <Link href='/' className='btn-link'>Click here if you're not automatically redirected</Link>
        </div>
    )
}
