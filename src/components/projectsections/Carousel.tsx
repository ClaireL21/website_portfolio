'use client'

import ExportedImage from "next-image-export-optimizer"
import Link from "next/link";
import { BsGithub } from "react-icons/bs"

// Ornament
import thumb_ornament from "../../webs_images/thumbnails/thumb_ornament.jpg";
import or1 from "../../webs_images/proj_images/ornament/or1.png"
import or2 from "../../webs_images/proj_images/ornament/or2.png"
import or3 from "../../webs_images/proj_images/ornament/or3.png"
import or4 from "../../webs_images/proj_images/ornament/or4.png"
import var1 from "../../webs_images/proj_images/ornament/var1.jpg"

// Carousel
import car1 from "../../webs_images/proj_images/carousel/car1.png"
import car2 from "../../webs_images/proj_images/carousel/car2.png"
import car3 from "../../webs_images/proj_images/carousel/car3.png"
import car4 from "../../webs_images/proj_images/carousel/car4.png"
import car5 from "../../webs_images/proj_images/carousel/car5.png"
import wood from "../../webs_images/proj_images/carousel/wood.png"
import bark from "../../webs_images/proj_images/carousel/bark.png"
import metal from "../../webs_images/proj_images/carousel/metal.png"

// Finished Carousels
import fin1 from "../../webs_images/proj_images/carousel/fin1.png"
import fin2 from "../../webs_images/proj_images/carousel/fin2.jpg"
import fin3 from "../../webs_images/proj_images/carousel/fin3.jpg"
import fin4 from "../../webs_images/proj_images/carousel/fin4.jpg"
import fin5 from "../../webs_images/proj_images/carousel/fin5.jpg"
import fin6 from "../../webs_images/proj_images/carousel/fin6.jpg"

