'use client'
import ExportedImage from "next-image-export-optimizer";
import pin1 from "../../webs_images/proj_images/pinboard/pinb1.png";
import pin2 from "../../webs_images/proj_images/pinboard/pinb2.png";
import pin3 from "../../webs_images/proj_images/pinboard/pinb3.png";
import pin4 from "../../webs_images/proj_images/pinboard/pinb4.png";
import app from "../../webs_images/proj_images/pinboard/pinboard.png";
import gif from "../../webs_images/proj_images/pinboard/pinboard.gif";
import square from "../../webs_images/proj_images/pinboard/square.png";


const tags = [
  { skill: "Swift"},
  { skill: "Xcode"},
]

const PinboardSection = () => {
  return (
    <div>
        <section id="pinboard">
            <h1 className="text-center font-bold text-3xl">
                Pinboard iOS Mobile App
            </h1>
            <div className='custom-body-2'>
              <div className="custom-twocol-body p-4">
                  <div className="md:w-1/2 custom-center">
                    <ExportedImage 
                        className="rounded-sm"
                        src={square}
                        alt="" 
                        width={450} 
                        height={450}>
                    </ExportedImage>
                  </div>
                  <div className="md:w-1/2 custom-center">
                    <ExportedImage 
                      className="rounded-sm"
                      src={gif}
                      alt="" 
                      width={450} 
                      height={450}>
                    </ExportedImage>
                  </div>
              </div>
            <div className="mt-8">
                Pinboard is a group final project for my high school Computer Science 
                Seminar class. It's a social app for high school communities where students can 
                post information about school events & clubs. 
            </div>

            <br/>
                
            <div>
                Personal contributions:
                <ul className="px-8 list-disc">
                    <li>Constructed wireframes, designed user interface & logo, and created loading screen animation </li>
                    <li>Spearheaded programming for profile page, home screen, user feed, and 'subscribed channels' page</li>
                    <li>Developed code for interacting with Firebase to store user data</li>
                </ul>
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
                        Targeted Audience: Schools / Students
                    </div>

                    <br/>
            
                    <div>
                        Purpose:
                        <ul className="px-8 list-disc">
                            <li>Connect student community</li>
                            <li>Provide a centralized platform where students can see school events they’re interested in.</li>
                            <li>Students can create their own informal or official meetings in an easy way.  </li>
                        </ul>
                    </div>

                    <br/>

                    <div>
                        Functions
                        <ul className="px-8 list-disc">
                            <li>Post an event about a club meeting, tutor session, or more!</li>
                            <li>Save events to your calendar.</li>
                            <li>See how many people are attending events.</li>
                            <li>Subscribe to channels that interest you, like math, music, and science! </li>
                        </ul>
                    </div>

                </div>
                <div className="md:w-2/5">
                    <ExportedImage 
                        className="rounded-xl"
                        src={app}
                        alt="" 
                        width={300} 
                        height={300}>
                    </ExportedImage>
                </div>
            </div>

            <br/>

            <h1 className="custom-subheading-2">
                Video Demo
            </h1>

            <div className="mt-8">
                <div className="h-[500px] w-auto aspect-w-16 aspect-h-9">
                    <iframe className="custom-video-container" src="https://www.youtube.com/embed/jLJlH2Lxqfo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
            <br/>

            <h1 className="custom-subheading-2">
                Screens
            </h1>

            <div className="text-center flex item-center justify-center mt-8">
                <ExportedImage 
                    className="rounded-xl"
                    src={pin1}
                    alt="" 
                    width={800} 
                    height={800}>
                </ExportedImage>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <ExportedImage 
                    className="rounded-xl"
                    src={pin2}
                    alt="" 
                    width={800} 
                    height={800}>
                </ExportedImage>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <ExportedImage 
                    className="rounded-xl"
                    src={pin3}
                    alt="" 
                    width={800} 
                    height={800}>
                </ExportedImage>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <ExportedImage 
                    className="rounded-xl"
                    src={pin4}
                    alt="" 
                    width={800} 
                    height={800}>
                </ExportedImage>
            </div>
            </div>
        </section>
    </div>
  )
}
export default PinboardSection
