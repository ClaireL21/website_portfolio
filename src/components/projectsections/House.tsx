'use client'

import ExportedImage from "next-image-export-optimizer"
import process from "../../webs_images/proj_images/town/house_process.jpg";
import Link from "next/link";

const tags = [
    { skill: "Houdini"},
]

const HouseSection = () => {
  return (
    <div>
        <section id="house">
            <h1 className="text-center font-bold text-3xl">
                Procedural House Tool
            </h1>
            
            <div className="md:w-4/5 custom-body align-center items-center justify-center text-center">                
                <div className="md:h-[600px] h-[300px]">
                    <iframe className="custom-video-container" src="https://player.vimeo.com/video/1045154922?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
            <div className='custom-body-2'>
                <div className="italic mt-2">
                Basic procedural house tool created for the {" "}
                    <Link className="custom-highlighted-text" href="/projects/town" target="_blank">
                    Stylized Town Scene
                    </Link>
                    .
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
                </div>

                <br/>
                <h1 className="custom-subheading-2">
                    Overview
                </h1>
                <div className="custom-twocol-body">
                    <div className="md:w-1/2">
                        <div>
                            For the house tool, I was inspired by the look of houses from the
                            <a className="custom-highlighted-text" href="https://www.townscapergame.com/" target="_blank">
                                Townscaper Game
                            </a>
                            .
                            I really liked their simple, geometric, blocky style and I wanted 
                            to recreate that. 
                        </div>
                        <div className="mt-2">
                            There are a variety of parameters that allow for variety in house generation, 
                            including building size/complexity/cutout intensity, as well as balcony, roof, and window shape/size. 
                        </div>
                        <div className="mt-2">
                            I referenced {" "}
                            <a className="custom-highlighted-text" href="https://youtu.be/XS1IpC3qAP0?si=MszuM1SYYp_A-96z" target="_blank">
                                this tutorial
                            </a>
                            for the basic floor generation and modified it to allow for multiple floors,
                            balcony/roof/window customizability, and more.
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <ExportedImage 
                            className="rounded-sm"
                            src={process}
                            alt="" 
                            width={500} 
                            height={500}>
                        </ExportedImage>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
export default HouseSection
