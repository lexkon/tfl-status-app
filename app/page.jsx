import Link from "next/link";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />

      <section id='employee-hub' className='flex flow-row'>
        <Link href='/travel' className='btn-link mx-auto md:text-xl w-auto text-center'>
          Access Employee Travel Hub
        </Link>
      </section>

      <Testimonials />

    </>
  );
}
