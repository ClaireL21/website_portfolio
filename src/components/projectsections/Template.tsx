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
            <div className='custom-body-2'>
                <div className="mt-8">
                    Project description

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
