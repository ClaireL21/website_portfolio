import Link from 'next/link'


export default function Home() {
  return (
    <main>Home
    <AboutSection/>
    </main>
  );
}

const AboutSection = () => {
  return (
    <div>
        <Link
            href="/projects"
            className="font-semibold px-3 py-3 hover:-translate-y-2 hover:text-yellow-600"
            >
              Resume
            <hr className="w-8 h-1 mx-auto my-2 bg-yellow-500 border-0 rounded"></hr>
        </Link>
    </div>
  )
}
