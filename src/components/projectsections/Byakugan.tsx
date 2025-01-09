'use client'

import ExportedImage from "next-image-export-optimizer"
import fff_1 from "../../webs_images/proj_images/fffinder/FFF.png";
import Link from "next/link";
import { BsGithub } from "react-icons/bs"

const tags = [
    { skill: "Unreal Engine"},
    { skill: "Blueprints"},
    { skill: "VR"},
]

const ByakuganSection = () => {
  return (
    <div>
        <section id="robot">
            <h1 className="text-center font-bold text-3xl">
                Byakugan: VR 360 Hack n Slash
            </h1>
            <div className="md:w-4/5 custom-body align-center items-center justify-center text-center">                
                <div className="md:h-[600px] h-[300px]">
                    <iframe className="custom-video-container" src="https://www.youtube.com/embed/g3RljdQFxnE?si=ca0l2gBDIDO79w5E" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="italic mt-2">
                    Byakugan Gameplay Features Demo; Footage recorded through Meta Quest 3 VR headset
                </div>
            </div>
            <div className='custom-body-2'>
                <h1 className="custom-subheading-2">
                    Overview
                </h1>
                <div className="mt-2">
                    This project was a three person group project for CIS 5680, Game Design Practicuum.
                </div>
                <div className="mt-2">
                    The player is spawned as a ninja in the middle of a bamboo forest. They must find the sword
                    spawned nearby. Once they grab it, enemy ninjas will come from all directions around them. 
                    They must defeat enemies by slashing their sword with "qi" channeled. 
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
                    <Link href={"https://github.com/ClaireL21/Byakugan-VR-Game"} target="_blank">
                            <BsGithub
                                size={30}
                                className="mt-2 hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                    </Link>
                </div>
                <h1 className="custom-subheading-2">
                    Major Features
                </h1>
                <div className="mt-2 font-bold">
                Sword Slashing as a Mechanism to Defeat Incoming Ninjas
                </div>
                <div>
                <ul className="px-8 list-disc">
                    <li>The sword collision method supports any type of sword slashing movements (i.e. poking, horizontal, vertical, diagonal slashes)
                    </li>
                    <li>
                    A speed threshold must be reached by the player when slashing the sword. The sword simply coming into contact with the player is not enough – this is to prevent the player from simply rotating in a circle to defeat incoming enemies, essentially forcing them to perform slash motions, which increases their immersion in the game. 
                    </li>
                </ul>
                <div className="mt-2 font-bold">
                    Sword Qi system
                </div>
                <ul className="px-8 list-disc">
                    <li>
                    Qi is channeled into the sword by holding the left controller trigger. Releasing the trigger stops it from being channeled.
                    </li>
                    <li>
                    When Qi is channeled, the player is notified with both visual + auditory feedback. They hear a “whoosh” sound when channeling qi, and a different pitched “whoosh” sound when releasing the qi trigger. Visually, they can see the sword transition from a neutral blue color to a bright orange glow.
                    </li>
                </ul>
                <div className="mt-2 font-bold">
                    Player’s Sixth Sense
                </div>
                <ul className="px-8 list-disc">
                    <li>
                    As a ninja, the player has a “sixth sense” that alerts them of incoming enemies approaching them from behind.

                    </li>
                    <li>
                    This sixth sense takes the form of a soft orange post-processing overlay that is visible along the circumference of the headset. If an enemy approaches them from behind, the overlay appears and, after a delay of 1 second, it disappears. 
                    </li>
                    <li>
                    (Note: recording gameplay footage through the meta quest camera app can only record footage through the left or right eye. The gameplay + trailer videos are all recorded through the left eye, so only the left half of the post processing is visible in the videos. Playing and viewing through the headset will show the actual post processing effect.)

                    </li>
                    <li>
                    Lastly, we have incorporated spatial audio via footsteps sound effects. The player can distinguish what direction the enemies are coming from by paying attention to what direction the footstep sounds are coming from. This also helps to enhance player immersion into the game. 

                    </li>
                </ul>
                </div>
                <h1 className="custom-subheading-2">
                    User's Guide
                </h1>
                <div className="mt-2" style={{ whiteSpace: "pre-line" }}>
                1. As the player, your main objective is to kill as many enemy ninjas as possible in order to achieve the highest score.{"\n"}
                2. To begin playing, look at the ground and pick up the sword. Once the sword is picked up, enemies will begin to spawn. {"\n"}
                3. In order to kill an enemy, the player must release qi using left trigger as the sword collides with an enemy, otherwise the ninja will not die. {"\n"}
                4. The player can kill enemies in a variety of ways, whether that be by poking, slashing, chopping, etc. as long as a minimum linear velocity threshold has been met.{"\n"}
                5. As the player kills enemies, their score will be incremented and can be seen on a wood block to the left of the player.{"\n"}
                6. The player can also view their qi gauge by looking at their left hand, which additionally displays how many lives they have, which is 3 lives by default.{"\n"}
                7. If the player loses all of their lives, they will die and their score will be reset where they can choose to play again.
                </div>
            </div>
        </section>
    </div>
  )
}
export default ByakuganSection
