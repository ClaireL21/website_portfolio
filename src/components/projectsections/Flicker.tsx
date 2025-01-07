'use client'
import ExportedImage from "next-image-export-optimizer"
import gamelong from "../../webs_images/proj_images/flicker/gameLong.jpg";
import thumb from "../../webs_images/proj_images/flicker/thumb.jpg";
import train_1 from "../../webs_images/proj_images/flicker/train.png";
import train_2 from "../../webs_images/proj_images/flicker/train2.png";


const tags = [
  { skill: "Unity"},
  { skill: "C#"},
  { skill: "Clip Studio Paint"},
  { skill: "Procreate"},
]

const FlickerSection = () => {
  return (
    <div>
        <section id="flicker">
            <h1 className="text-center font-bold text-3xl">
                Flicker: 2D Platform Game
            </h1>
            <div className='custom-body-2'>
            <div className="text-center flex item-center justify-center mt-8">
                <ExportedImage 
                    className="rounded-lg"
                    src={gamelong}
                    alt="" 
                    width={1000} 
                    height={1000}>
                </ExportedImage>
            </div>

            <div className="mt-8">
                A spooky 2D side-scroller game.

                You play as a zombie trapped in a train with a horde of security guards, 
                with the ability to hide in train compartments and/or attack guards from behind - 
                but get discovered by a guard and it's game over. 
                Additionally, you have remote access to the train's light system which 
                enables you to switch certain compartments' lights on/off. 
                Guards flock to these compartments to investigate the suspicious light behavior, 
                and this allows you to sneak up behind them and attack without getting discovered.

            </div>

            <br/>
                
            <div>
                Your goal? Survive as long as possible.
            </div>

            <h1 className="custom-subheading-2">
                Overview
            </h1>
            <div className="custom-twocol-body">
                <div className="md:w-3/5">
                    <div>
                        Flicker is a 2D platform game I created in a group of three in a 24-hour GameJam coding event.
                        The video below shows the final product and demonstrates Flicker's gameplay.
                    </div>

                    <br/>

                    <div>
                        Personal contributions:
                        <ul className="px-8 list-disc">
                            <li>Spearheaded programming for key gameplay functionality, including player hide and melee capabilities.</li>
                            <li>Produced over 90% of art assets, including sprite animation, environment backdrops, level design and game objects.</li>
                        </ul>
                    </div>

                    <br/>

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
                </div>
                <div className="md:w-2/5 p-4">
                    <ExportedImage 
                        className="rounded-sm"
                        src={thumb}
                        alt="" 
                        width={500} 
                        height={500}>
                    </ExportedImage>
                </div>
            </div>

            <br/>

            <div className="">
                <div className="h-[500px] w-auto">
                    <iframe className="custom-video-container" src="https://www.youtube.com/embed/V994Bc4lgXM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>

            <div className="mb-4 flex flex-col mt-8 text-center items-center justify-center sm:my-10 md:my-2 px-10 sm:py-10 md:flex-row md:space-x-4 md:text-left md:py-8">
                
                <div className="md:w-2/5">
                    <div className="mb-3">
                        Here are some screenshots of the train pixel art featured in the 
                        game! This was my first time working with pixel art - very 
                        different from the digital illustrations I usually make, 
                        but very fun to design the train out.
                    </div>
                    <ExportedImage src={train_1} alt="" width={600} height={600}/>
                </div>
                <div className="md:w-3/5 mt-8">
                    <ExportedImage src={train_2} alt="" width={600} height={600}/>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}
export default FlickerSection
