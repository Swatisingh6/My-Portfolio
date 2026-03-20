import { motion } from 'framer-motion';

const blogData = [
  {
    id: 1,
    title: "Designing modern UI systems with Tailwind",
    tags: ["Tailwind", "UI/UX", "Components"],
    year: "2026",
    desc: "How I keep spacing, typography, and states consistent while building responsive portfolio sections.",
    link: "#"
  },
  {
    id: 2,
    title: "MERN full-stack workflow that actually scales",
    tags: ["MERN", "State", "APIs"],
    year: "2026",
    desc: "My approach to building features end-to-end: UI → API → data model → deployment.",
    link: "#"
  },
  {
    id: 3,
    title: "DSA practice: turning problem-solving into product thinking",
    tags: ["DSA", "Problem Solving"],
    year: "2026",
    desc: "How DSA improves my product decisions: performance, structure, and clarity.",
    link: "#"
  }
];

export default function Blog() {
  return (
    <div name="Blog" className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-20 py-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#111111]/80 backdrop-blur-md border border-gray-800 rounded-3xl p-6 lg:p-10 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div className="max-w-2xl">
            <h2 className="text-white font-bold text-4xl mb-4">Blog</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Small notes from my learning journey—UI, MERN, and DSA—written in a way I can reuse in real projects.
            </p>
          </div>
          <span className="text-gray-500 font-medium mt-6 md:mt-0 text-sm">Click a post to read.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((post, idx) => (
            <motion.a 
              href={post.link}
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-[#1a1a20] border border-gray-800 hover:border-[#00e676]/60 rounded-2xl p-5 sm:p-6 flex flex-col h-full hover:shadow-[0_0_25px_rgba(0,230,118,0.1)] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold text-xl leading-snug group-hover:text-[#00e676] transition-colors pr-2">{post.title}</h3>
                  <span className="text-xs bg-gray-800 text-gray-400 font-mono px-3 py-1 rounded-full border border-gray-700 ml-2 shrink-0">{post.year}</span>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {post.desc}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {post.tags.map((tag, i) => (
                  <span key={i} className="bg-black/50 border border-gray-700 text-gray-300 px-3 py-1 rounded-lg text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
