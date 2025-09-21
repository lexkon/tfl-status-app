import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header>
            <Link href='/'>
                <h1 className='text-[var(--genericorp-coral)]'>GeneriCorp.</h1>
            </Link>

            <Image
                src='/logo.png'
                width={50}
                height={50}
                alt='GeneriCorp. logo'
            />
        </header>
    )
}