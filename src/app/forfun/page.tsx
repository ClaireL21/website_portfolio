import Link from 'next/link'

export const metadata = {
  title: "For Fun | Claire Lu"
}

export default function ForFunPage() {
    return (
        <main>
        <ForFunSection/>
        </main>
      );
}

const ForFunSection = () => {
    return (
        <section id="forfun">
            <h1 className="text-center font-bold text-3xl">
                For Fun
            </h1>
        </section>
    )
}