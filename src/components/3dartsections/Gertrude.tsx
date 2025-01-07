'use client'
import ExportedImage from "next-image-export-optimizer"
import ger1 from "../../webs_images/proj_images/gertrude/gertrude.jpg";
import ger2 from "../../webs_images/proj_images/gertrude/gertrude2.jpg";
import ger3 from "../../webs_images/proj_images/gertrude/gertrude3.jpg";

const tags = [
  { skill: "Maya"},
]

const GertrudeSection = () => {
  return (
    <div>
        <section id="gertrude">
            <h1 className="text-center font-bold text-3xl">
                Gertrude
            </h1>
            <div className='custom-body-2'>
            <div className="text-center flex item-center justify-center mt-8">
                <ExportedImage 
                    className="rounded-sm"
                    src={ger1}
                    alt="" 
                    width={500} 
                    height={500}>
                </ExportedImage>
            </div>
            <br/>

            <div className="custom-twocol-body">
                <div className="md:w-3/5">
                  <h1 className="custom-subheading-2">
                  Overview
                  </h1>
                  <div className="">
                      This is a character model of Gertrude, from Skottie Young's I Hate Fairyland. 
                      This was my first time modeling a character! 
                      My main goal was to develop a procedure for modeling characters, and for the 
                      resulting model to look stylized and cartoon-like.
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
                  Process
                  </h1>
                    
                    <div>
                        The most challenging part was figuring out how to model Gertrude's hair.
                        Her hair is composed of coils and they feel very bouncy and springy.
                        After a series of hair iterations, I ended up deciding on a Quad drawing process:
                        First, I created a basic cylinder mesh and inserted edges to mimic the 
                        overall shape of her coils.
                    </div>

                    <br/>

                    <div>
                        Then, I made the cylinder a live surface so I could model directly on it.
                        I used Quad Draw to draw rectangles around the surface of the cylinder,
                        gradually spiraling upwards from the base. After this step, the Mesh
                        resembled a spiral staircase, with blue rectangles traveling upwards
                        along the cylinder.
                    </div>

                    <br/>

                    <div>
                        With the flat spiral shape now available to me, I extruded it to make it 3D, 
                        and worked on the mesh until it looked more hair like. From there, it was 
                        simply rinse and repeat for the rest of the coils!
                    </div>

                    <br/>
                    
                    <div>
                        I'm especially proud of the stylized look of the end result. The face was 
                        challenging to make, especially going off of the 2D reference art I 
                        gathered of Gertrude. I like the level of detail on the model overall,
                        because it's form is complex enough to communicate Gertrude's look without
                        overcomplicating it and still retaining the cartoon-ish feel of 2D Gertrude.
                    </div>
                    
                </div>

                
                <div className="md:w-2/5 text-right item-center justify-center">
                    <ExportedImage 
                        className="rounded-sm mb-4 mt-16"
                        src={ger2}
                        alt="" 
                        width={350} 
                        height={350}>
                    </ExportedImage>

                    <ExportedImage 
                        className="rounded-sm"
                        src={ger3}
                        alt="" 
                        width={350} 
                        height={350}>
                    </ExportedImage>
                </div>
            </div>

            </div>
        </section>
    </div>
  )
}
export default GertrudeSection
