'use client'
import { useState } from 'react';
import Link from 'next/link'
import ExportedImage from "next-image-export-optimizer";
import projects from '../data/project_data';
import { BsGithub } from "react-icons/bs"
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { HiOutlineRefresh } from 'react-icons/hi';

const ProjectSection = () => {
    const [filters, setFilters] = useState([
        { name: "Programming", checked: false },
        { name: "Tech Art", checked: false },
        //{ name: "UX / UI", checked: false },
        { name: "Games", checked: false },
        { name: "3D Modeling", checked: false },
    ]);
    
    // Toggle filter state
    const toggleFilter = (index: number) => {
        setFilters((prevFilters) =>
            prevFilters.map((filter, idx) =>
                idx === index ? { ...filter, checked: !filter.checked } : filter
            )
        );
    };

    // Get active filters
    const activeFilters = filters
        .filter((filter) => filter.checked)
        .map((filter) => filter.name);

    // Filter projects based on active filters
    const filteredProjects = projects.filter(
        (project) => activeFilters.length === 0 || activeFilters.includes(project.filter)
    );

    // Reset all filters
    const resetFilters = () => {
        setFilters((prevFilters) =>
            prevFilters.map((filter) => ({ ...filter, checked: false }))
        );
    };

    return (
        <section id="projects">
            <h1 className="text-center font-bold text-3xl">
                Projects
            </h1>
            <div className='max-w-7xl text-left m-auto p-4 mt-4'>
                <div className='custom-flex-filters-component'>
                    <div className='font-bold underline text-xl'>
                        Filters: 
                    </div>
                    {filters.map((filter, idx) => (
                        <button
                            key={idx}
                            className={`custom-flex-filters-styling gap-2 items-center justify-center ${
                                filter.checked ? "bg-black text-white" : "bg-gray text-black hover:bg-med_gray"
                            }`}
                            onClick={() => toggleFilter(idx)}
                        >
                            {filter.name}
                            {filter.checked && 
                                <AiOutlineCheckCircle size={20}/>
                            }
                        </button>
                    ))}
                    <button
                        className="hover:text-hover_yellow flex flex-row items-center justify-center gap-2"
                        onClick={resetFilters}
                    >
                        Reset Filters
                        <HiOutlineRefresh/>
                    </button>
                </div>
            </div>
            <div className='custom-flex-center-span-height'>
                <div className="custom-grid">
                    {filteredProjects.map((project, idx) => {
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
                                            {project.github !== "" &&
                                            <Link href={project.github} target="_blank">
                                                <BsGithub
                                                    size={30}
                                                    className="mt-2 hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ) 
                    })}
                </div>
            </div>

        </section>
    )
}
export default ProjectSection