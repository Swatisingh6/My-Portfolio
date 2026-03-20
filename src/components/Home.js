import { FaGithub, FaLinkedin } from "react-icons/fa";

import swatiImg from "../img/Swati Image.png";

import { ReactTyped } from "react-typed";
import { useContext } from "react";
import { portfolioContext } from "../context/PortfolioContext";
import { Link } from "react-scroll";



function Home() {
    const { AboutmeData } = useContext(portfolioContext);
    return (
        <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-32 mb-16 flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center space-y-6">
                <img 
                    src={swatiImg} 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-[3px] ring-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] mb-4" 
                    alt="Profile"
                />
                
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
                        Hi, I'm <span className="text-[#FFD700]">Swati</span>
                    </h1>
                    <div className="text-xl md:text-2xl font-semibold flex justify-center items-center space-x-2 text-gray-300">
                        <span>I'm a</span>
                        <ReactTyped
                            className="text-[#FFD700]"
                            strings={["Full Stack Developer", "Software Engineer", "MERN Expert"]}
                            typeSpeed={80}
                            backSpeed={80}
                            loop={true}
                        />
                    </div>
                </div>

                <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl px-4 mt-6">
                    {AboutmeData}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 w-full sm:w-auto px-6">
                    <Link to="Projects" smooth={true} duration={500} offset={-70} className="flex items-center justify-center gap-2 bg-[#00b4d8] hover:bg-[#0096c7] hover:scale-105 transition-all duration-300 text-white font-semibold rounded-full px-8 py-3 shadow-lg w-full sm:w-auto cursor-pointer">
                        View Projects 🚀
                    </Link>
                    <Link to="Contact" smooth={true} duration={500} offset={-70} className="flex items-center justify-center gap-2 bg-[#5e60ce] hover:bg-[#48bfe3] hover:scale-105 transition-all duration-300 text-white font-semibold rounded-full px-8 py-3 shadow-lg w-full sm:w-auto cursor-pointer">
                        Contact Me ✉️
                    </Link>
                </div>
                
                <div className="mt-4">
                    <a
                        href="https://drive.google.com/file/d/1SpuWPsjVSOsvt8rxoX0rZcvi6bCNP_Xw/view?usp=drive_link"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] hover:scale-105 transition-transform duration-300 text-white font-semibold rounded-full px-10 py-3 shadow-[0_0_15px_rgba(249,115,22,0.3)] w-full sm:w-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download CV 📥
                    </a>
                </div>

                <div className="flex justify-center space-x-6 mt-12 text-xl text-gray-300">
                    <a href="https://github.com/swatisingh6/" className="p-3 bg-[#1a1a1a] rounded-full hover:bg-gray-800 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg border border-[#333333]"><FaGithub /></a>
                    <a href="https://linkedin.com/in/swati-kumari8" className="p-3 bg-[#1a1a1a] rounded-full hover:bg-gray-800 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg border border-[#333333]"><FaLinkedin /></a>
                </div>
            </div>
            <hr className="mt-16 w-full border-gray-800"></hr>
        </div>
    );
}

export default Home;