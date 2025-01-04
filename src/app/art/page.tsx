import Link from 'next/link'

export const metadata = {
  title: "Art | Claire Lu"
}

export default function ArtPage() {
    return (
        <main>
        <ArtSection/>
        </main>
      );
}

const ArtSection = () => {
    return (
        <section id="art">
            <h1 className="text-center font-bold text-3xl">
                Art
            </h1>
        </section>
    )
}