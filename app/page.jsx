import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="font-sans">
        <main>
          <h2 className='mb-8 font-medium italic'>GeneriCorp drives innovative, scalable solutions that harness synergy, optimise workflows, and delivers transformative value across dynamic, fast-moving markets across London</h2>

          <div className='flex flow-row'>
            <Link href='/travel' className='btn-link mx-auto'>
              Travel Status Dashboard
            </Link>
          </div>
        </main>
      </div >
    </>
  );
}
