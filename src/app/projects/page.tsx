import Link from 'next/link'

export const metadata = {
  title: "Projects | Claire Lu"
}

export default function ProjectsPage() {
    return (
        <main>
        <ProjectsSection/>
        </main>
      );
}

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="text-center font-bold text-3xl">
                Projects
            </h1>
        </section>
    )
}