import NewsletterForm from "./NewsletterForm";

export default function Newsletter() {
    return (
        <section id='newsletter'>
            <h2 className='text-[var(--genericorp-coral)] mb-4'>We'd love to keep in touch</h2>
            <NewsletterForm />
        </section>
    )
}