'use client'
import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Link from 'next/link'

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {   label: "Projects",
        page: "/",
    },
    {   label: "Art",
        page: "/art",
    },
    {   label: "For Fun",
        page: "/forfun",
    },
    {   label: "About",
    page: "/about",
    },
]
const handleClick = (NAV_ITEMS)
const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [clickedIndex, setClickedIndex] = useState(0)

    return (
        <header className={`w-full mx-auto px-10 fixed top-0 z-50 bg-gray border-b border-med_gray`}>
            <div className = "justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3">
                        <Link href="/" className="hover:text-def_yellow">
                            <div className="md:block">
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
                                            `block lg:inline-block hover:text-yellow-600 ${clickedIndex == idx ? "font-bold" : "font-regular"}`
                                        }
                                        onClick={() => {
                                            setNavbar(!navbar); 
                                            setClickedIndex(idx);
                                        }}
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