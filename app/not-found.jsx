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
            <h1 className='text-[var(--genericorp-coral)] mb-2 md:mb-4'>Page not found</h1>
            <p className='text-lg md:text-xl mb-2'>Redirecting you to the homepage</p>
            <Link href='/' className='btn-link'>Click here if you're not automatically redirected</Link>
        </div>
    )
}