'use client'
import ExportedImage from "next-image-export-optimizer"
import { BsGithub } from "react-icons/bs"
import Link from "next/link"
import flame_1 from "../../webs_images/proj_images/flame/flame var 1.png";
import flame_2 from "../../webs_images/proj_images/flame/flame var 2.png";
import flame_3 from "../../webs_images/proj_images/flame/flame var 3.png";
import flame_4 from "../../webs_images/proj_images/flame/flame var 4.png";
import flame_5 from "../../webs_images/proj_images/flame/flame var 5.png";
import flame_6 from "../../webs_images/proj_images/flame/flame var 6.png";
import flame_gif from "../../webs_images/proj_images/flame/flame.gif";

const tags = [
  { skill: "Typescript"},
  { skill: "GLSL"},
]

const images = [
  { image: flame_1},
  { image: flame_2},
  { image: flame_3},
  { image: flame_4},
  { image: flame_5},
  { image: flame_6},
]

const FlameSection = () => {
  return (
    <div>
        <section id="flame">
            <h1 className="text-center font-bold text-3xl">
                Procedural Flame Character
            </h1>
            <div className='custom-body-2'>
            <div className="items-center justify-center flex mt-8">
                <ExportedImage 
                    className="w-64 h-64 object-cover"
                    src={flame_gif}
                    alt="" 
                    width={256} 
                    height={256}>
                </ExportedImage>
            </div>

            <h1 className="custom-subheading-2">
                Overview
            </h1>

            <div className="">
                This {" "}
                <span>
                    <a href="https://clairel21.github.io/hw01-fireball/" rel="noreferrer" target="_blank"
                        className="custom-highlighted-text">
                        project
                    </a>
                </span>
                {" "} was a task in CIS 5660, where we were assigned to procedurally deform a sphere
                to create some sort of fireball. I chose to create a 
                fireball character, with a flickering flame for a head.
            </div>

            <br/>

            <div>
                I used fbm and worley noise to create the shape of the flame, and 
                stretched the flame upwards by scaling the y position of the vertex positions. 
                I also used a sawtooth noise function to make the flames flicker more drastically 
                and used an ease in function to smooth out the motion of the flames. 
            </div>

            <br/>

            <div>
                To emphasize the flickering at the tail, I used a bias function so 
                more flickering would happen higher up on the mesh, and then to vary the flickering, 
                I used a power curve function so the motion of the flickering would appear more flame-like.
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
              <Link href={"https://github.com/ClaireL21/hw01-fireball"} target="_blank">
                    <BsGithub
                        size={30}
                        className="mt-2 hover:-translate-y-1 transition-transform cursor-pointer"
                    />
              </Link>
            </div>
            <br/>
            <div>
                Feel free to check out the{" "}
                <span>
                    <a href="https://clairel21.github.io/hw01-fireball/" rel="noreferrer" target="_blank"
                        className="custom-highlighted-text">
                        live demo
                    </a>
                </span>
                {" "}
                - you can change the color, speed, and tesselations of the fireball character!

                And below are some screenshots of what the different tesselations look like, as well as some variations
                of the fireball characters.
            </div>
            <br/>

            <div className="flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-3 md:grid-rows-2">
                    {images.map((item, idx) => {
                        return (
                        <div key={idx}>
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
                        ) 
                    })}
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}
export default FlameSection
