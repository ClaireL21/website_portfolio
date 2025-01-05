import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineInstagram,
} from "react-icons/ai"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="mx-auto max-w-3xl mt-20 px-4 sm:px-6 md:max-w-5xl mb-6">
            <div className="mx-auto p-4 flex flex-col text-center text-neutral-900">
                <div className="flex flex-row items-center justify-center space-x-10 mb-2">
                    <a href="https://github.com/ClaireL21" rel="noreferrer" target="_blank">
                        <AiOutlineGithub 
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-dark_gray hover:text-yellow-600" 
                            size={30}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/claire-lu-470419235/" rel="noreferrer" target="_blank">
                        <AiOutlineLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-dark_gray hover:text-yellow-600" 
                            size={30}
                        />
                    </a>
                    <a href="https://www.instagram.com/doodlzithink_/" rel="noreferrer" target="_blank">
                        <AiOutlineInstagram
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-dark_gray hover:text-yellow-600" 
                            size={30}
                        />
                    </a>
                </div>
                <div className='text-dark_gray'>
                    <div className='items-center justify-center'>
                        Contact: {" "}
                        <span className="underline italics">
                        53claire@gmail.com
                        </span>
                    </div>
                    <Link
                    href="/projects"
                    className="font-regular italic underline hover:text-hover_yellow"
                    >
                    Resume
                    </Link>
                    <div className="text-sm mt-4">
                        © 2024 Claire Lu
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer