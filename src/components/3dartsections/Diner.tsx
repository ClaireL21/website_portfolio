'use client'

import ExportedImage from "next-image-export-optimizer"
import render1 from "../../webs_images/proj_images/diner/DinerFinalRender1.jpg";
import render2 from "../../webs_images/proj_images/diner/DinerFinalRender2.jpg";
import diner from "../../webs_images/proj_images/diner/diner2.jpg";
import diner2 from "../../webs_images/proj_images/diner/diner3.jpg";

const tags = [
  { skill: "Maya"},
]

const DinerSection = () => {
  return (
    <div>
        <section id="diner">
            <h1 className="text-center font-bold text-3xl">
                Underwater Retro Diner Environment
            </h1>
            <div className='custom-body-2'>
            <div className="text-center flex item-center justify-center mt-8">
                <ExportedImage 
                    className="rounded-sm"
                    src={render1}
                    alt="" 
                    width={1000} 
                    height={1000}>
                </ExportedImage>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <ExportedImage 
                    className="rounded-sm"
                    src={render2}
                    alt="" 
                    width={1000} 
                    height={1000}>
                </ExportedImage>
            </div>

            <div className="mt-8">
                This was a 3D model of a spooky, retro, underwater diner environment. If you look
                behind the counter, you'll be able to see the semi-hidden octopus!

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
                Process
            </h1>
                
            <div className="mt-2">
                For this project, I really wanted to create an underwater retro diner, and I 
                decided on including the octopus to both give it a horror feel and to push
                the idea of being underwater. I also wanted 
                it to look like the diner had been abandoned (possibly because it 
                had been overtaken by the octopus?). To do this, I
                arranged the tables and chairs in disarray, modeled sea grass growing out from 
                the crevices of the room, laid a cloth draped over the 
                main counter, and placed piles of dirty dishes on the tables.
            </div>

            <br/>
                
            <div>
                The napkins throughout the scene and the large table cloth draped over the counter 
                were done using cloth simulations. This was a new technique for me, and I found it very
                fun to play around with, especially experimenting with different attributes like 
                cloth stickiness and friction values.
            </div>

            <br/>
                
            <div>
                To strengthen the horror/abandoned diner feel, I decided on limiting the number of light 
                sources in the restaurant. I imagined the middle light source over 
                the back counter as a flickering light, giving the restaurant dim lighting and a spooky ambiance.  
            </div>

            <div>
                I used noise functions 
                (mostly fractal brownian noise)
                to simulate water patterns on the walls and modeled tiny distorted spheres for bubbles.
                If you look outside the window on the right of the first rendered image, you can see 
                a tentacle passing by, and the silhouette of some mysterious ocean object (a submarine, maybe?). 
                I added these elements to enhance the underwater feel, which the seaweed and greenish color
                of the scene definitely help with too.
            </div>

            <br/>

            <div>
                This was my first 3D modeling environment project and I'm really happy with the overall look of the diner! I think the checkerboard pattern throughout
                really helps to create a retro look, as well as the red fabric of the seats. The red cups also 
                work to tie the colors together and I think makes the scene feel more cohesive.
            </div>

            <br/>

            <div>
                Below are two early screenshots of my process, with some of the basic models 
                placed in, and some simple materials applied.
            </div>

            <br/>

            <div className="custom-twocol-body">
                <div className="md:w-1/2">
                    <ExportedImage 
                        className="rounded-sm"
                        src={diner}
                        alt="" 
                        width={1000} 
                        height={1000}>
                    </ExportedImage>
                </div>
                <div className="md:w-1/2">
                    <ExportedImage 
                        className="rounded-sm"
                        src={diner2}
                        alt="" 
                        width={1000} 
                        height={1000}>
                    </ExportedImage>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}
export default DinerSection
