'use client'
import Link from 'next/link'
import ExportedImage from "next-image-export-optimizer";
import projects from '../data/project_data';

const FeaturedSection = () => {
    const featured_projects = projects.slice(0, 3);
  return (
    <div>
      <section id="featured">
      <div className="custom-subheading">
        Featured Projects
      </div>
      <div className='custom-flex-center-span-height'>
                <div className="custom-grid">
                    {featured_projects.map((project, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-1">
                                    <div className="">
                                        <Link href={project.link} target="_blank">
                                        <ExportedImage className="w-full h-52 object-cover rounded-sm" src={project.image} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="mt-4 text-left">
                                        <h1 className="custom-text-clickable-proj-heading mb-2">
                                            <Link href={project.link} target="_blank">
                                                {project.name}
                                            </Link>
                                        </h1>
                                        <p className="mb-2"> 
                                            {project.description}
                                        </p>
                                        <div className="custom-flex-tags-component">
                                            {project.tags.map((item, idx) => {
                                                return (
                                                    <p key={idx}
                                                        className="custom-flex-tags-styling"
                                                        >
                                                        {item.skill}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ) 
                    })}
                </div>
            </div>
      </section>
    </div>
  )
}
export default FeaturedSection
