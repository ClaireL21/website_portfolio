'use client'

import ExportedImage from "next-image-export-optimizer"
import inspo1 from "../../webs_images/proj_images/robot/inspo1.jpeg";
import inspo2 from "../../webs_images/proj_images/robot/inspo2.jpeg";
import rbmodel from "../../webs_images/proj_images/robot/rbmodel.png";
import shadows from "../../webs_images/proj_images/robot/shadows.png";
import shadows2 from "../../webs_images/proj_images/robot/shadows2.png";
import dots from "../../webs_images/proj_images/robot/dots.png";
import dots_node from "../../webs_images/proj_images/robot/dots_node.png";
import lighting from "../../webs_images/proj_images/robot/Lighting.png";
import spec from "../../webs_images/proj_images/robot/spec.png";
import outline from "../../webs_images/proj_images/robot/outline.gif";
import depth from "../../webs_images/proj_images/robot/depth.png";
import wobbly from "../../webs_images/proj_images/robot/wobbly.gif";
import color from "../../webs_images/proj_images/robot/color.png";
import sat_1 from "../../webs_images/proj_images/robot/sat_1.png";
import sat_2 from "../../webs_images/proj_images/robot/sat_2.png";
import sat_3 from "../../webs_images/proj_images/robot/sat_3.png";
import sat_4 from "../../webs_images/proj_images/robot/sat_4.png";
import sat_5 from "../../webs_images/proj_images/robot/sat_5.png";
import sat_6 from "../../webs_images/proj_images/robot/sat_6.png";
import pal_1 from "../../webs_images/proj_images/robot/pal_1.png";
import pal_2 from "../../webs_images/proj_images/robot/pal_2.png";
import bw1 from "../../webs_images/proj_images/robot/BW_Thr-1.png";
import bw2 from "../../webs_images/proj_images/robot/BW-Thr-141.png";
import bw3 from "../../webs_images/proj_images/robot/BW-Thr-1.79.png";
import proc1 from "../../webs_images/proj_images/robot/PixelProcess1.png";
import proc2 from "../../webs_images/proj_images/robot/PixelProcess2.png";
import proc3 from "../../webs_images/proj_images/robot/PixelProcess3.png";
import pixel from "../../webs_images/proj_images/robot/Pixel1.jpg";
import tvstatic from "../../webs_images/proj_images/robot/static.gif";

const images = [
    { image: sat_3},
    { image: sat_4},
    { image: sat_5},
    { image: sat_6},
  ]

const tags = [
    { skill: "Unity"},
    { skill: "Shader Graph"},
    { skill: "VFX"},
]

