'use client'
import Link from 'next/link'
//import Image from 'next/image'
import { HiArrowDown } from "react-icons/hi"
import { Link as JumpAnchor} from "react-scroll/modules"


const FeaturedSection = () => {
  return (
    <div>
      <section id="featured">
        <h1 className="text-center font-bold text-3xl">
            Featured
        </h1>
        <div className="flex flex-col text-center items-center justify-center mt-10 px-10 lg:px-40 md:flex-row md:space-x-8 md:text-left">
          <div className="md:w-2/5">
            <img className="" src="./images/headshot_rect_small.jpg" alt="" width={400} height={400}/>
          </div>
          <div className="md:w-1/2 md:mt-2">
            <h1 className="font-bold text-3xl mt-6 lg:mt-0">Hi, I'm Claire!</h1>
            <div className='mt-4 mb-6 mb-6 text-base'>
              <p>
                I'm a senior studying{" "}
                <a href="http://cg.cis.upenn.edu/dmd.html" className="font-semibold text-def_yellow hover:text-hover_yellow">
                    Digital Media Design (DMD)
                </a>
                , an interdisciplinary program between computer 
                science and visual arts, at the University of Pennsylvania. I'm passionate about 
                software engineering and computer graphics. {" "}
              </p>
              <br/>
              <p>
                Within computer graphics, I'm interested in {" "}
                <span className="font-bold">{"proceduralism"}</span>{" "}
                and{" "} 
                <span className="font-bold">{"non photorealistic rendering"}</span>
                {" "}techniques. Feel free to check out some of my projects exploring these topics!
              </p>
              <br/>
              <p>
                I've previously interned as an iOS Software Engineer at {" "}
                <a href="https://www.linkedin.com/company/queenly/" className="font-semibold text-def_yellow hover:text-hover_yellow">
                  Queenly
                </a>
                , a marketplace startup for pageant and formalwear.
                I've also interned at {" "}
                <a href="https://www.linkedin.com/company/adobe/" className="font-semibold text-def_yellow hover:text-hover_yellow">
                  Adobe
                </a>
                {" "} as a software engineer, 
                developing internal tools on their Lightroom iOS Quality Engineering team.
              </p>
            </div>
            <div className='items-center justify-center flex flex-row space-x-10 md:space-x-20'>
              <div>
                Contact me at {" "}
                <span className="underline italics">
                  53claire@gmail.com
                </span>
              </div>
             
              <Link
                href="/projects"
                className="font-regular text-black italic hover:-translate-y-1 hover:text-yellow-600"
                >
                  Resume
                <hr className="w-12 h-0.5 mx-auto bg-def_yellow border-0"></hr>
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
export default FeaturedSection
