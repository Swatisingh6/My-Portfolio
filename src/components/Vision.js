import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const visionData = [
  {
    id: 1,
    title: "Build user-first MERN apps",
    content: "I want every project to feel fast, intuitive, and accessible. I focus on clean UI and reliable full-stack behavior so users trust the product.",
    highlights: ["Responsive layouts", "Smooth interactions", "Practical feature design"]
  },
  {
    id: 2,
    title: "Write scalable, maintainable code",
    content: "Great apps are easy to extend. I aim for modular components, predictable data flow, and solid error handling across the stack.",
    highlights: ["Reusable components", "Consistent state patterns", "Performance-aware decisions"]
  },
  {
    id: 3,
    title: "Turn ideas into real products",
    content: "From initial concept to final deployment, I take complete ownership of the development cycle, ensuring that the final output aligns perfectly with the original goals.",
    highlights: ["Agile mindset", "Problem solving", "End-to-end delivery"]
  },
  {
    id: 4,
    title: "Continuous learning (always)",
    content: "I practice DSA and keep exploring new tools so I can solve harder problems and improve the quality of my work.",
    highlights: ["DSA practice", "New frameworks", "Better engineering habits"]
  }
];

export default function Vision() {
  const [openId, setOpenId] = useState(1);

  return (
    <div name="Vision" className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-20 py-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#111111]/80 backdrop-blur-md border border-gray-800 rounded-3xl p-5 lg:p-8 shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          
          <div className="lg:w-1/3">
            <h2 className="text-white font-bold text-4xl mb-6">Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My vision is to grow as a software developer by building products that combine strong engineering with a modern, user-friendly experience.
            </p>
            <div className="flex flex-wrap gap-2">
              {['MERN', 'UI/UX', 'Scalability', 'Learning'].map(tag => (
                <span key={tag} className="bg-transparent border border-gray-600 text-gray-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-4">
            {visionData.map((item) => (
              <div 
                key={item.id}
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className={`border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${openId === item.id ? 'bg-[#1a1a24] border-[#00e676]/50 shadow-[0_0_15px_rgba(0,230,118,0.1)]' : 'bg-[#1a1a24]/50 border-gray-800 hover:border-gray-600'}`}
              >
                <div className="p-3 sm:p-4 flex justify-between items-center">
                  <h3 className={`font-bold text-base md:text-lg transition-colors ${openId === item.id ? 'text-[#00e676]' : 'text-gray-200 group-hover:text-white'}`}>
                    {item.title}
                  </h3>
                  <span className={`text-xl transition-transform duration-300 ${openId === item.id ? 'text-[#00e676] -rotate-180' : 'text-gray-500'}`}>
                    {openId === item.id ? '−' : '+'}
                  </span>
                </div>
                
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 pb-4 pt-0 border-t border-gray-800/50 mt-1">
                        <p className="text-gray-400 mt-2 mb-3 leading-relaxed text-sm">
                          {item.content}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((h, i) => (
                            <span key={i} className="bg-gray-800/80 text-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold whitespace-nowrap border border-gray-700">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </div>
  );
}
