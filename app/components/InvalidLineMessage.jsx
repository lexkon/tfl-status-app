import HubLink from '@/app/components/HubLink'

export default function InvalidLineMessage({ line }) {
    return (
        <div id='not-a-line'>
            <h1 className='text-[var(--genericorp-coral)] mb-2 md:mb-6'>Looks like you took a wrong turn!</h1>
            <h2 className='text-[var(--genericorp-slate)]'> <span className='font-black'>{line}</span> isn't a valid tube line</h2>
            <HubLink linkText={"Employee Travel Hub"} />
        </div>
    )
}