'use client'

import ExportedImage from "next-image-export-optimizer"
import Link from "next/link";
import { BsGithub } from "react-icons/bs"

const tags = [
    { skill: "Houdini"},
    { skill: "Unreal Engine"},
    { skill: "Tools for Artists"},
    { skill: "Substance Painter / Designer"},
]

const CarouselSection = () => {
  return (
    <div>
        <section id="carousel">
            <h1 className="text-center font-bold text-3xl">
                Procedural Carousel Tool
            </h1>
            <div className="md:w-4/5 custom-body align-center items-center justify-center text-center">                
                <div className="md:h-[600px] h-[300px]">
                    <iframe className="custom-video-container" src="https://www.youtube.com/embed/RcNlAJCOEN0?si=qe1ixxCl2nYa4OSp" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="italic mt-2">
                    Procedural Carousel Tool Demo
                </div>
            </div>
            <div className='custom-body-2'>
                <h1 className="custom-subheading-2">
                    Overview
                </h1>
                <div className="mt-2">
                    This project was a three person group project for CIS 5660, Procedural Graphics.
                </div>
                <div className="mt-2">
                    Goal: Create an artist friendly tool for generating wooden toy carousels.
                </div>
                <div className="custom-flex-tags-component">
                    {tags.map((item, idx) => {
                    return (
                        <p key={idx}
                            className="custom-flex-tags-styling"
                            >
                            {item.skill}
                        </p>
                    )
                    })}
                    <Link href={"https://github.com/ClaireL21/Procedural-Carousels"} target="_blank">
                            <BsGithub
                                size={30}
                                className="mt-2 hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                    </Link>
                </div>
                <div className="mt-2 font-bold">
                    Personal Contributions
                </div>
                <div>
                    <ul className="px-8 list-disc">
                        <li>
                            Ornament Tool developed in Houdini
                        </li>
                        <li>
                            Developing materials in Substance Designer / Texturing carousels in Substance Painter
                        </li>
                        <li>
                            Scene creation in Unreal Engine
                        </li>
                    </ul>
                </div>
                <h1 className="custom-subheading-2">
                    1. Ornament Tool (Houdini)
                </h1>
                <h1 className="custom-subheading-2">
                    2. Custom Materials (Substance Designer) + Texturing (Substance Painter)
                </h1>
                <h1 className="custom-subheading-2">
                    3. Scene Creation (Unreal Engine)
                </h1>
            </div>
        </section>
    </div>
  )
}
export default CarouselSection
