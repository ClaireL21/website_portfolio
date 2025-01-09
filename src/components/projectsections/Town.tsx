'use client'

import ExportedImage from "next-image-export-optimizer"
import cover from "../../webs_images/proj_images/town/town_cover.jpg";
import inspo1 from "../../webs_images/proj_images/town/inspo1.jpg";
import inspo2 from "../../webs_images/proj_images/town/inspo2.jpg";
import inspo3 from "../../webs_images/proj_images/town/inspo3.jpeg";
import process from "../../webs_images/proj_images/town/process.jpg";
import lanterns_model from "../../webs_images/proj_images/town/lantern_model.jpg";
import lanterns1 from "../../webs_images/proj_images/town/lanterns1.jpg";
import lanterns2 from "../../webs_images/proj_images/town/lanterns2.jpg";
import bush_model from "../../webs_images/proj_images/town/bush_model.jpg";
import bush1 from "../../webs_images/proj_images/town/bush1.jpg";
import bush2 from "../../webs_images/proj_images/town/bush2.jpg";
import bush3 from "../../webs_images/proj_images/town/bush3.jpg";
import house1 from "../../webs_images/proj_images/town/house1.jpg";
import house2 from "../../webs_images/proj_images/town/house2.jpg";
import house3 from "../../webs_images/proj_images/town/house3.jpg";
import house_model from "../../webs_images/proj_images/town/house_model.jpg";
import house_hda from "../../webs_images/proj_images/town/house_hda.jpg";

import Link from "next/link"
import { BsGithub } from "react-icons/bs"

const tags = [
    { skill: "Unity"},
    { skill: "Shader Graph"},
    { skill: "Houdini"},
    { skill: "VFX"},
]

