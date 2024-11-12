'use client'
import React, { useState, useEffect } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Link from 'next/link'

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {   label: "About",
        page: "/"
    },
    {   label: "Projects",
        page: "/projects"
    },
    {   label: "Art",
        page: "/art"
    },
    {   label: "For Fun",
        page: "/forfun"
    }
]

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <header className={`w-full mx-auto px-10 fixed top-0 z-50 bg-white`}>
            <div className = "justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3">
                        <Link href="/" className="hover:text-yellow-600">
                            <div className="md:py-5 md:block">
                                <h2 className="text-2xl font-bold"> Claire Lu</h2>
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <button onClick={()=>setNavbar(!navbar)}>
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
        
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={item.page}
                                        className={
                                            `block lg:inline-block font-semibold hover:text-yellow-600`
                                        }
                                        onClick={() => setNavbar(!navbar)}
                                        >{item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar