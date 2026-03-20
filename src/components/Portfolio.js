
import { portfolioContext } from '../context/PortfolioContext';
import { useContext } from 'react';

function Portfolio(){
    const { AboutData } = useContext(portfolioContext);
    const ProjectItems = AboutData?.professional_experience || [];

    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-3">Portfolio</h1>
                <span className="underline">Features Project</span>
                <div className="grid  xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 pt-2">
                    {
                        ProjectItems.map((project, index)=>(
                            <div key={index} className="sm:h-[320px] sm:w-[300px] h-[320px] w-[350px]
                            shadow-lg bg-slate-900/50 border border-slate-700 flex flex-col pt-4 pb-4 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                                <img className='ml-3 w-[130px] h-[130px] rounded object-cover border border-slate-600' src={project.imgUrl} alt={project.title}></img>
                                <div className='p-3 flex-1 flex flex-col justify-between'>
                                    <h1 className="text-xl font-semibold mb-2 leading-tight">{project.title}</h1>
                                    <div className='flex flex-row gap-3 mt-auto'>
                                        <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className='flex-1 text-center bg-slate-700 hover:bg-slate-600 text-white rounded-md px-2 py-1.5 transition-colors text-sm font-medium'>
                                            GitHub
                                        </a>
                                        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className='flex-1 text-center bg-[#00e676] hover:bg-[#00c853] text-black rounded-md px-2 py-1.5 transition-colors text-sm font-semibold'>
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr className='mt-8 mb-5'></hr>
        </div>
    )
}

export default Portfolio;