// Unreal Engine
import ue from "../../webs_images/proj_images/carousel/ue.jpg"
import car_gif from "../../webs_images/proj_images/carousel/car.gif"

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
            </div>
            <div className='custom-body-2'>
                <div className="italic mt-2">
                    Procedural Carousel Tool Demo
                </div>
                <h1 className="custom-subheading-2">
                    Overview
                </h1>
                <div className="mt-2">
                    This project was a three person group project for CIS 5660, Procedural Graphics.
                </div>
                <div className="mt-2">
                    Goal: Create an artist friendly tool for generating wooden toy carousels.
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
                
                <h1 className="custom-subheading-2 hover:text-hover_yellow">
                    <Link href="/projects/ornament" target="_blank">                    
                    1. Ornament Tool (Houdini)
                    </Link>
                </h1>
                <div className="custom-twocol-body">
                    <div className="md:w-1/2">
                        <div className="mt-2">
                        I created an ornament tool to decorate the walls of the carousel. 
                        In our final renders, you can see delicate gold, silver, and sometimes wooden ornament details 
                        that are chained along the circumference of the carousels -- I think this really helped to pull the charming, vintage look of the carousels together.
                        </div>
                        <div className="font-bold mt-2">
                            Ornament Spiral Structure
                        </div>
                        <div>
                            I decided to break down the structure of a basic ornament piece in the following way.
                        </div>
                       
                        <ul className="px-8 list-disc">
                            <li>
                            Spiral Spine - the main spiral that acts as the backbone for the branching spirals
                            </li>
                            <li>
                            Spiral Branches - the smaller spirals that grow out from the curve of the spiral spine
                            </li>
                            <li>
                            Centerpiece - the part of the ornament that is positioned in the center of the left and right spirals
                            </li>
                        </ul>

                        <div className="mt-2">
                            There were a few visual elements with the tool that I wanted to hit:
                        </div>
                        <h1 className="font-bold mt-2">
                            Tool Goals
                        </h1>
                        <div>
                            <ul className="px-8 list-disc">
                                <li>
                                Adjustable shape for the main spiral spine -- I wanted the user to be able to adjust the contrast of the scale of the two spirals that make up a spiral spine
                                </li>
                                <li>
                                A variety of spirals oriented inwards and outwards from the main spiral spine -- the spiral branches can be oriented differently on the same spiral spine, making the end result more visually interesting
                                </li>
                                <li>
                                Adjustable position of the spiral branches -- I wanted the user to be able to adjust the position of the branches relative to the spiral spine
                                </li>
                                <li>
                                Stylized, wooden look to the end mesh -- since our carousel should have a wooden look, I wanted the ornament detailing to match this
                                </li>
                            </ul>
                        </div>


                    </div>

                    <div className="md:w-1/2">
                        <div className="h-[300px] p-2">
                            <ExportedImage
                                className="h-full w-auto object-contain"
                                src={thumb_ornament}
                                alt="" 
                                width={400}
                                height={400}
                                >
                            </ExportedImage>
                        </div>
                        <div className="italic">
                            Snapshot of Ornament Tool
                        </div>
                        <br/>
                        
                        <div className="h-[260px] p-2">
                            <ExportedImage
                                className="h-full w-auto object-contain"
                                src={var1}
                                alt="" 
                                width={400}
                                height={300}
                                >
                            </ExportedImage>
                        </div>
                        <div className="italic">
                            Example output
                        </div>
                        <br/>
                        <Link className="underline italic custom-highlighted-text " href="/projects/ornament" target="_blank">                    
                            More info
                        </Link>
                    </div>

                </div>
                <div className="mt-2">
                    Here are some close-ups on the final carousels!
                </div>
                <div className="custom-row-images flex items-stretch justify-center">
                    <div className="h-[150px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={or1}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[150px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={or2}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[150px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={or3}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[150px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={or4}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    2. Custom Materials (Substance Designer) + Texturing (Substance Painter)
                </h1>
                <div className="">
                    I had been wanting to learn how to create materials using Substance Designer for a while 
                    and I thought this project would be a good opportunity to. I was also curious about the workflow from 
                    modeling to texturing and then scene creation, so I was happy to be able to touch all parts of the pipeline 
                    with this project -- starting with figuring out a workflow for applying textures to our carousel mesh.
                </div>
                <br/>
                <div className="font-bold mt-2">
                    Custom Materials (Adobe Substance Designer)
                </div>
                <div className="custom-twocol-body">
                    <div className="md:w-1/2">
                        <div>
                        I ended up creating a few basic materials in Adobe Substance Designer, including two wood materials and one metal material
                        I used Adobe Substance Painter to apply my custom wooden bark material to the roof of the carousel. 
                        I then layered a variety of the provided materials in Substance Painter to create a worn down painted effect.
                        </div>
                        <div className="mt-2">
                        Here are the materials I created with the guidance of several tutorials:
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="custom-row-images flex items-stretch justify-center">
                            <div className="h-[200px] p-2">
                                <ExportedImage
                                    className="h-full w-auto object-contain"
                                    src={wood}
                                    alt="" 
                                    width={400}
                                    height={400}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="h-[200px] p-2">
                                <ExportedImage
                                    className="h-full w-auto object-contain"
                                    src={bark}
                                    alt="" 
                                    width={400}
                                    height={400}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="h-[200px] p-2">
                                <ExportedImage
                                    className="h-full w-auto object-contain"
                                    src={metal}
                                    alt="" 
                                    width={400}
                                    height={400}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                    </div>
                </div>
                
                <br/>
                
                <div className="custom-twocol-body">
                    <div className="md:w-1/2">
                        <div className="font-bold">
                            Texturing (Adobe Substance Painter)
                        </div>
                        <div className="mt-2">
                            The final look on the carousels is a combination of the custom materials I made in Substance Painter
                            and texturing I did in Substance Painter
                        </div>
                        <div className="font-bold mt-2">
                        Washed out paint look on carousel box: 
                        </div>
                        <div>
                        This effect was achieved by layering the Paint Spray and then 
                        Paint Roll materials on top of each other, which created an overall paint-like look. Then, using a 
                        couple of Grunge Maps, I created the darker paint strokes near the top and bottom, leaving the middle to 
                        look lighter and more worn out.
                        </div>
                        <div className="font-bold mt-2">
                        Wooden base: 
                        </div>
                        <div className="">
                        Using a stylized wood material, I created the wood patterning in the base. Then, 
                        using Grunge, I added some more variation in the coloring of the wood.
                        </div>
                        <div className="font-bold mt-2">
                        Metal ornaments: 
                        </div>
                        <div className="">
                        I used a metal texture for the ornaments because I thought this would help distinguish them from the rest of the 
                        carousel and then added some red undertones to mimic reflection of the carousel's pink base.
                        </div>
                        
                    </div>
                    <div className="md:w-1/2">
                        <ExportedImage
                            className="h-full w-auto object-contain p-4"
                            src={car1}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="custom-row-images flex items-stretch justify-center">
                    <div className="h-[200px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={car3}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[200px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={car4}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[200px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={car5}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    3. Scene Creation (Unreal Engine)
                </h1>
                <div className="">
                    I textured a handful of more carousels following the same process. Here are some below:
                </div>
                <div className="custom-row-images flex items-stretch justify-center">
                    <div className="h-[300px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={fin1}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[300px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={fin2}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[300px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={fin3}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="custom-row-images flex items-stretch justify-center">
                    <div className="h-[300px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={fin4}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[300px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={fin5}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[300px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={fin6}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <br/>
                <div className="custom-twocol-body">
                    <div className="md:w-1/2">
                        I then exported the material files and created custom materials in Unreal Engine using UDIMs.  
                        This was a lengthy process as the textures created in Substance Painter mapped the textures to each individual component
                        and simply importing the model into Unreal and creating a single material for the entire model resulted in funny mapping distortions. 
                        After long hours of experimenting with different workflows, I found that separating a carousel's components (such as into the base, crown, column, animals, etc.) 
                        and utilizing the UDIM tile workflow to handle mapping UVs and textures allowed me to correctly apply the textures I created in 
                        Substance Painter into the models in Unreal Engine.
                    </div>
                    <div className="md:w-1/2">
                        <div className=" p-2">
                            <ExportedImage
                                className="h-full w-auto object-contain"
                                src={ue}
                                alt="" 
                                width={400}
                                height={400}
                                >
                            </ExportedImage>
                        </div>
                    </div>
                </div>
                <div className="custom-twocol-body">
                    <div className="md:w-1/2">
                        Lastly, I built the scene in Unreal using a custom wood grain texture for the bookshelves, hand-placed over a dozen 
                        carousels and tiny toy animals (plain animal meshes we use for the input to the carousels), positioned lights, and rendered the scene.
                        I also created a simple Unreal Blueprint for animating the carousel's base and attached animals so that the carousels would spin.
                        I applied this blueprint to each of the carousels, changing the rotation speed slightly for each one.  
                    </div>
                    <div className="md:w-1/2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={car_gif}
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
export default CarouselSection
