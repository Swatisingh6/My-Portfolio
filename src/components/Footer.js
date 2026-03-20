import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

function Footer(){
    return(
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col items-center mx-auto px-4 md:px-20 mt-8">
                <div className="flex flex-row space-x-6 text-2xl">
                    <a href="https://github.com/swatisingh6/" className="p-3 bg-[#1a1a1a] rounded-full hover:bg-gray-800 hover:text-white hover:-translate-y-1 transition-all duration-300 text-gray-400 shadow-lg border border-gray-800"><FaGithub /></a>
                    <a href="https://linkedin.com/in/swati-kumari8" className="p-3 bg-[#1a1a1a] rounded-full hover:bg-gray-800 hover:text-[cyan] hover:-translate-y-1 transition-all duration-300 text-gray-400 shadow-lg border border-gray-800"><FaLinkedin /></a>
                    <a href="https://x.com/AvniSingh4113" className="p-3 bg-[#1a1a1a] rounded-full hover:bg-gray-800 hover:text-white hover:-translate-y-1 transition-all duration-300 text-gray-400 shadow-lg border border-gray-800"><FaTwitter /></a>
                    <a href="https://www.instagram.com/avnisingh4431" className="p-3 bg-[#1a1a1a] rounded-full hover:bg-gray-800 hover:text-[#E1306C] hover:-translate-y-1 transition-all duration-300 text-gray-400 shadow-lg border border-gray-800"><FaInstagram /></a>
                    <a href="mailto:swatikumari70487@gmail.com" className="p-3 bg-[#1a1a1a] rounded-full hover:bg-gray-800 hover:text-[#ea4335] hover:-translate-y-1 transition-all duration-300 text-gray-400 shadow-lg border border-gray-800"><FaEnvelope /></a>
                </div>
                <div className="mt-12 border-t border-gray-800 w-full flex flex-col items-center pt-8 pb-16">
                    <p className="text-gray-500 text-sm tracking-wide">&copy; 2024 Swati Kumari. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;