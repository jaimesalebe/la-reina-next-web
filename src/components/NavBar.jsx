'use client'

import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import Logo from './Logo';

const links = [
    {
        label: "Inicio",
        route: "/"
    },
    {
        label: "Noticias",
        route: "/noticias"
    },
    {
        label: "Nosotros",
        route: "/nosotros"
    },
    {
        label: "Contacto",
        route: "/contacto"
    }
]


const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (

        <header className='container mx-auto my-5 px-4 sm:px-0 flex flex-wrap justify-between items-center'>
            <Link href={'/'} className='transition-all hover:scale-110'>
                <Logo/>
            </Link>
            
            <button onClick={handleMenu}>
                {!menu ? <CiMenuBurger fill='#FEFCEE' className='sm:hidden w-10 h-8' /> : <IoMdClose fill='#FEFCEE' className='sm:hidden w-10 h-8' />}
            </button>
            
            <nav className={`${menu ? 'h-96 opacity-100' : 'h-0 opacity-0'} sm:h-auto sm:opacity-100 overflow-hidden duration-300 transition-all flex w-full sm:flex flex-col flex-nowrap justify-center items-center sm:w-auto`}>
                <ul className='flex flex-col flex-nowrap justify-end items-center sm:flex-row gap-6'>
                    {links.map((link) => (
                        <li key={link.label} onClick={()=> setMenu(false)}>
                            <Link className=" text-white font-bold uppercase hover:text-yellow" href={link.route}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar