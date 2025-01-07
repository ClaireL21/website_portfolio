'use client'
import ExportedImage from "next-image-export-optimizer"
import cover1 from "../../webs_images/proj_images/noodle/ns2.jpg";
import cover2 from "../../webs_images/proj_images/noodle/ns52.jpg";
import cover3 from "../../webs_images/proj_images/noodle/ns4.jpg";
import cover4 from "../../webs_images/proj_images/noodle/ns6.jpg";
import cover5 from "../../webs_images/proj_images/noodle/ns1.jpg";
import cover6 from "../../webs_images/proj_images/noodle/ns3.jpg";
import noodle_1 from "../../webs_images/proj_images/noodle/noodle_1.jpeg";
import noodle_2 from "../../webs_images/proj_images/noodle/noodle_2.jpeg";
import noodle_3 from "../../webs_images/proj_images/noodle/noodle_3.jpeg";
import noodle_4 from "../../webs_images/proj_images/noodle/noodle_4.jpeg";
import noodle_a from "../../webs_images/proj_images/noodle/noodlea.jpeg";

const tags = [
  { skill: "Maya"},
  { skill: "ZBrush"},
]

const images = [
  { image: cover1},
  { image: cover2},
  { image: cover3},
  { image: cover4},
  { image: cover5},
  { image: cover6},
]

const images2 = [
  { image: noodle_1},
  { image: noodle_2},
  { image: noodle_3},
  { image: noodle_4},
]
const NoodleSection = () => {
  return (
    <div>
        <section id="noodle">
            <h1 className="text-center font-bold text-3xl">
                Noodle
            </h1>
            <div className='custom-body-2'>
              <div className="flex items-center justify-center"> 
                  <div className="md:grid md:grid-cols-3 md:grid-rows-2">
                      {images.map((item, idx) => {
                          return (
                              <div key={idx}>
                                  <div className="">
                                      <div className="p-4">
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
              <div className="mt-4">
                This is a character model I made in my Advanced 3D Modeling class, based on 
                the character Noodle from the{" "}
                <span>
                    <a href="https://www.gorillaz.com/" rel="noreferrer" target="_blank"
                        className="font-semibold text-yellow-500 hover:text-yellow-600">
                        Gorillaz
                    </a>
                </span>
                {" "}band!
            </div>

            <br/>

            <div>
                My main goal with this project was to experiment with techniques for modeling
                character faces. This was my first time with the ZBrush to Maya workflow, as 
                well as retopologizing! I'm especially proud of how the face turned out - one 
                of the primary challenges I faced was trying to build a 3D version of the 2D 
                Gorillaz art of Noode. Despite not having 3D references, I think the facial structure
                of the end model mimics Noodle's face quite well, which I was very happy about.
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

            <h1 className="mt-2 text-left font-bold text-2xl">
                Process
            </h1>

            <div className="mt-4">
                I created Noodle by first sculpting her head in ZBrush so I could build up the 
                features on her face. This allowed me to mold shapes so I could work and rework
                more difficult features like the eyes, nose, and mouth.
            </div>
            <br/>

            <div className="custom-twocol-body">
                <div className="md:w-3/5">
                    <div>
                        I then imported the ZBrush model into Maya and began retopologizing the face.
                        Using Quad Draw to form a cast on the surface of the face, I created a low poly version of the head.
                        This gives a cleaner and more stylized, cartoon look, which is how she's drawn in Gorillaz art. 
                    </div>

                    <br/>

                    <div>
                        To the right 
                        is a screenshot of this part of my process. The model on the right is the original ZBrush head, and the model
                        on the left is a duplicate, with half of the cast created. I mirrored the cast so that the face would 
                        be perfectly symmetrical, which helped to achieve the cartoon look of Noodle!
                    </div>

                    <br/>

                    <div>
                        After, I modeled a basic body and extruded faces on the body to mimic clothing.
                        Then, through a series of mesh transformations, I shaped the mesh to look like 
                        the dress that Noodle wears. The legs and shoes were also made similarly, with all of 
                        this done in Maya.
                    </div>

                    <br/>

                    <div>
                        Below are some screenshots of the process and the resulting retopologized head.
                    </div>
                </div>
                <div className="md:w-2/5">
                    <ExportedImage 
                        className="rounded-sm"
                        src={noodle_a}
                        alt="" 
                        width={500} 
                        height={500}>
                    </ExportedImage>
                </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center"> 
                <div className="md:grid md:grid-cols-4 md:grid-rows-1">
                    {images2.map((item, idx) => {
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

            </div>
        </section>
    </div>
  )
}
export default NoodleSection
