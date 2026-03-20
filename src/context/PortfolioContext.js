
import { createContext } from 'react';
import { FaJava, FaJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaLaptopCode } from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import innovation from '../img/innovation.png'
import bank from '../img/bank.png'
import soft from '../img/soft.png'
import bits from '../img/bits.png'
import dsa from '../img/dsa.png'
import management from '../img/management.png'
//import powerBiProject from '../img/powerBiProject.png'
import eplq from '../img/eplq.png'

// Step 1
export const portfolioContext = createContext();

// Step 2
export default function PortfolioContextProvider({ children }) {
    // Project configs are dynamically sourced from AboutData now

    const AboutmeData =
        `A passionate developer and Computer Science student at Lovely Professional University, specializing in creating comprehensive web solutions with expertise in MERN Stack development.`;

        const AboutMeExtra = {
            education: [
              { title: "Bachelor of Technology (Computer Science and Engineering)", institution: "Lovely Professional University, Phagwara, Punjab", duration: "Aug 2023 – Present • CGPA: 7.06" },
              { title: "Intermediate (PCM)", institution: "Gorakh Singh School, Siwan, Bihar", duration: "Mar 2022 – May 2023 • CGPA: 7.7" },
              { title: "Matriculation", institution: "Saraswati Vidya Mandir, Siwan, Bihar", duration: "Mar 2020 – May 2021 • CGPA: 8.2" },
              { title: "Data Structure and Algorithm in (C, C++)", institution: "Board Infinity", duration: "Jun 2025 – Jul 2025" }
            ],
          
            skill_experience: [
              {
                category: "Programming Languages",
                skills: [
                  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
                  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
                  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
                  { name: "C", icon: SiCplusplus, color: "text-blue-400" },
                  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
                  { name: "Java", icon: FaJava, color: "text-red-500" },
                  { name: "React", icon: FaReact, color: "text-blue-400" },
                  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" }
                ]
              },
              {
                category: "Tools & Platforms",
                skills: [
                  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
                  { name: "MS SQL Server", icon: SiMysql, color: "text-blue-400" },
                  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
                  { name: "GitHub", icon: FaGithub, color: "text-white" },
                  { name: "Ubuntu", icon: FaLaptopCode, color: "text-orange-400" },
                  { name: "XAMPP", icon: TbApi, color: "text-orange-500" },
                  { name: "Cisco", icon: FaLaptopCode, color: "text-blue-500" }
                ]
              },
              {
                category: "Soft Skills",
                skills: [
                  { name: "Team Collaboration" },
                  { name: "Time Management" },
                  { name: "Problem Solving" }
                ]
              }
            ],
          
            professional_experience: [
              {
                title: "Student Innovation & Startup Management Platform",
                company: "Full Stack Development",
                duration: "Nov 2025 – Dec 2025",
                techUsed: [
                  "React", "Node.js", "Express", "MongoDB", "Gemini AI"
                ],
                imgUrl: innovation,
                gitHubLink: "https://github.com/swatisingh6/",
                deployedLink: "https://innovationwebsite-2.onrender.com/"
              },
              {
                title: "Postfix Evaluator & Bank Queue System",
                company: "Data Structures Application",
                duration: "Jul 2025 – Sep 2025",
                techUsed: [
                  "HTML", "CSS", "C++", "DSA", "Stacks", "Queues"
                ],
                imgUrl: bank,
                gitHubLink: "https://github.com/swatisingh6/",
                deployedLink: "https://swatisingh6.github.io/minorproject/"
              },
              {
                title: "EPLQ - Privacy-Preserving Location Query System",
                company: "Encrypted Web App",
                duration: "May 2025 – Jul 2025",
                techUsed: [
                  "HTML", "CSS", "JavaScript", "Firebase", "Cloud Functions"
                ],
                imgUrl: eplq,
                gitHubLink: "https://github.com/swatisingh6/",
                deployedLink: "https://eplq-unique.onrender.com/"
              }
            ],
            
            certificates: [
              { title: "ChatGPT-4 Prompt Engineering", institution: "Infosys", duration: "Recently completed", img: soft },
              { title: "MongoDB for Developers / Basics", institution: "MongoDB University", duration: "Feb 2026", img: dsa },
              { title: "300+ Hours Web Development", institution: "FreeCodeCamp", duration: "Verified", img: bits },
              { title: "Cloud Computing Certification", institution: "NPTEL", duration: "Verified", img: management }
            ],
            
            achievements: "Solved 100+ DSA problems on GeeksforGeeks and LeetCode.\nEarned MongoDB Badge for NoSQL, CRUD operations, and schema design (Feb 2026).\nActively participated in technical workshops and coding events.\nCompleted NSS activities including Swachhata Hi Seva and Louis Braille awareness programs (Aug 2025).\nFundamentals of Management (UCI - Coursera): Learned basics of leadership and decision-making.\nBusiness Analysis (Simplilearn): Gained knowledge in requirement gathering.",
          
            mission_statement: `My mission is to leverage my skills in full stack web development to build efficient, scalable, and user-friendly applications that create real-world impact. I aim to contribute to the digital landscape through clean and innovative software solutions. I am committed to continuous learning, constantly improving my technical expertise, and embracing new challenges to grow as a developer.`
          };
          

    const value = {
        AboutmeData,
<<<<<<< HEAD
=======
        AboutMeExtra,

      
>>>>>>> 592573372b871be961a2825fa18bb8866c313d00
        AboutData
    };

    // Step 3
    return (
        <portfolioContext.Provider value={value}>
            {children}
        </portfolioContext.Provider>
    );
}
