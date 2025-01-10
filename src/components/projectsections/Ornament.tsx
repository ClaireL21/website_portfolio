'use client'

import ExportedImage from "next-image-export-optimizer"
import Link from "next/link";
import inspo1 from "../../webs_images/proj_images/ornament/inspo.png"
import inspo2 from "../../webs_images/proj_images/ornament/zoomed_inspo.png"
import proc11 from "../../webs_images/proj_images/ornament/proc_11.png"
import proc12 from "../../webs_images/proj_images/ornament/proc_12.png"
import proc2 from "../../webs_images/proj_images/ornament/proc_2.png"
import proc31 from "../../webs_images/proj_images/ornament/proc_31.png"
import proc32 from "../../webs_images/proj_images/ornament/proc_32.png"
import proc33 from "../../webs_images/proj_images/ornament/proc_33.png"
import steps from "../../webs_images/proj_images/ornament/steps.png"
import var1 from "../../webs_images/proj_images/ornament/var1.jpg"
import var2 from "../../webs_images/proj_images/ornament/var2.jpg"
import var3 from "../../webs_images/proj_images/ornament/var3.jpg"
import wooden from "../../webs_images/proj_images/ornament/wooden.jpg"
import chain from "../../webs_images/proj_images/ornament/chain.jpg"
import car1 from "../../webs_images/proj_images/ornament/car1.png"
import car2 from "../../webs_images/proj_images/ornament/car2.png"
import car3 from "../../webs_images/proj_images/ornament/car3.png"
import car4 from "../../webs_images/proj_images/ornament/car4.png"
import or1 from "../../webs_images/proj_images/ornament/or1.png"
import or2 from "../../webs_images/proj_images/ornament/or2.png"
import or3 from "../../webs_images/proj_images/ornament/or3.png"
import or4 from "../../webs_images/proj_images/ornament/or4.png"
import or5 from "../../webs_images/proj_images/ornament/or5.png"


const tags = [
    { skill: "Houdini"},
]

const OrnamentSection = () => {
  return (
    <div>
        <section id="ornament">
            <h1 className="text-center font-bold text-3xl">
                Procedural Ornament Tool
            </h1>
            <div className="md:w-4/5 custom-body align-center items-center justify-center text-center">                
                <div className="md:h-[600px] h-[300px]">
                    <iframe className="custom-video-container" src="https://www.youtube.com/embed/J5084l2l8oY?si=6j5lLW8s0bGsygVO" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
            
            <div className='custom-body-2'>
                <div className="italic mt-2">
                    Procedural Ornament Tool Demo
                </div>
                <h1 className="custom-subheading-2">
                    Tool Final Look on Carousels
                </h1>
                <div className="custom-row-images flex items-stretch justify-center">
                    <div className="h-[350px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={car1}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[350px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={car2}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[350px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={car3}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="h-[350px] p-2">
                        <ExportedImage
                            className="h-full w-auto object-contain"
                            src={car4}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    Tool Concept Ideation
                </h1>
                <div className="custom-row-images items-start">
                    <div className="md:w-1/2 pr-4">
                        <div className="mt-2">
                        This was a tool I created for the
                        <span>
                            <Link href="/projects/carousels" className="custom-highlighted-text">
                                Procedural Carousel Tool
                            </Link>
                        </span>
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
                        <div className="">
                        The goal for the Procedural Carousels project was to create a tool for generating wooden toy 
                        carousels. For this project, I wanted to make a tool to create spiral-shaped ornaments that 
                        would add detail to the carousel mesh.
                        </div>
                        <div className="mt-2">
                            I was inspired by ornaments like the ones on the carousel below. We can see that there could be 
                            many variations to the spiral 
                            ornaments - for example, the shape, orientation, number of branching spirals, and so on.
                        </div>
                        <div className="mt-2">
                            To guide my procedural tool-making, I focused on the spiral ornament that can be seen in the center of the carousel:
                        </div>
                        <div className="md:w-1/2 p-4">
                            <ExportedImage
                                className="w-full h-auto "
                                src={inspo2}
                                alt="" 
                                width={250}
                                height={250}
                                >
                            </ExportedImage>
                        </div>
                    </div>
                    <div className="md:w-1/4 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={inspo1}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="mt-2">
                    We can see that the spiral ornament is symmetric about a centerline.
                </div>
                <div className="mt-2">
                    My basic process was to make one side of the ornament, reflect it, and 
                    then place a center piece mesh above the combined left and right spirals. 
                    I laid out a structure for a basic spiral ornament:
                </div>
                <div>
                    <div className="font-bold mt-2">
                    Spiral Structure: Ornament Components (for one side)
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
                </div>
                <br/>
                <div>
                    The image below demonstrates this spiral structure and my basic workflow for creating the spiral ornament
                </div>
                <br/>
                <div className="">
                    <div className="md:w-2/3">
                        <ExportedImage
                            className="w-full h-auto"
                            src={steps}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <br/>
                <div className="mt-2">
                    There were a few visual elements with the tool that I wanted to hit:
                </div>
                <br/>
                <h1 className="font-bold">
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
                <h1 className="custom-subheading-2">
                    Tool Breakdown
                </h1>
                <div className="mt-2">
                First, I created a basic spiral shape using the spiral node as the shape for the main spiral spine. 
                I created secondary branching spiral nodes and used copy to points to copy a spiral to each point on the main spiral node. However, because a spiral shape is composed of many points, I first used the resample node to increase the length of each line making up the spiral, decreasing the point count.
                </div>
                <div className="custom-row-images items-stretch justify-center">
                    <div className="md:w-1/4 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={proc11}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-1/4 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={proc12}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="mt-2">
                Using an attribute wrangle node, I controlled the position of the points used as spiral branching points, 
                allowing the user control over the positioning of the spiral branches. Visually, most spiral branches stem 
                from the middle range of points on the spiral spine, so I excluded any points outside of the middle range. 
                This was done by using the spiral's mesh and scaling it to zero along the ends of the spiral, creating a 
                bounding box for the points.
                </div>
                <div className="custom-row-images items-stretch justify-center">
                    <div className="md:w-1/4 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={proc2}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="mt-2">
                After adding the spiral branches, I sweeped the entire shape using the Ribbon cross section to create a flat mesh. Then, I reflected the shape to create the entirety of the spiral spine and extruded to give it depth. Afterwards, I added a centerpiece mesh.
                </div>
                <div className="custom-row-images items-stretch justify-center">
                    <div className="md:w-1/4 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={proc31}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-1/4 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={proc32}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-1/3 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={proc33}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="mt-2">
                To give it a wooden look, I beveled the mesh using a custom wood grain noise texture. 
                This created wood patterned indentations on the mesh and helped give it a more polished feel. 
                I also added an additional scaled down version of the spiral spine to mimic the wooden mesh splitting look of the horses on the carousel.
                </div>
                <div className="custom-row-images items-stretch justify-center">
                    <div className="md:w-1/3 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={wooden}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="mt-2">
                Below are some examples of the different kind of outputs we can get:
                </div>
                <div className="custom-row-images items-stretch justify-center">
                    <div className="md:w-1/3 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={var1}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-1/3 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={var2}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-1/3 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={var3}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="mt-2">
                Using a chain node, we can repeat this pattern and place it along the circumference of our carousel. Below is an example of what this might look like with a basic sphere mesh.
                </div>
                <div className="custom-row-images items-stretch justify-center">
                    <div className="md:w-1/2 p-2">
                        <ExportedImage
                            className="w-full h-auto"
                            src={chain}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
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
            </div>
            
        </section>
    </div>
  )
}
export default OrnamentSection
