'use client'
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import cover from "../../webs_images/proj_images/hrdress/cover.jpg";
import lidar from "../../webs_images/proj_images/hrdress/lidar.jpg";
import model_1 from "../../webs_images/proj_images/hrdress/model_1.jpg";
import model_2 from "../../webs_images/proj_images/hrdress/model_2.jpg";
import polycam from "../../webs_images/proj_images/hrdress/polycam.jpg";
import highres from "../../webs_images/proj_images/hrdress/highres.jpg";
import model_3 from "../../webs_images/proj_images/hrdress/model_3.jpg";
import medium from "../../webs_images/proj_images/hrdress/medium.jpg";

const tags = [
  { skill: "Swift"},
  { skill: "Objective-C"},
  { skill: "XCode"},
]

const HRDressSection = () => {
  return (
    <div>
        <section id="hrdress">
            <h1 className="text-center font-bold text-3xl">
                High Resolution 3D Models of Formal Dresses
            </h1>
            <div className='custom-body-2'>
            <div className="mt-8 flex items-stretch justify-center">
                <ExportedImage 
                    className="rounded-xl"
                    src={cover}
                    alt="" 
                    width={900} 
                    height={300}>
                </ExportedImage>
            </div>

            <div className="mt-8">
                This was a  {" "}
                <a href="https://medium.com/queenly-engineering/high-resolution-3d-models-of-formal-dresses-using-lidar-and-photogrammetry-efe559041041" 
                className="custom-highlighted-text">
                    final project
                </a> for my internship at Queenly, 
                a marketplace dedicated toward formalwear and pageant dresses. 
                My goal was to create 3D renders 
                of a collection of the dresses listed on the Queenly site 
                and determine how to integrate them smoothly into the app.
                Because it’s difficult to fully capture all the various embellishments 
                on many of these dresses, displaying 3D renders along with the dress listings
                allows buyers to have as much visual information as possible to make an informed decision.
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
              Obtaining High Res Dress Scans
            </h1>

            <div className="custom-twocol-body">
                <div className="md:w-4/5">
                    <div>
                        The first challenge was to determine the best way of scanning dresses. 
                        I researched two different methods for creating models: LiDAR and photogrammetry.

                        Lidar works by sending laser pulses at items in a space and then senses 
                        the reflected pulses to measure the distances between points. It uses a cloud 
                        of points with direct measurements to features to recreate a 3D scene.

                        However, the models generated were blurry and low resolution – much of the embroidery 
                        and detailing work on the dresses were lost on the lidar scans.
                    </div>

                    <br/>

                    <div>
                        To the right is a visualization of the LiDAR point cloud and below are the 
                        results of 3D scanning using LiDAR.
                    </div>
                </div>
                <div className="md:w-1/5 custom-center"> 
                    <ExportedImage 
                        className=""
                        src={lidar}
                        alt="" 
                        width={200} 
                        height={200}>
                    </ExportedImage>
                </div>
            </div>

            <br/>

            <div className="custom-center">
                <ExportedImage 
                    className="rounded-xl"
                    src={model_1}
                    alt="" 
                    width={900} 
                    height={300}>
                </ExportedImage>
            </div>

            <div className="mt-8">
                Using photogrammetry, on the other hand, allowed for higher resolution 3D scans.
                Photogrammetry is a method of using overlapping photos to reconstruct a 3D model of an object. 
                Essentially, a series of high resolution photos taken from different heights and angles 
                are processed to generate a 3D map with elevation, shape, texture, and color information. 
                Using this data, a 3D model can be reconstructed. 
            </div>

            <div className="mt-8">
                My first attempt at photogrammetry was through Apple’s sample Photogrammetry Command-Line App. The app took a series of 
                photos as input and would output a 3D model reconstructed from the photos. 
                In order to obtain the best results, we shot the model against a solid background 
                in a well-lit room, and turned it to have at least a 70% overlap between shots. 
                These steps are key to making sure the program can recognize landmarks between photos 
                and ultimately reconstruct the model.
            </div>

            <br/>

            <div>
                Howevever, as we can see below, the models generated often had holes or extraneous parts in their mesh.
            </div>

            <div className="custom-center">
                <ExportedImage 
                    className="rounded-xl"
                    src={model_2}
                    alt="" 
                    width={700} 
                    height={300}>
                </ExportedImage>
            </div>

            <br/>

            <div className="custom-center">
                My next attempt at photogrammetry involved using Polycam, 
                a popular 3D scanning app that can also reconstruct models through photogrammetry.
                The models generated by Polycam were noticeably more polished than those of Apple’s 
                Command-Line App. The results were consistently high resolution and detailed. 
                Whether scanning opaque, transparent, sequined, or patterned fabrics, 
                Polycam yielded accurate 3D models, and seemed better equipped to handle the 
                photogrammetry process in general.
            </div>

            <div className="flex flex-col items-center justify-center text-center mt-8">
                <ExportedImage 
                    className="rounded-xl"
                    src={polycam}
                    alt="" 
                    width={700} 
                    height={300}>
                </ExportedImage>

                <ExportedImage 
                    className="mt-4 rounded-xl"
                    src={highres}
                    alt="" 
                    width={700} 
                    height={300}>
                </ExportedImage>
            </div>

            <br/>

            <div className="custom-body-2">
                I ended up creating 3D scans for about 10 dresses, featured below.
            </div>

            <div className="custom-center">
              <ExportedImage
                src={model_3}
                alt="" 
                width={1000} 
                height={600}>
              </ExportedImage>
            </div>

            <br/>

            <h1 className="custom-subheading-2">
              Queenly App Integration
            </h1>

            <div className="custom-twocol-body">
                <div className="md:w-2/3 text:left items-center">
                    <div>
                        The next step was integrating the renders into the app.
                        To render a 3D model in iOS, I used Apple’s 3D graphics framework, Scenekit.
                        I created a displayable 3D scene using the SCNScene class, which is essentially 
                        a hierarchy of nodes that contain different attributes to represent 3D visuals. 
                    </div>

                    <br/>
                    <div>
                        I then created an SCNView object and set its scene property to the scene just created, and 
                        then made it visible by adding a light source. 
                        Since SCNScenes are composed of nodes, I did so by creating an SCNNode and setting its light property,
                        and then adding the newly created node as a child node of our scene’s root node.
                    </div>

                    <br/>
                    <div>
                        Lastly, in order to allow the user to control the camera of the scene, I configured the camera control 
                        properties of the SCNView object.
                    </div>

                    <br/>
                    <div>
                        Feel free to check out this {" "}
                        <a href="https://medium.com/queenly-engineering/high-resolution-3d-models-of-formal-dresses-using-lidar-and-photogrammetry-efe559041041"
                        target="_blank" 
                        className="custom-highlighted-text">
                            Medium post
                        </a> I made on high resolution 3D scans for more information! 
                    </div>
                    <br/>

                    <div className="custom-center">
                      <Link href="https://medium.com/queenly-engineering/high-resolution-3d-models-of-formal-dresses-using-lidar-and-photogrammetry-efe559041041"
                      target="_blank">
                        <ExportedImage
                          src={medium}
                          alt=""
                          width={600} 
                          height={300}>
                        </ExportedImage>
                      </Link>
                    </div>
                    
                </div>
                <div className="md:w-1/3"> 
                    <div className="md:h-[600px] md:w-[400px] h-[600px] w-[400px]">
                        <iframe className="custom-video-container" src="https://www.youtube.com/embed/J1HFLx0STAg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}
export default HRDressSection
