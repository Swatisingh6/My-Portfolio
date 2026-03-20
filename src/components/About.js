import { useContext } from "react";
import { motion } from "framer-motion";
import { portfolioContext } from "../context/PortfolioContext";

function About() {
    const { AboutData } = useContext(portfolioContext);

    const formatWithNewLine = (text) => {
        if (typeof text === "string") {
            return text.split(',').map((item, index) => (
                <div key={index}>{item.trim()}</div>
            ));
        }
        if (Array.isArray(text)) {
            return text.map((item, index) => {
                if (typeof item === 'string') return <div key={index}>{item}</div>;
                if (typeof item === 'object') return <div key={index}>{item.name}</div>;
                return null;
            });
        }
        return null;
    };

    const ImageCard = ({ imgUrl, icon: Icon, color, name }) => (
        <motion.li
            className="group flex flex-col items-center justify-center rounded-xl bg-transparent text-center p-4 sm:p-5 hover:-translate-y-2 transition-all duration-300"
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.4 }}
        >
            {Icon ? (
                <Icon className={`w-10 h-10 sm:w-12 sm:h-12 mb-3 filter drop-shadow-[0_0_8px_currentColor] transition-transform duration-300 group-hover:scale-110 ${color || "text-gray-400"}`} />
            ) : (
                <img
                    src={imgUrl}
                    alt={`${name} icon`}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-md mb-3 object-contain filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                />
            )}
            <span className="font-bold tracking-wide text-white text-xs sm:text-sm">{name}</span>
        </motion.li>
    );

    if (!AboutData) return <p>Loading...</p>;

    return (
        <motion.section
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* -------------------------------------------------- Education and Training -------------------------------------------------- */}
            <motion.h2 className="text-amber-500 font-bold text-2xl uppercase tracking-widest border-b-[3px] border-teal-500 pb-2 inline-block mb-8 mt-6">Education & Training</motion.h2>
            <div className="relative border-l-2 border-gray-700 ml-4 space-y-10 pb-4">
            {AboutData.education?.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col relative pl-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                    <div className="absolute w-4 h-4 rounded-full bg-[#00e676] -left-[9px] top-1 shadow-[0_0_12px_rgba(0,230,118,0.8)]"></div>
                    <p className="text-xl font-bold text-gray-100">{item.title}</p>
                    <p className="text-base text-gray-400 mt-1">{item.institution} <span className="text-[#00e676] font-medium ml-2">({item.duration})</span></p>
                </motion.div>
            ))}
            </div>
            <br />
            {/* -------------------------------------------------- Skills & Experience ------------------------------------------------ */}
            <div className="bg-transparent text-white rounded-3xl py-10 my-12">
                <div className="flex justify-center mb-10 mt-4">
                    <motion.h2 name="Skills" className="text-amber-500 font-bold text-3xl uppercase tracking-widest text-center border-b-[3px] border-teal-500 pb-2">
                        Technical Skills
                    </motion.h2>
                </div>
                
                <div className="flex flex-col w-full">
                    {AboutData.skill_experience?.map((item, idx) => (
                        <div key={idx} className="mb-10 w-full">
                            <p className="font-semibold text-xl mb-6 text-gray-300 border-b border-gray-700 pb-2">{item.category}</p>
                            {item.category !== "Soft Skills" ? (
                                <motion.ul
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 w-full"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        visible: {
                                            transition: { staggerChildren: 0.1 }
                                        }
                                    }}
                                >
                                    {item.skills.map((skill, i) => (
                                        <ImageCard key={i} imgUrl={skill.imgUrl} icon={skill.icon} color={skill.color} name={skill.name} />
                                    ))}
                                </motion.ul>

                            ) : (
                                <ul className="list-disc list-inside ml-4 text-gray-300 space-y-2 text-lg">
                                    {item.skills.map((skill, i) => (
                                        <li key={i}>{skill.name}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>


            <br />

            <br />

            {/* ------------------------------------------------------- certifications ----------------------------------------------------- */}
            <motion.h2 name="Certificates" className="text-amber-500 font-bold text-2xl uppercase tracking-widest border-b-[3px] border-teal-500 pb-2 inline-block mb-6 mt-8">Certificates</motion.h2>
            <motion.ul
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}>
                {AboutData.certificates?.map((cert, index) => (
                    <motion.li
                        key={index}
                        className="bg-[#1a1a1a] rounded-2xl shadow-lg border border-[#333333] hover:border-[#00e676]/50 hover:shadow-[0_0_20px_rgba(0,230,118,0.2)] hover:-translate-y-2 transition-all duration-300 p-5 flex flex-col"
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        <img
                            src={cert.img}
                            alt={cert.title}
                            className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-800"
                        />
                        <div className="flex flex-col flex-1">
                            <h3 className="text-lg font-bold text-gray-100 mb-1">{cert.title}</h3>
                            <p className="text-sm text-gray-400 font-medium mb-1">{cert.institution}</p>
                            <p className="text-sm text-[#00e676] font-semibold mt-auto">{cert.duration}</p>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
            <br />

            {/* --------------------------------------------------- Professional Experience---------------------------------------- */}

            <motion.h2 name="Projects" className="text-amber-500 font-bold text-2xl uppercase tracking-widest border-b-[3px] border-teal-500 pb-2 inline-block mb-6 mt-8">Professional Experience</motion.h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {AboutData.professional_experience?.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-5 hover:shadow-[0_0_25px_rgba(0,230,118,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                    >
                        <div className="flex flex-col justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{exp.title}</h3>
                                <p className="text-sm text-cyan-400 font-medium tracking-wide line-clamp-1">{exp.company}</p>
                            </div>
                        </div>

                        <img className="shadow-lg rounded-xl w-full h-40 md:h-48 object-cover mb-4 border border-gray-700/50" src={exp.imgUrl} alt={exp.title} />

                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-300 mb-2 tracking-wider uppercase text-xs">Technologies Used:</p>
                            <ul className="flex flex-wrap gap-2">
                                {exp.techUsed.map((point, idx) => (
                                    <li className="bg-gray-800/80 hover:bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-xs border border-gray-600 transition-colors" key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-4 mb-4 flex">
                            <span className="text-xs text-[#00e676] font-semibold whitespace-nowrap bg-gray-800/80 px-3 py-1.5 rounded-full border border-gray-700">{exp.duration}</span>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={exp.deployedLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,188,212,0.4)]"
                            >
                                Live Demo
                            </a>
                            <a
                                href={exp.gitHubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg"
                            >
                                Source Code
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            <br />

            {/* ------------------------------------------------------- Achievements -------------------------------------------------- */}

            <motion.h2 className="text-amber-500 font-bold text-2xl uppercase tracking-widest border-b-[3px] border-teal-500 pb-2 inline-block mb-6 mt-10">Achievements & Awards</motion.h2>
            <div className="text-gray-300 text-lg leading-relaxed bg-[#1a1a1a] p-6 rounded-2xl border border-[#333333]">
                {formatWithNewLine(AboutData.achievements)}
            </div>
            <br />
            {/* ------------------------------------------------Mission Statement -------------------------------------------------- */}
            <motion.h2 className="text-amber-500 font-bold text-2xl uppercase tracking-widest border-b-[3px] border-teal-500 pb-2 inline-block mb-6 mt-6">Mission Statement</motion.h2>
            <div className="text-gray-300 text-lg leading-relaxed italic border-l-4 border-[#00e676] pl-6 py-2 mb-16">
                {formatWithNewLine(AboutData.mission_statement)}
            </div>

            <hr className="mt-5" />
        </motion.section>
    );
}

export default About;
