import Hero from "./components/Hero";
import HubLink from "./components/HubLink"
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />

      <section id='employee-hub' className='flex flow-row'>
        <HubLink linkText='Access Employee Travel Hub' />
      </section>

      <Testimonials />

    </>
  );
}
