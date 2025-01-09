'use client'

import ExportedImage from "next-image-export-optimizer"
import fff_1 from "../../webs_images/proj_images/fffinder/FFF.png";

const tags = [
  { skill: "Java"},
  { skill: "Web scraping"},
  { skill: "Jsoup"},
]

const TemplateSection = () => {
  return (
    <div>
        <section id="robot">
            <h1 className="text-center font-bold text-3xl">
                Template Breakdown
            </h1>
            <div className="md:w-4/5 custom-body align-center items-center justify-center text-center">                
                <div className="md:h-[600px] h-[300px]">
                    <iframe className="custom-video-container" src="https://www.youtube.com/embed/XnAmGhJppd0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
            <div className='custom-body-2'>
                <div className="mt-8">
                    Project description

                </div>
                <div>
                    <ul className="px-8 list-disc">
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>

                <div style={{ whiteSpace: "pre-line" }}>

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
                    Overview
                </h1>
                <div className="custom-twocol-body">
                    <div className="md:w-3/5">
                        <div className=""> 
                            Text
                        </div>
                    </div>
                    <div className="md:w-2/5">
                        <ExportedImage 
                            className="rounded-sm"
                            src={fff_1}
                            alt="" 
                            width={300} 
                            height={300}>
                        </ExportedImage>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    Heading 2
                </h1>
                <div className="">
                    Text
                </div>
            </div>
        </section>
    </div>
  )
}
export default TemplateSection