const RobotSection = () => {
  return (
    <div>
        <section id="robot">
            <h1 className="text-center font-bold text-3xl">
                Stylized Shader Robot Scene
            </h1>
            
            <div className='custom-body-2'>
                <h1 className="custom-subheading-2">
                    Features Implemented
                </h1>
                
                <div className="custom-twocol-body">
                
                    <div className="md:w-1/3">
                        <div className="mt-2 font-bold">
                            Shaders
                        </div>
                        <div>
                            <ul className="px-8 list-disc">
                                <li>Stylized Toon Surface Shader </li>
                                <li>Wobbly Shader (Vertex Deformation)</li>
                            </ul>
                        </div>
                        <div className="font-bold">
                        Post-Processing Effects
                        </div>
                        <div>
                            <ul className="px-8 list-disc">
                                <li>Wobbly Depth-Based Outlines</li>
                                <li>Static Color-Based Outlines</li>
                                <li>Cohesive Color Saturation Filter</li>
                                <li>Black & White Mode</li>
                                <li>TV Pixelization Static Filter</li>
                            </ul>
                        </div>
                        <div className="font-bold">
                            Shaders
                        </div>
                        <div>
                            <ul className="px-8 list-disc">
                                <li>Switching between two color palettes</li>
                                <li>Toggling Black & White mode + TV Pixelization Static Filter</li>
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
                        </div>
                    </div>
                    <div className="md:w-2/3">                
                        <div className="w-full h-[400px]">
                            <iframe className="relative inset-0 w-full h-full" src="https://player.vimeo.com/video/881583645?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <div className="italic">
                            Stylized toon shader with half tone shading, post processing effects, and interactivity.
                        </div>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    1. Inspiration
                </h1>
                <div className="custom-twocol-body">
                    <div className="md:w-2/3">
                        <div className="w-full flex flex-row items-stretch justify-center p-4">
                            <div className="w-full object-cover h-auto">
                                <ExportedImage 
                                    className=""
                                    src={inspo1}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="w-full object-cover h-auto">
                                <ExportedImage 
                                    className=""
                                    src={inspo2}
                                    alt=""
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                        <div className="italic font-bold">
                            <p>
                            Artist:{" "}
                            <a href="https://katawoka.com/" className="underline custom-highlighted-text">
                            Katawoka
                            </a>
                            </p> 
                        </div>
                        
                    </div>
                    <div className="md:w-1/3">
                        <div className="mt-2 font-bold">
                            Ghost Girl Illustration
                        </div>
                        <div>
                            My inspiration for my stylized shader was this 
                            comic style illustration to the left. 
                            There were a few visual elements from this piece I wanted to 
                            incorporate into my toon shader:
                        </div>
                        <div>
                            <ul className="px-8 list-disc">
                                <li>Half tone shading</li>
                                <li>Outlined shadows</li>
                                <li>Minimal color palette</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="custom-twocol-body">
                    <div className="md:w-1/5">
                        <div className="w-full flex flex-row items-stretch justify-center p-4">
                            <div className="w-full object-cover h-auto">
                                <ExportedImage 
                                    className=""
                                    src={rbmodel}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                        <div className="italic font-bold">
                            <p>
                            Credit:{" "}
                            <a href="https://sketchfab.com/3d-models/sad-toaster-9b158486dfa1490eb9157966321283a0" className="underline custom-highlighted-text">
                            Robot Model by Tasha Lime
                            </a>
                            </p> 
                        </div>
                        
                    </div>
                    <div className="md:w-4/5">
                        <div className="mt-2 font-bold">
                            Robot Scene Assets
                        </div>
                        <div>
                            <ul className="px-8 list-disc">
                                <li>Because the main focus of this project was to create an 
                                    interesting stylized shader, I chose to import my main 
                                    asset from SketchFab.</li>
                                <li>I chose this sad looking robot character because I thought it 
                                    replicated the melancholy expression of the girl in the illustration.</li>
                                <li>The other assets in the scene are simple cubes and spheres made in Unity.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    2. Interesting Shaders
                </h1>
                <div className="font-bold underline mt-2">
                    I. STYLIZED TOON SHADER
                </div>
                <div>
                    My stylized toon shader has the following visual characteristics:
                    <ul className="px-8 list-disc">
                        <li>
                            Three tone shading
                        </li>
                        <li>
                            Outlined shadows
                        </li>
                        <li>
                            Half tone shading
                        </li>
                        <li>
                            Multiple light support
                        </li>
                        <li>
                            Specular highlight
                        </li>
                        <li>
                            Minimalistic color palette
                        </li>
                    </ul>
                </div>
                <div className="font-bold mt-2">
                    Three Tone Shading
                </div>
                <ul className="px-8 list-disc">
                    <li>
                    This was achieved by using three threshold values 
                    to bucket the colors in the scene. 
                    These values control the amount of 
                    <span className="font-bold"> Highlight, </span> 
                    <span className="font-bold">Midtone</span>,
                    and
                    <span className="font-bold"> Shadow </span>
                    seen on the meshes 
                    and can be customized by the user.
                    </li>
                </ul>
                <div className="font-bold mt-2">
                    Specular Highlight
                </div>
                <ul className="px-8 list-disc">
                    <li>
                    The specular highlight appears on objects in the scene as a white dot at  bright spots of light. 
                    </li>
                    <li>
                    This was created by using the view vector from the current fragment to the camera and the reflected light vector. 
                    The reflected light vector can be calculated using the normal vector and the vector from the current vertex to the light position.
                    </li>
                    <li>
                    The angle between the reflection vector and the view vector can be found with a dot product. This angle is then used to determine the amount of specular reflection the current fragment gets. 
                    </li>
                    <li>
                    This is added to the diffuse color value and creates the bright spot of white!
                    </li>
                </ul>
                <div className="font-bold mt-2">
                    Outlined Shadows
                </div>
                <ul className="px-8 list-disc">
                    <li>
                    I thought the outlines on the shadows of my inspiration piece were really interesting! I achieved a similar look in my scene, exemplified well in the image below.
                    </li>
                </ul>
                <div className="custom-twocol-body">
                    <div className="md:w-2/5">
                        <div className="w-full flex flex-row items-center justify-center p-4">
                            <div className="">
                                <ExportedImage 
                                    className=""
                                    src={shadows}
                                    alt="" 
                                    width={300}
                                    height={300}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/5 flex flex-col justify-center">
                        <div>
                            <ul className="px-8 list-disc">
                                <li>We can see the outline on the shadows on both the ground and the robot.
                                </li>
                                <li>The shadow outline on the robot separates the light teal color from 
                                    the darker green color on the front of the robot and follows the 
                                    shape of the boundary between the 
                                    <span className="font-bold"> Highlight </span>and the 
                                    <span className="font-bold"> Shadow </span>tones
                                </li>
                                <li><span className="font-bold"> Shadow Outline</span> color and width can be customized by the user
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className="px-8 list-disc">
                    <li>
                    This was a simple effect done by using the logic of the Three Tone Shader but decreasing the size of the                                     
                    <span className="font-bold"> Midtone </span>
                    so it acted as an outline instead of a tone. (The reason the robot still looks like it has multiple tones — more than a 2 tone shader — is because of the point lights creating a bucketed coloring effect!)                    </li>
                </ul>
                <div className="font-bold mt-2">
                    Half Tone Shading
                </div>
                <div className="custom-twocol-body">
                    <div className="md:w-1/5">
                        <div className="w-full flex flex-row items-center justify-center p-4">
                            <div className="">
                                <ExportedImage 
                                    className=""
                                    src={dots}
                                    alt="" 
                                    width={300}
                                    height={300}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-4/5">
                        <div className="w-full flex flex-row items-center justify-center p-4">
                            <div className="">
                                <ExportedImage 
                                    className=""
                                    src={dots_node}
                                    alt="" 
                                    width={800}
                                    height={300}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-twocol-body">
                    <div className="md:w-2/3">
                        To implement half tones, I first created a custom half tone texture. 
                        <ul className="px-8 list-disc">
                            <li>I used a brush tool in Procreate to draw the dots to make it look hand-drawn.
                            </li>
                        </ul>
                        <div>
                        </div>
                        
                        I also used the above node network to implement the half tones:
                        <ul className="px-8 list-disc">
                            <li>
                            I sampled the UVs of the half tone texture, making sure to first tile + offset and rotate the UV to make it more visually interesting.
                            </li>
                            <li>
                            To be able to customize the color of the dots on the shadow, I take the minimum of the 
                            <span className="font-bold"> Shadow </span> 
                            color and the sampled texture color. Thus, if we are sampling one of the dots, then the minimum will be black (the dot color) and the color of the 
                            <span className="font-bold"> Shadow </span> 
                            otherwise. 
                            </li>
                            <li>
                            We then ensure the color of the dots is colored correctly with the 
                            <span className="font-bold"> Shadow Dots </span>
                            color (rather than fixing the color of the dots to be black from the sample texture). 
                            We do this by taking the maximum of the sampled color and the 
                            <span className="font-bold"> Shadow Dots </span>
                            color, 
                            which will return 
                            <span className="font-bold"> Shadow Dots </span> 
                            if we originally sampled a dot or 
                            <span className="font-bold"> Shadow </span> 
                            if we originally 
                            sampled empty space around the dots.
                            </li>
                            <li>
                            The user can customize 
                            <span className="font-bold"> Shadow, </span> 
                            <span className="font-bold"> Shadow Dots, </span> 
                            and 
                            <span className="font-bold"> Shadow Tiling, </span>  
                            which control the color of the shadow, the color of the dots, and the size of the dots.
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <ExportedImage 
                            className=""
                            src={shadows2}
                            alt="" 
                            width={800}
                            height={300}
                            >
                        </ExportedImage>
                        <div className="italic">
                            Screenshot of back view to demonstrate half-tone shading
                        </div>
                    </div>
                </div>
                <div className="font-bold mt-2">
                    Multiple Light Support
                </div>
                <div className="custom-twocol-body">
                    <div className="md:w-2/3">
                        To implement half tones, I first created a custom half tone texture. 
                        <ul className="px-8 list-disc">
                            <li>I used a brush tool in Procreate to draw the dots to make it look hand-drawn.
                            </li>
                        </ul>
                        <div>
                        </div>
                        
                        I also used the above node network to implement the half tones:
                        <ul className="px-8 list-disc">
                            <li>
                            The intersection of the lights can be seen in the scene below. I increased the intensity of  the second light here and made it purple to exaggerate the visual effect.                            </li>
                            <li>
                            We can see the interaction of the two lights at areas where they overlap — note the brighter spots
                            </li>
                            <li>
                            The lights also change the appearance of the shadows and help overall bring more complexity to the scene
                            </li>
                        </ul>
                    </div>
                    
                    <div className="md:w-1/3">
                        <ExportedImage 
                            className=""
                            src={lighting}
                            alt="" 
                            width={800}
                            height={300}
                            >
                        </ExportedImage>
                        <div className="italic">
                        Example scene to illustrate additional lights                        </div>
                    </div>
                </div>
                <div className="font-bold underline mt-2">
                    II. WOBBLY SURFACE SHADER
                </div>
                <div className="custom-twocol-body mt-2">
                    <div className="md:w-1/3">
                        <ExportedImage 
                            className=""
                            src={wobbly}
                            alt="" 
                            width={800}
                            height={300}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-2/3">
                        <ul className="px-8 list-disc">
                            <li>
                            I created a second shader based on above, with some added vertex deformation. 
                            </li>
                            <li>
                            For each vertex, I interpolate between its original position and an animated offset position.
                            </li>
                            <li>
                            The animated position is created by offsetting the x position of the vertex using a sine curve, with time and several exposed parameters (like speed and frequency) as an input. This creates a nice wiggly-wobbly effect!
                            </li>
                            <li>
                            The user can tweak the 
                            <span className="font-bold"> Wobble Speed, </span> 
                            <span className="font-bold"> Wobble Frequency, </span> 
                            <span className="font-bold"> Wobble Distance, </span> 
                            and 
                            <span className="font-bold"> Wobble Amount, </span> 
                            to customize the intensity of the wobbly animation. 

                            </li>
                        </ul>
                        
                        I also used the above node network to implement the half tones:
                        <ul className="px-8 list-disc">
                            <li>
                            The intersection of the lights can be seen in the scene below. I increased the intensity of  the second light here and made it purple to exaggerate the visual effect.                            </li>
                            <li>
                            We can see the interaction of the two lights at areas where they overlap — note the brighter spots
                            </li>
                            <li>
                            The lights also change the appearance of the shadows and help overall bring more complexity to the scene
                            </li>
                        </ul>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    3. Outlines
                </h1>
                <div className="custom-twocol-body">
                    <div className="md:w-1/3">
                        <div className="w-full flex flex-row items-stretch justify-center">
                            <div className="w-full object-cover h-auto p-2">
                                <ExportedImage 
                                    className=""
                                    src={depth}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                            <div className="w-full object-cover h-auto p-2">
                                <ExportedImage 
                                    className=""
                                    src={outline}
                                    alt=""
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                        <div className="italic">
                            <p>
                            Left: Example scene with Depth-based outlines; Right: Example wobble effect on outlines
                            </p> 
                        </div>
                        
                    </div>
                    <div className="md:w-2/3">
                        <div className="mt-2 font-bold underline">
                            I. DEPTH-BASED OUTLINES
                        </div>
                        <div>
                        In order to create depth based outlines, I used Unity’s URP to get access to the Depth buffer. Then, I used a Sobel outline implementation to detect large differences in depth. 
                        </div>
                        <div>
                            <ul className="px-8 list-disc">
                                <li>
                                There are several adjustable parameters, including outline 
                                <span className="font-bold"> Width, </span>
                                <span className="font-bold">ColorThreshold </span>
                                (adjusts amount of outlines), and 
                                <span className="font-bold"> Strength </span> 
                                (adjusts the strength/opacity of the outlines)
                                </li>
                                <li>
                                To make the outlines more interesting, I decided to add a wobble effect using similar logic for the wobble shader.
                                </li>
                                <li>
                                The intensity of wobble can also be adjusted by the user, similar to the shader wobble effect described above.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="custom-twocol-body">
                    <div className="md:w-1/3">
                        <div className="w-full flex flex-row items-stretch justify-center">
                            <div className="w-full object-cover h-auto p-2">
                                <ExportedImage 
                                    className=""
                                    src={color}
                                    alt="" 
                                    width={250}
                                    height={250}
                                    >
                                </ExportedImage>
                            </div>
                        </div>
                        
                    </div>
                    <div className="md:w-2/3">
                        <div className="mt-2 font-bold underline">
                            II. NORMAL-BASED (COLOR) OUTLINES
                        </div>
                        <div>
                        Because my inspiration piece included outlines between different tones, I also chose to implement normal based outlines which achieved the outlines between colors.                        </div>
                        <div>
                            <ul className="px-8 list-disc">
                                <li>
                                I used a Normal Shader feature and added a material made from it to the render pipeline. I then connected a Normal Buffer texture as the destination target for this render feature. 
                                </li>
                                <li>
                                Using this Normal Buffer texture, I was able to detect large difference in normals across the screen, which I used to create color-based outlines.                                </li>
                                <li>
                                These outlines had the same adjustable parameters as the Depth-based ones.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    4. Cohesive Color Saturation Filter
                </h1>
                <div>
                    I wanted the colors in my scene to complement each other well, like the inspiration piece.

                    To do this, I implemented a filter that can easily tweak the saturation of the image and the color palette applied to it.
                </div>
                <ul className="px-8 list-disc">
                    <li>
                        To adjust saturation, I interpolated between the original color and and a grayscale color defined based on the original input color. The user can tweak the amount of saturation by adjusting the xyz components of the 
                        <span className="font-bold"> Sat </span>
                        parameter (which is the input for interpolation).
                    </li>
                    <li>
                        To tweak the color palette, the user can individually change each of the xyz components of the 
                        <span className="font-bold"> Sat </span>
                        parameter. Because they correspond to the amount of rgb mixing, doing so will vary the colors shown in the final output.
                    </li>
                    <li>
                        Below are some the results that can be achieve with this post-processing effect:
                    </li>
                </ul>
                <div className="custom-twocol-body justify-center mt-2">
                    <div className="md:w-1/3">
                        <ExportedImage
                            className="w-full"
                            src={sat_1}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                        <div className="italic">
                            Scene with no color saturation post-processing effect applied
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <ExportedImage
                            className="w-full"
                            src={sat_2}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                        <div className="italic">
                            Scene with color saturation post-processing effect applied  
                        </div>
                    </div>
                </div>
                <div>
                As you can see, on the left, the colors are a bit jarring and don’t complement each other very well. The scene doesn’t feel as cohesive. 
                In contrast, the scene on the right feels a lot more cohesive. The orange gets mapped to a less intense peach color and the bold green becomes a calmer teal.
                </div>
                <br/>
                <div className="italic">
                    More variations of the color saturation filter!
                </div>
                <div className="mt-8 flex items-center justify-center"> 
                    <div className="md:grid md:grid-cols-4 md:grid-rows-1">
                        {images.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <div className="">
                                        <div className="flex flex-col p-4 items-stretch">
                                            <ExportedImage 
                                                className="w-64 h-64 object-cover rounded-sm"
                                                src={item.image}
                                                alt="" 
                                                width={256} 
                                                height={256}>
                                            </ExportedImage>
                                        </div>
                                    </div>
                                </div>
                            ) 
                        })}
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    5. Interactivity
                </h1>
                <div className="mt-2 font-bold underline">
                    I. KEY CONTROLS
                </div>
                <div>
                I implemented several interactive elements with the following key controls:
                </div>
                <div>
                    <ul className="px-8 list-disc">
                        <li>
                        Pressing 
                        <span className="font-bold"> Space: </span>
                        Switches between two color palettes (see below)
                        </li>
                        <li>
                        Pressing 
                        <span className="font-bold"> B: </span>
                        Toggles Black & White mode on/off (see Extra Polish for more details)
                        </li>
                        <li>
                        Pressing 
                        <span className="font-bold"> S: </span>
                        Toggles a TV Pixelization Static Filter on/off (see Extra Polish for more details)                        </li>
                    </ul>
                </div>
                <div className="mt-2 font-bold underline">
                    II. TWO COLOR PALETTES: Green/Orange + Gray/Purple
                </div>
                <div>
                    <ul className="px-8 list-disc">
                        <li>
                        I started out with a high contrast color palette — the Green/Orange — and 
                        really liked how the colors complemented each other. I thought it would be 
                        interesting to have more neutral colors as a second palette, to achieve a 
                        higher contrast between the outlines and the colors.
                        </li>
                        <li>
                        The switch in colors was achieved by attaching a material switching script to 
                        each mesh in the scene and assigning the two sets of colors to each mesh.
                        </li>
                    </ul>
                </div>
                <div className="custom-twocol-body justify-center mt-2">
                    <div className="md:w-1/3">
                        <ExportedImage
                            className="w-full"
                            src={pal_1}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                        <div className="italic">
                            Scene with colors from Green/Orange color palette attached
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <ExportedImage
                            className="w-full"
                            src={pal_2}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                        <div className="italic">
                            Scene with colors from Gray/Purple color palette attached
                        </div>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    6. Extra Polish
                </h1>
                <div className="mt-2 font-bold underline">
                    I. BLACK & WHITE
                </div>
                <div>
                    <ul className="px-8 list-disc">
                        <li>
                        Since my main inspiration was comic style art, I thought 
                        it was fitting to make a Black & White mode for the scene. 
                        A lot of comic styles use minimal color palettes, and the most 
                        indicative example of this is a simple black and white color scheme. 
                        </li>
                        <li>
                        The Black & White mode is a post-processing effect, achieved by 
                        mapping colors above a certain threshold to black and all other 
                        colors to white.
                        </li>
                        <li>
                        The 
                        <span className="font-bold"> Threshold </span> 
                        value can be customized by the user. Higher threshold create 
                        more black in the scene and lower thresholds yield more white:
                        </li>
                    </ul>
                </div>
                <div className="md:flex md:flex-row max-w-7xl">
                    <div className="md:w-1/3 p-2">
                        <ExportedImage
                            className="w-full"
                            src={bw1}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-1/3 p-2">
                        <ExportedImage
                            className="w-full"
                            src={bw2}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-1/3 p-2">
                        <ExportedImage
                            className="w-full"
                            src={bw3}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="italic">
                    Scene with Black & White mode applied, with a Threshold value of 1.0 (left), 
                    1.41 (middle), and 1.79 (right)
                </div>
                <div className="mt-2 font-bold underline">
                    II. TV Pixelization Static Filter
                </div>
                <div>
                    <ul className="px-8 list-disc">
                        <li>
                        I wanted to experiment with bucketing the colors to create a pixelization post-processing effect. 
                        </li>
                        <li>
                        I noticed this made a glitch-like effect when rotating the camera which ultimately inspired the static effect!
                        </li>
                    </ul>
                </div>
                <div className="custom-center mt-2">
                    <div className="md:w-1/3">
                        <ExportedImage
                            className="w-full"
                            src={tvstatic}
                            alt="" 
                            width={400}
                            height={400}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="custom-center italic">
                    <div className="md:w-1/3">
                    Scene with TV Pixelization Static Filter applied (Pixel Amount: 100, Distortion Amount: 0.03, Distortion Offset: 0.62, Color Distortion: 4, Dot Density: 108)
                    </div>
                </div>
                <div>
                There are a few visual elements that, combined,  create the static filter. 
                Each of these can be customized by the user.
                </div>
                <ul className="px-8 list-disc">
                    <li>
                    Pixelization — achieved by bucketing the UV sampling of the scene’s main color texture
                    </li>
                    <li>
                    Dots Overlay — overlays a grid of dots on top of the main texture to mimic a TV screen. 
                    This was done by using the output of a Voronoi texture to sample a three tone color gradient. Decreasing the opacity of the gradient and then subtracting it from the main color achieved the dotted texture.
                    </li>
                    <li>
                    Static Distortion Effect — creates the glitchy warping effect that can be seen best along the edges of the objects in the scene
                    </li>
                    <li>
                    Color Distortion — distorts the colors of the scene to achieve different kinds of retro color styles 
                    </li>
                </ul>
                <div className="md:flex md:flex-row max-w-7xl">
                    <div className="md:w-1/3 p-2 object-cover">
                        <ExportedImage
                            className="w-full h-full"
                            src={proc1}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-1/3 p-2 object-cover ">
                        <ExportedImage
                            className="w-full h-full"
                            src={proc2}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                    </div>
                    <div className="md:w-1/3 p-2 object-cover">
                        <ExportedImage
                            className="w-full h-full"
                            src={proc3}
                            alt="" 
                            width={250}
                            height={250}
                            >
                        </ExportedImage>
                    </div>
                </div>
                <div className="italic">
                    Left: After Pixelization;
                    Middle: After Dots Overlay;
                    Right: After Static Distortion & Color Distortion
                </div>
                <br/>
                <div>
                    The final result:
                </div>
                <div className="custom-center mt-2">
                    <div className="md:w-1/2">
                        <ExportedImage
                            className="w-full"
                            src={pixel}
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
export default RobotSection
