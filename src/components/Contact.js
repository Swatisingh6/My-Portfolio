import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"
import { motion } from "framer-motion"

function Contact(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) =>{
        const userInfo={
            name: data.name,
            email: data.email,
            query: data.query
        }
        try{
            await axios.post("https://getform.io/f/pbqgzwzb",userInfo);
            toast.success("Your message has been sent");
        }catch(error){
            toast.error("An error has occurred");
        }
      }

    return(
        <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div>
                <motion.h1 
                    className="text-4xl font-bold mb-3 text-white tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Contact <span className="text-[#00e676]">Me</span>
                </motion.h1>
                <span className="text-gray-400 text-lg block">Please fill out the form below to contact me</span>
                <span className="text-gray-400 text-lg block mt-1">Or email me directly: <a href="mailto:swatikumari70487@gmail.com" className="text-[#00e676] hover:underline">swatikumari70487@gmail.com</a></span>
                <div className="flex flex-col items-center justify-center mt-10">
                    <motion.div 
                        className="bg-[#1a1a1a] w-full sm:w-[450px] p-8 border border-[#333333] shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <form
                            onSubmit={handleSubmit(onSubmit)} 
                            >
                            <h1 className="text-2xl font-bold mb-8 text-white text-center">Send Your Message</h1>
                            <div>
                                <div>
                                    <label className="text-gray-300 font-medium tracking-wide">Full Name</label>
                                    <br/>
                                    <input  {...register("name", { required: true })} id="name" name="name" type="text" className="rounded-lg w-full mt-2 h-[45px] text-base pl-3 bg-[#111111] border border-gray-700 text-white focus:border-[#00e676] focus:ring-1 focus:ring-[#00e676] outline-none transition-all placeholder-gray-600" placeholder="Enter your Full Name"/>
                                    {errors.name && <span className="text-red-500 text-sm mt-1.5 block">This field is required</span>}
                                </div>
                                <div className="mt-5">
                                    <label className="text-gray-300 font-medium tracking-wide">Email Address</label>
                                    <br/>
                                    <input {...register("email", { required: true })} id="email" name="email" type="text" className="rounded-lg w-full mt-2 h-[45px] text-base pl-3 bg-[#111111] border border-gray-700 text-white focus:border-[#00e676] focus:ring-1 focus:ring-[#00e676] outline-none transition-all placeholder-gray-600" placeholder="Enter your Email Address"/>
                                    {errors.email && <span className="text-red-500 text-sm mt-1.5 block">This field is required</span>}
                                </div>
                                <div className="mt-5">
                                    <label className="text-gray-300 font-medium tracking-wide">Message</label>
                                    <br/>
                                    <textarea {...register("query", { required: true })} id="query" name="query" className="rounded-lg w-full mt-2 h-[120px] text-base pt-3 pl-3 bg-[#111111] border border-gray-700 text-white focus:border-[#00e676] focus:ring-1 focus:ring-[#00e676] outline-none transition-all placeholder-gray-600 resize-none" placeholder="Enter your Query"></textarea>
                                    {errors.query && <span className="text-red-500 text-sm mt-1.5 block">This field is required</span>}
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-[#00e676] to-emerald-600 rounded-xl px-2 py-3.5 mt-8 hover:scale-[1.02] transition-transform duration-300 text-white font-bold tracking-widest shadow-[0_0_15px_rgba(0,230,118,0.3)] uppercase">Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
            <hr className="mt-16 mb-8 border-gray-800"></hr>
        </div>
    )
}

export default Contact;