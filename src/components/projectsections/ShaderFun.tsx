'use client'
import ExportedImage from "next-image-export-optimizer";
import mario1 from "../../webs_images/proj_images/shaderfun/mario1.png";
import mario2 from "../../webs_images/proj_images/shaderfun/mario2.jpg";
import mario3 from "../../webs_images/proj_images/shaderfun/mario3.png";
import mario4 from "../../webs_images/proj_images/shaderfun/mario4.jpg";

const tags = [
  { skill: "C++"},
  { skill: "GLSL"},
  { skill: "Qt"},
]

const images = [
  { image: mario1},
  { image: mario2},
  { image: mario3},
  { image: mario4},
]

const ShaderFunSection = () => {
  return (
    <div>
        <section id="shaderfun">
            <h1 className="text-center font-bold text-3xl">
                Shader Fun
            </h1>
            <div className='custom-body-2'>
            <div className="min-h-screen flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-2 md:grid-rows-2">
                    {images.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-col md:flex-col">
                                    <div className="flex flex-col p-4 items-stretch">
                                        <ExportedImage 
                                            className="rounded-sm"
                                            src={item.image}
                                            alt="" 
                                            width={300} 
                                            height={300}>
                                        </ExportedImage>
                                    </div>
                                </div>
                        </div>
                        ) 
                    })}
                </div>
            </div>

            <div className="mt-4">
                This project was a task from CIS 4600/5600 involving writing shaders to 
                be applied on some object - in this case, Mario! 
                I experimented with different kinds of shaders, including ones that involved
                vertex deformations and fragment shader operations. I also learned how to write 
                post-processing shaders. The images above feature just a few of the fun end 
                results that I obtained from combining different shaders.
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

            <h1 className="custom-subheading-2">
                Surface Shaders
            </h1>

            <div className="">
                Surface shaders are programs that will take in vertex data and translate 
                them into colors on the screen through the GPU. In my custom vertex deformation 
                shader (the one where a bulge seems to move through Mario), I modified the positions
                for each vertex, and for the other shaders, I updated the pixel colors through the
                fragment shader, taking vertex positions as input.
            </div>

            <br/>

            <div>
                Below is a demo of these surface shaders in action!
            </div>

            <div className="mt-8">
                <div className="h-[500px] w-auto">
                    <iframe className="custom-video-container" src="https://www.youtube.com/embed/snBHZ33sL60" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>

            <br/>

            <h1 className="custom-subheading-2">
                Post-Processing Shaders
            </h1>

            <div className="">
                These shaders create effects across the entire screen, rather than 
                just the character model of Mario. For these, I treated the scene as a rectangle, i.e. 
                just a simple 2D image rather than a 3D scene with information about vertex positions, 
                normals, colors, etc.
            </div>

            <br/>

            <div>
                By doing so, I could achieve effects like the greyscale and gaussian blur, which
                used neighboring pixel data to determine the color of the current pixel. My favorite
                of these was the Sobel effect, which created a cool, high contrast outline look of Mario! 
            </div>

            <div>
                Below is a demo of these post-processing shaders in action!
            </div>

            <div className="mt-8">
                <div className="h-[500px] w-auto">
                    <iframe className="custom-video-container" src="https://www.youtube.com/embed/_xx0KmR1Yuo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}
export default ShaderFunSection
