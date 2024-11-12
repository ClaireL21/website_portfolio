import Link from 'next/link'

export const metadata = {
  title: "About | Claire Lu"
}
export default function Home() {
  return (
    <main>
    <AboutSection/>
    </main>
  );
}

const AboutSection = () => {
  return (
    <div>
      <section id="about">
            <h1 className="text-center font-bold text-3xl">
                About
            </h1>
        </section>
        {/* <Link
            href="/projects"
            className="font-semibold px-3 py-3 hover:-translate-y-2 hover:text-yellow-600"
            >
              Resume
            <hr className="w-8 h-1 mx-auto my-2 bg-yellow-500 border-0 rounded"></hr>
        </Link> */}
    </div>
  )
}
