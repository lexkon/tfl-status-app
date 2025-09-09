import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <>
            <header className='flex flex-row justify-between align-middle p-4 md:p-8'>
                <Link href='/'>
                    <h1>GeneriCorp.</h1>
                </Link>

                <Image
                    src='/logo.png'
                    width={50}
                    height={50}
                    alt='GeneriCorp logo'
                />
            </header>
        </>
    )
}