'use client'
import Link from 'next/link'
const ProjectSection = () => {
    return (
        <section id="projects">
            <h1 className="text-center font-bold text-3xl">
                Projects
            </h1>
            <div className="custom-flex-center">
                hello hello
                <p>
                I'm a senior studying{" "}
                <a href="http://cg.cis.upenn.edu/dmd.html" className="font-semibold text-def_yellow hover:text-hover_yellow">
                    Digital Media Design (DMD)
                </a>
                , an interdisciplinary program between computer 
                science and visual arts, at the University of Pennsylvania. I'm passionate about 
                software engineering and computer graphics. {" "}
              </p>
            </div>
        </section>
    )
}
export default ProjectSection