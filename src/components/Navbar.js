import swatiImg from "../img/Swati Image.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import {Link} from "react-scroll";

function Navbar() {
    const [menu,setMenu]=useState(true);

    const navItems = [
        {id:1,text:"Home"},
        {id:2,text:"Skills"},
        {id:3,text:"Certificates"},
        {id:4,text:"Projects"},
        {id:5,text:"Vision"},
        {id:6,text:"Blog"},
        {id:7,text:"Contact"}
    ]

    return <div className="fixed left-0 right-0 top-0 z-50">
        <div className="flex justify-center border-b border-gray-800 bg-[#111111]/80 backdrop-blur-md">
            <div className="flex justify-between place-items-center h-16 w-11/12 text-xl text-white">
                <div className="flex gap-3">

                    <img src={swatiImg} className="h-12 w-12 rounded-full ring-2 ring-[#00e676]/50" alt="avatar" />
                    <h1 className="font-bold tracking-widest">SWAT<span className="text-[#00e676] text-2xl">I</span>
                        <p className="text-sm text-gray-400 font-medium tracking-normal">Web Developer</p>
                    </h1>
                </div>

                {/* Desktop Navbar */}
                <div>
                    <ul className="hidden md:flex space-x-8 text-gray-300">
                        {
                            navItems.map(({id,text}) => (
                                <li className="hover:text-[#00e676] hover:scale-105 transition-all duration-300 cursor-pointer font-medium tracking-wide" key={id}>
                                    <Link 
                                        to={text} 
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                    >{text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div onClick={()=>setMenu(!menu)} className="md:hidden">
                        {menu?<MdOutlineMenu size={26} />:<IoCloseSharp  size={26}/>}
                    </div>
                </div>
            </div>
        </div>
        {/* Mobile Navbar */}
        <div>
            {!menu?<ul className="md:hidden flex flex-col items-center bg-[#111111] border-b border-gray-800 pb-10 pt-10 justify-center w-full shadow-2xl space-y-4">
            {
                navItems.map(({id,text}) => (
                    <li className="hover:text-[#00e676] hover:scale-110 transition-all duration-300 cursor-pointer text-xl font-medium tracking-wide text-gray-200" key={id}>
                        <Link
                            onClick={()=>setMenu(!menu)} 
                            to={text} 
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass="active">
                            {text}
                        </Link>
                    </li>
                ))
            }
            </ul>:<div></div>}
        </div>
    </div>
}

export default Navbar;
