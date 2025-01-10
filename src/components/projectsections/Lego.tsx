'use client'

import ExportedImage from "next-image-export-optimizer"
import Link from "next/link";
import { BsGithub } from "react-icons/bs"
import tool from "../../webs_images/proj_images/lego/tool.jpg";
import high from "../../webs_images/proj_images/lego/high.png";
import low from "../../webs_images/proj_images/lego/low.png";
import grid from "../../webs_images/proj_images/lego/grid.png";
import legos from "../../webs_images/proj_images/lego/legos.png";
import thumb_lego from "../../webs_images/thumbnails/thumb_lego.jpg";

const tags = [
    { skill: "Houdini"}
]

const LegoSection = () => {
  return (
    <div>
        <section id="lego">
            <h1 className="text-center font-bold text-3xl">
                Procedural LEGO-ifier Tool
            </h1>
            <div className="flex items-center justify-center mt-8">                
                <div className="md:4/5">                
                    <div className="w-full">
                        <ExportedImage 
                            className="rounded-sm"
                            src={thumb_lego}
                            alt="" 
                            width={700} 
                            height={300}>
                        </ExportedImage>
                    </div>
                </div>
            </div>
            <div className='custom-body-2'>
                <h1 className="custom-subheading-2">
                    Overview
                </h1>
                <div className="mt-2">
                    This was a project for CIS 5660, Procedural Graphics.
                    The goal of this project was to lego-ify a mesh so that it "blockifies" it - making it composed of a variety of lego blocks.
                    Throughout this project, I used Houdini's Rubber Toy Test Geometry node to show the output of the blockified mesh.
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
                    <Link href={"https://github.com/ClaireL21/hw03-legos/tree/main"} target="_blank">
                        <BsGithub
                            size={30}
                            className="mt-2 hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                    </Link>
                </div>
                <h1 className="custom-subheading-2">
                    Convert Mesh to Points
                </h1>
                <div className="mt-2">
                The first step was to convert the given mesh to a volume of points. 
                I did this by using a VDB node and a Convert VDB node to compute the volume of the mesh and then using a Points from Volume node to generate the points in 3D space from the mesh. 
                Next, I set the scale of all the particles so that the particle separation 
                (how far points are from each other) can be customized by the user. 
                This impacts how "blocky" the end output is. Larger particle separation results in larger lego bricks and a "blockier" feel to the output.
                </div>
                <div className="mt-2">
                Below are two outputs obtained from blockifying - the first one is a result of smaller 
                particle separation between points and the second one uses a larger scale.
                </div>
                <div className="custom-twocol-body items-center justify-center mt-8">                
                    <div className="md:1/2">                
                        <div className="w-full">
                            <ExportedImage 
                                className="rounded-sm"
                                src={low}
                                alt="" 
                                width={700} 
                                height={300}>
                            </ExportedImage>
                        </div>
                    </div>
                    <div className="md:1/2">                
                        <div className="w-full">
                            <ExportedImage 
                                className="rounded-sm"
                                src={high}
                                alt="" 
                                width={700} 
                                height={300}>
                            </ExportedImage>
                        </div>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    Convert Points to LEGO bricks
                </h1>
                <div className="mt-2">
                The lego output uses a variety of bricks: Block bricks (2x2, 2x1, 1x1), 
                slope bricks (1x1) and grill bricks (2x1).
                </div>
                <div className="flex items-center justify-center mt-8">                
                    <div className="md:4/5">                
                        <div className="w-full">
                            <ExportedImage 
                                className="rounded-sm"
                                src={legos}
                                alt="" 
                                width={700} 
                                height={300}>
                            </ExportedImage>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    The logic for categorizing points is done inside an Attribute Wrangle node. 
                    I essentially create three groups, one for sloped bricks, grill bricks, and 
                    block bricks, and assign each point to one of the three groups.
                </div>
                <div className="mt-2">
                    Slope bricks are placed on particles where the normal is sufficiently dissimilar to the up vector. 
                    Grill bricks are placed on particles where there are no particles above the current one. 
                    This can be determined by using the pcfind function, and offsetting the current y position by a 
                    small amount as the location to search. Then, when pcfind returns a group of nearby points, we 
                    can check to see if they are points above the current particle. Lastly, we place block points on 
                    all other particles.
                </div>
                
                <h1 className="custom-subheading-2">
                    Preventing Intersecting Lego Blocks
                </h1>
                <div className="">
                    We can place blocks at points by looping through each particle and placing a LEGO brick at 
                    particle if there isn't one already there. We can then remove any particles that are covered 
                    by the current LEGO brick to ensure that we don't place multiple bricks on the same particle.
                </div>
                <div className="mt-2">
                    However, because the LEGO blocks used are different sizes and shapes, we use a greedy method 
                    to first place as many large blocks as possible and then fill the space with smaller blocks. 
                    This is done by iterating through each point and keeping track of which points remain unused 
                    by a brick after assigning bricks to particles as described above. Once we have finished our 
                    for loop, we will have split the original input group of points into "points occupied by LEGO 
                    bricks" and "points unoccupied by LEGO bricks". Since we cannot place any more of the current 
                    size of LEGO bricks onto our points, then we must occupy the remaining unused points with a 
                    smaller brick type. We can do this repeatedly with decreasing brick sizes until we have occupied 
                    all points with a brick.
                </div>
                <h1 className="custom-subheading-2">
                    Exposing Node Parameters
                </h1>
                <div className="">
                    In order to make the LEGO-ifying usable as a tool, I exposed 
                    certain parameters to be customizable for the user. 
                    These included 1) the point separation of the particles 
                    (which controls the size of the LEGO bricks and in turn makes 
                    the end output more or less "blocky"), 2) the threshold of block 
                    slope (which controls the number of slope blocks), 3) the percentage of 
                    grill bricks (which controls the number of grill bricks), and 4) the color 
                    of the blocks (which applies a tint to the brick color).
                </div>
                <div className="flex items-center justify-center mt-8">                
                    <div className="md:4/5">                
                        <div className="w-full">
                            <ExportedImage 
                                className="rounded-sm"
                                src={tool}
                                alt="" 
                                width={700} 
                                height={300}>
                            </ExportedImage>
                        </div>
                    </div>
                </div>

                <h1 className="custom-subheading-2">
                    Rendering
                </h1>
                <div className="">
                    Lastly, I rendered the LEGO-ified mesh using the three-point lighting technique and made the material for the bricks plastic-like.

                    Below are some outputs of the LEGO-ified mesh!
                </div>
                <div className="flex items-center justify-center mt-8">                
                    <div className="md:4/5">                
                        <div className="w-full">
                            <ExportedImage 
                                className="rounded-sm"
                                src={grid}
                                alt="" 
                                width={700} 
                                height={300}>
                            </ExportedImage>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
export default LegoSection
