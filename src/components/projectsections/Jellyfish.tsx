'use client'

import ExportedImage from "next-image-export-optimizer"
import Link from "next/link";
import { BsGithub } from "react-icons/bs"
import head from "../../webs_images/proj_images/jellyfish/head.png";
import arms from "../../webs_images/proj_images/jellyfish/arms.png";
import head_arms from "../../webs_images/proj_images/jellyfish/head_arm.jpg";
import tent from "../../webs_images/proj_images/jellyfish/tentacles.png";
import organs from "../../webs_images/proj_images/jellyfish/organs.png";
import veins from "../../webs_images/proj_images/jellyfish/veins.png";
import head_tent from "../../webs_images/proj_images/jellyfish/head_tent.png";

const tags = [
    { skill: "Houdini"},
]

const JellyfishSection = () => {
  return (
    <div>
        <section id="jellyfish">
            <h1 className="text-center font-bold text-3xl">
            Procedural Jellyfish
            </h1>
            <div className="md:w-4/5 custom-body align-center items-center justify-center text-center">                
                <div className="md:h-[600px] h-[300px]">
                    <iframe className="custom-video-container" src="https://www.youtube.com/embed/-JjSAfr1sEk?si=LnSdGsV8-zWOemlj" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
            <div className='custom-body-2'>
                <div className="italic mt-2">
                A procedurally modeled and animated jellyfish
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
                    <Link href={"https://github.com/ClaireL21/hw02-jellyfish/tree/main?tab=readme-ov-file"} target="_blank">
                            <BsGithub
                                size={30}
                                className="mt-2 hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                    </Link>
                </div>
                <h1 className="custom-subheading-2">
                    Overview
                </h1>
                <div className="mt-2">
                    This project was a project for CIS 5660, Procedural Graphics.
                </div>
                <div className="mt-2">
                For my procedural jellyfish, I decided to create a glowy, shiny gold and white jellyfish.

                I started by creating the bell and the arms of the jellyfish.

                I made the bell by using a line node, bending it, and then revolving it to create a hemispherical shape. I then used the mountain node to give it a more organic look, and extruded it to give it some thickness.

                For the arms, I started with a rectangular grid, added ruffles to it by adding a noise values to the points based on their location on the grid, and then applied a twist to it. I used a cloth constraint to make it look stretchier and matched it to the animation of the bell by using a point deform node.
                </div>

                <div className="custom-row-images flex items-stretch justify-center">
                    <div className="h-[250px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={head}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[250px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={arms}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[250px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={head_arms}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="mt-2">
                To create the veins, I used the shortest path node. First, I described a set of points on the 
                jellyfish bell to be the start points and another set of points to be the end points. Calculating
                 the shortest paths from each of the endpoints to a subset of the startpoints gave a nice veiny 
                 look that worked well for the jellyfish. The most challenging part about using the shortest path
                  node, though, was getting the animation to run smoothly with the bell. At first, when trying to 
                  deform the paths to match the surface of the bell, the shortest path node would recalculate paths 
                  and the veins would change. I then tried using a timeshift node to freeze the calculations at the 
                  first frame - however, this caused the veins to no longer move with the bell. In the end, I found 
                  the solution to be using two timeshifts. The first timeshift is for calculating the shortest paths 
                  and creating the veins. Then, the second one references the original bell geometry and deforms the 
                  veins points based on that. This allowed the veins to move with the bell without recalculating paths!
                </div>
                <div className="custom-row-images flex items-stretch justify-center">
                    <div className="h-[250px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={veins}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[250px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={organs}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="mt-2">
                    Next, I created the organs. For this, I created a line, used several bends to make it in the shape I wanted, and then gave it thickness and copied it for a total of four pieces.
                </div>

                <div className="mt-2">
                Lastly, I created the tentacles. I wanted the tentacles to be attached to the jellyfish along the circumference of the bottom of the bell. I used a torus and a scatter node to create a ring of points from which I could later generate lines. The jellyfish's bell isn't completely circular, though, so the points didn't match up perfectly with the bottom of the node. In order to fix this, I used a ray node to project the points onto the surface of the bell. However, because of the bell's upward-downward animation, the points weren't always projected onto the rim of the bell, so I first deformed the points to move along with the animation of the jellyfish and then used the ray node to project the points. After this, I copied lines to the points to give it more of a tentacle shape, used a hair constraint and vellum solver to help capture the movement of the tentacles, and used a sweep node to give it some thickness.
                </div>
                <div className="custom-row-images flex items-stretch justify-center">
                    <div className="h-[250px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={tent}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[250px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={head_tent}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
export default JellyfishSection
