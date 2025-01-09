'use client'

import Link from "next/link";
import { BsGithub } from "react-icons/bs"

const tags = [
    { skill: "Unreal Engine"},
    { skill: "Blueprints"},
]

const FurySection = () => {
  return (
    <div>
        <section id="flamesoffury">
            <h1 className="text-center font-bold text-3xl">
                Flames of Fury: 2.5D Platform Game
            </h1>
            
            <div className="md:w-4/5 custom-body align-center items-center justify-center text-center">                
                <div className="md:h-[600px] h-[300px]">
                    <iframe className="custom-video-container" src="https://www.youtube.com/embed/kWaIHsvncRc?si=3ykdPHPScSOhNHJN" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
            <div className='custom-body-2'>
                <div className="italic mt-2">
                Level 1 Gameplay Speedrun
                </div>

                <h1 className="custom-subheading-2">
                    Overview
                </h1>
                <div className="custom-twocol-body">
                    <div className="md:w-1/3">
                        <div className="mt-2">
                            This project was a three person group project for CIS 5680, Game Design Practicuum.
                        </div>
                        <div className="mt-2">
                            The player must reach the the end of the level by navigating through obstacle puzzles
                            in their path. They are able to destroy objects by launching bombs at them. Players 
                            can also chain together bombs to launch themselves over obstacles or gaps in the level.  
                        </div>
                        <div className="mt-2 font-bold">
                            Features
                        </div>
                        <ul className="px-8 list-disc">
                            <li>Ability to enter bullet time</li>
                            <li>Destructible objects</li>
                            <li>Throwable bombs and detonation</li>
                            <li>Powerups that give player more bombs</li>
                            <li>Checkpoints</li>
                        </ul>
                        <div className="mt-2 font-bold">
                            Assets
                        </div>
                        <ul className="px-8 list-disc">
                            <li>For Level 1, assets were from {" "}
                                <a className="custom-highlighted-text" href="https://www.fab.com/listings/9211e1d8-16e7-4429-a1b3-e4ceb02018ab">[VP]Temples of Cambodia</a> - ruins exterior and interior on Fab
                            </li>
                            <li>For Tutorial, assets were from {" "}
                                <a className="custom-highlighted-text" href="https://www.fab.com/listings/c437d905-5078-4e59-88ed-d585ef20050b">Cave Ruins / 47 Assets</a> on Fab.
                            </li>

                        </ul>
                    </div>
                    <div className="md:w-2/3">
                        <div className="md:h-[400px] h-[400px] w-full py-4">
                            <iframe className="custom-video-container" src="https://www.youtube.com/embed/ez7hP5ZqfiI?si=pfz3QTLHjC9AtmRU" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <div className="italic">
                        Tutorial Level Gameplay
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
                            <Link href={"https://github.com/ClaireL21/FlamesOfFuryGame"} target="_blank">
                            <BsGithub
                                size={30}
                                className="mt-2 hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                            </Link>
                        </div>
                    </div>
                </div>
                <h1 className="custom-subheading-2">
                    User's Manual
                </h1>
                <div className="">
                    To play the game, you can click ‘Start’ or ‘Levels’ and select either the Tutorial or Level 1
                    The tutorial will walk you through a few basic actions and show situations in which these would 
                    be used. For example, showing how to detonate objects, how to enter bullet time, situations in which bombs should be used to launch the player forward or upwards, etc.
                </div>
                <div className="mt-2">
                The player can:
                    <ul className="px-8 list-disc">
                        <li>Hold their left mouse button to aim bombs and release to throw bombs</li>
                        <li>Press ‘E’ to detonate bombs</li>
                        <li>Hold ‘Shift’ to enter bullet time</li>
                    </ul>
                </div>
                <div className="mt-2">
                    Common uses of bombs include (often with the help of bullet time to allow for proper bomb placement)
                </div>
                    <ul className="px-8 list-disc">
                        <li>Launching a bomb underneath the player to gain more vertical height</li>
                        <li>Launching a bomb at an angle to allow the player to travel in a arc movement</li>
                        <li>Chaining three bombs together to obtain increased power from the bombs</li>
                    </ul>
                <div className="mt-2">
                    When the player passes an orange door, they’ve reached a checkpoint.
                </div>
                <div className="mt-2">
                    Starting the level will place the player at their most recent checkpoint.
                </div>
                <div className="mt-2">
                    When the player reaches the end of the level, they will win.
                </div>
            </div>
        </section>
    </div>
  )
}
export default FurySection