const TownSection = () => {
  return (
    <div>
        <section id="robot">
            <h1 className="text-center font-bold text-3xl">
                Stylized Town Scene
            </h1>
            <div className="md:w-4/5 custom-body align-center items-center justify-center text-center">
                <div className="md:h-[600px] h-[300px]">
                    <iframe className="custom-video-container" src="https://player.vimeo.com/video/1045104313?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
            <div className='custom-body-2'>
                <h1 className="custom-subheading-2">
                    Overview
                </h1>
                <div className="">
                    My goal with this piece was to explore non-photorealistic rendering techniques
                    and create a painterly look. I first explored Unity's Shader Graph when creating 
                    my {" "}
                    <span className="custom-highlighted-text">
                        <Link href="/projects/robot" target="_blank" >
                        Stylized Shader Robot Scene
                        </Link>
                    </span>
                    {" "} and I was amazed by the visual looks that could be achieved. I noticed that 
                    different painterly looks carry their own unique charm and really set the atmosphere of a scene.
                    For this project, I wanted to create a quaint, cozy environment with warm, 
                    vibrant colors.
                </div>

                <h1 className="custom-subheading-2">
                    Features Implemented
                </h1>
                
                <div className="custom-twocol-body">
                
                    <div className="md:w-1/2">
                        <div className="mt-2 font-bold">
                            Procedurally Generated Models (Houdini)
                        </div>
                        <ul className="px-8 list-disc">
                            <li>Houses, towers, bushes, clouds, lanterns</li>
                        </ul>
                        <div className="mt-2 font-bold">
                            Surface Shaders
                        </div>
                        <div>
                            <ul className="px-8 list-disc">
                                <li>Stylized Watercolor Surface Shader </li>
                                <li>Wobbly Watercolor Shader (Vertex Deformation on bushes, kites, clouds)</li>
                            </ul>
                        </div>
                        <div className="font-bold">
                            Post-Processing Effects
                        </div>
                        <div>
                            <ul className="px-8 list-disc">
                                <li>Depth-Based Outlines</li>
                                <li>Color Outlines</li>
                                <li>Noisy Water Bleed Edge Outlines</li>
                                <li>Edge Distortion Outlines</li>
                                <li>Watercolor Edge Vignette</li>
                            </ul>
                        </div>
                        
                        <div className="mt-2 custom-flex-tags-component">
                            {tags.map((item, idx) => {
                                return (
                                    <p key={idx}
                                        className="custom-flex-tags-styling"
                                        >
                                        {item.skill}
                                    </p>
                                )
                            })}
                            <Link href={"https://github.com/ClaireL21/stylized-medieval-town"} target="_blank">
                                <BsGithub
                                    size={30}
                                    className="mt-2 hover:-translate-y-1 transition-transform cursor-pointer"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">                
                        <div className="w-full">
                            <ExportedImage 
                                className="rounded-sm"
                                src={cover}
                                alt="" 
                                width={600} 
                                height={300}>
                            </ExportedImage>
                            <div className="italic mt-2">
                                Stylized watercolor shader with procedural models, surface deformation shaders, and post processing effects.
                            </div>
                        </div>
                    </div>
                </div>
                
                <h1 className="custom-subheading-2">
                    Design System
                </h1>
                <div className="">
                    I wanted to be super intentional with the look and feel I was creating with my envrionment.
                    For this reason, I gathered a lot of inspiration pieces and developed a design system with a few
                    rules that I aimed to follow.
                    <div className="mt-2">
                        <span className="font-bold">Inspiration</span>
                        <div className="custom-row-images">
                            <div className="md:w-1/3 p-2">
                                <ExportedImage
                                    className="w-full"
                                    src={inspo1}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="md:w-1/3 p-2">
                                <ExportedImage
                                    className="w-full"
                                    src={inspo2}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="md:w-1/3 p-2">
                                <ExportedImage
                                    className="w-full"
                                    src={inspo3}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                        </div>

                        <p className="italic">
                            Credit: {" "}
                            <a className="custom-highlighted-text" href="https://www.townscapergame.com/" target="_blank">
                                Townscaper Game
                            </a>

                        </p>

                    </div>
                    <div className="mt-2">
                        <span className="font-bold">Design System</span>
                        <ul className="px-8 list-disc">
                            <li>Simplicity in mesh, more visual focus on color/texture</li>
                            <li>Low poly meshes</li>
                            <li>Soft, but defined edges</li>
                            <li>Warm colors</li>
                            <li>Painterly texture: watercolor edges, distorted outlines, hand-drawn feel</li>
                        </ul>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    Pipeline
                </h1>
                <div>
                    I modeled procedural assets in Houdini and then packaged them into Houdini HDAs. 
                    (Within the Houdini asset tools I created, I made sure to include parameters for 
                    Unity materials to allow for easy design iterations on the final look!)
                    I then brought these HDAs over to my Unity Universal Render Pipeline (URP) project via Houdini Engine, 
                    and implemented various 
                    shaders and post processing effects using Unity's Shader Graph.
                </div>
                <h1 className="custom-subheading-2">
                    Key Procedural Components
                </h1>
                <div className="">
                    The houses, bushes, lanterns, towers, and clouds are procedurally generated using Houdini.
                    <div className="mt-2">
                        <span className="font-bold">Houses</span>
                        <div className="custom-row-images">
                            <div className="md:w-1/3 p-2">
                                <div>
                                    For the house tool, I was inspired by the look of Townscaper houses.
                                    I really liked the simple, geometric, blocky style of thoses houses and I wanted 
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
                                <div className="italic mt-2">
                                    For more information, you can check out {" "}
                                    <Link className="custom-highlighted-text" href="/projects/house" target="_blank">
                                        this demo 
                                    </Link>
                                    {" "}on my house tool.
                                </div>
                                
                            </div>
                            <div className="md:w-2/3 p-2">
                                <ExportedImage
                                    className="w-full object-cover"
                                    src={house_hda}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>

                        </div>
                        <div className="custom-row-images items-stretch justify-center">
                            <div className="md:w-1/3 p-2">
                                <ExportedImage
                                    className="w-full h-[230px] object-cover"
                                    src={house1}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="md:w-1/3 p-2">
                                <ExportedImage
                                    className="w-full h-[230px] object-cover"
                                    src={house3}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="md:w-1/3 p-2">
                                <ExportedImage
                                    className="w-full h-[230px] object-cover"
                                    src={house2}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <span className="font-bold">Bushes</span>
                        <div className="mt-2">
                            The bush tool's parameters allow for customizablility 
                            on the shape/size of the bush and pot as well as the inclusion of flowers.
                        </div>
                        <div className="custom-row-images items-stretch justify-center">
                            <div className="md:w-1/4 p-2">
                                <ExportedImage
                                    className="w-full h-[230px] object-cover"
                                    src={bush_model}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="md:w-1/4 p-2">
                                <ExportedImage
                                    className="w-full h-[230px] object-cover"
                                    src={bush1}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="md:w-1/4 p-2">
                                <ExportedImage
                                    className="w-full h-[230px] object-cover"
                                    src={bush2}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="md:w-1/4 p-2">
                                <ExportedImage
                                    className="w-full h-[230px] object-cover"
                                    src={bush3}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <span className="font-bold">Lanterns</span>
                        <div className="mt-2">
                            The lantern tool's parameters allow for customizablility 
                            on the size of the lantern, including the size/height of the base and 
                            topper.
                        </div>
                        <div className="custom-row-images items-stretch justify-center">
                            <div className="md:w-1/4 p-2">
                                <ExportedImage
                                    className="w-full h-[230px] object-cover"
                                    src={lanterns_model}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="md:w-1/3 p-2">
                                <ExportedImage
                                    className="w-full h-[230px] object-cover"
                                    src={lanterns1}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="md:w-1/3 p-2">
                                <ExportedImage
                                    className="w-full h-[230px] object-cover"
                                    src={lanterns2}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    Developing a Painterly Watercolor Feel
                </h1>
                <div>
                    One of the main challenges with this project was developing a cohesive watercolor feel.
                    After creating a basic watercolor surface shader, I felt like there could still be more done
                    to make a convincing watercolor effect. I experimented with a variety of post processing effects
                    and in the end chose the following, which I felt really captured the charm of a hand-drawn, cozy, watercolor look.
                </div>
                <div className="mt-2">
                    <span className="font-bold">1. Basic Watercolor Effect</span>
                    <ul className="px-8 list-disc">
                        <li>I implemented a Watercolor Surface Shader using Unity's Shader Graph, 
                            which helped accomplish a soft watercolor appearance and the characteristic
                            watercolor bleed edges for the shadows. This was done by applying noise 
                            when sampling the direction of the light and offseting the shadow based on the 
                            noisy light rotation.
                        </li>
                        <li>I later also created a Wobbly Watercolor Surface Shader that I applied to the bushes
                            to make them look like they're swaying in the wind. 
                        </li>
                    </ul>
                    <span className="font-bold">2. Hand-drawn Effect</span>
                    <ul className="px-8 list-disc">
                        <li>The Watercolor Shader created a really nice hand-drawn look for the 
                            shadows of the meshes. I wanted to push this by introducing more
                            noise into the rest of the scene. I implemented a few post processing 
                            effects, including distorting the edges of the meshes, creating a subtle 
                            outline that varied with depth, and applying a vignette that mimicked 
                            the way watercolor bleeds and fades on paper
                            </li>
                    </ul>
                    <span className="font-bold">3. Extra Polish</span>
                    <ul className="px-8 list-disc">
                        <li>Lastly, I added some extra polish. I wanted to simulate the subtle 
                            outlines that can happen when watercolor bleeds so I created bleed marks
                            along the edges of the meshes. I also wanted to pull more attention to the 
                            distorted edges from the last step so I created color-based outlines.
                        </li>
                    </ul>
                </div>
               
                <div className="custom-twocol-body mt-2">
                    <div className="md:w-4/5">
                        <ExportedImage
                            className="w-full"
                            src={process}
                            alt="" 
                            width={600}
                            height={500}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-1/5 p-2">
                        <p className="italic">
                            For the watercolor shaders, I referenced {" "}
                            <a className="custom-highlighted-text" href="https://cyangamedev.wordpress.com/2020/10/06/watercolour-shader-experiments/" target="_blank">
                                Cyanilux: Watercolor Shader Experiments
                            </a>
                            {" "} and for the watercolor edge marks and color outlines, I referenced {" "}
                            <a className="custom-highlighted-text" href="https://www.youtube.com/watch?v=RMt6DcaMxcE&list=PLkFQdtiEeb8KdHn6k9tTRemNHWufAY6eV&index=8" target="_blank">
                                Ned Makes Games: Sobel Outlines
                            </a>
                        </p>
                    </div>
                </div>
                
                
            </div>
        </section>
    </div>
  )
}
export default TownSection
