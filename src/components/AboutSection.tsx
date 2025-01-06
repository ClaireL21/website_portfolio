'use client'
import Link from 'next/link'
import { HiArrowDown } from "react-icons/hi"
import { Link as JumpAnchor} from "react-scroll/modules"
import ExportedImage from "next-image-export-optimizer";
import headshotImage from "../webs_images/headshot_rect_small.jpg";


const AboutSection = () => {
  return (
    <div>
      <section id="about">
        <h1 className="text-center font-bold text-3xl">
            About
        </h1>
        <div className="custom-flex-center md:flex-row">
          <div className="md:w-2/5 flex justify-end items-center">
            <ExportedImage className="max-w-sm p-6" src={headshotImage} alt=""/>
          </div>
          <div className="md:w-3/5">
            <h1 className="font-bold text-2xl">Hi, I'm Claire!</h1>
            <div className='mt-4 mb-6'>
              <p>
                I'm a senior studying{" "}
                <a href="http://cg.cis.upenn.edu/dmd.html" className="custom-highlighted-text">
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
                <a href="https://www.linkedin.com/company/queenly/" className="custom-highlighted-text">
                  Queenly
                </a>
                , a marketplace startup for pageant and formalwear.
                I've also interned at {" "}
                <a href="https://www.linkedin.com/company/adobe/" className="custom-highlighted-text">
                  Adobe
                </a>
                {" "} as a software engineer, 
                developing internal tools on their Lightroom iOS Quality Engineering team.
              </p>
            </div>
            <div className='items-center justify-center flex flex-row space-x-10 md:space-x-20'>
              <div>
                Contact: {" "}
                <span className="underline italics">
                  53claire@gmail.com
                </span>
              </div>
             
              <Link
                href="/"
                className="underline italic font-semibold hover:-translate-y-1 hover:custom-highlighted-text"
                >
                  Resume
              </Link>
            </div>
            
            <div className="flex flex-row justify-center mt-14">
                <JumpAnchor
                    to="featured"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce"/>
                </JumpAnchor>
            </div> 
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutSection
