import { motion } from "framer-motion";
import {Button} from "../Components/Button"

export const Projects = () => {
const myProjects = [
    {
        img:"/images/dashboard.png",
        alt:"Admin-Dashboard",
        header:"Admin Dashboard",
        link:"https://erikefedavid.github.io/Admin-Dashboard/",
        text:"A responsive and interactive admin dashboard built with React and TailwindCSS for seamless data management.",
        button:[
            "React",
            "Tailwind"
]
    },

        {
        img:"/images/weather.png",
        alt:"Weather App",
        header:"Weather App",
        link:"https://erikefedavid.github.io/WEATHER-APP/",
        text:"A sleek and responsive weather app built with React and TailwindCSS, featuring real-time forecasts and a clean UI.",
        button:[
            "React",
            "Tailwind",
        ]
    },

        {
        img:"/images/swissmark.png",
        alt:"SwissMarkk",
        header:"Swissmarkk",
        link:"https://erikefedavid.github.io/SWISSMARK/",
        text:"A static business website built with HTML and CSS to showcase services, products, and contact details for a luxury fragrance brand.",
        button:[
            "HTML",
            "CSS"
]
    },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between children
      delayChildren: 0.3,   // wait before starting the first child
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 }, // start off-screen left
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

    return ( 
        <section
        id="projects"
        >
            <div
             className="bg-[#0f172a]  border-b border-teal-500  w-full"
            >
                <motion.div 
                initial={{scale:0, opacity:0}}
                whileInView={{scale:1, opacity:1}}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                viewport={{ once: true, amount: 0.2 }} 
                className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl   text-white font-bold text-center 2xl:pt-30 xl:pt-20  lg:pt-10 md:pt-8 sm:pt-6 pt-6">
                  <h1> My Projects</h1>
                </motion.div>
 
              <div>
                <motion.div 
                variants={container}
                  initial="hidden"
                  whileInView="show" 
                  viewport={{once:true}}
                >
                   <motion.div
                   className="lg:flex sm:flex sm:flex-wrap block 2xl:my-20 xl:my-12 lg:my-10 md:my-8  my-6 justify-evenly sm:gap-6">
                     {myProjects.map((project,index)=>(
                        <motion.div 
                        whileHover={{y:-20}}
                        variants={item}
                        key={index} className=" group 2xl:w-[600px] xl:w-[350px] lg:w-[300px] sm:w-[280px] w-[300px] mx-auto sm:mx-auto my-6 sm:my-0 pb-8   relative rounded-xl border-2 border-white/30 backdrop-filter-lg hover:border-teal-500 bg-white/10 shadow-xl">
                            <a 
                            href={project.link}
                            target="_blank"
                             rel="noopener noreferrer"            
                            >
                            <div className="relative overflow-hidden 
                             before:content-[''] before:absolute before:top-0 before:left-[-100%]
                              before:w-full before:h-full before:bg-gradient-to-r before:from-transparent
                               before:via-white/20 before:to-transparent 
                                before:transition-all before:duration-800 
                                group-hover:before:left-[100%] ">
                            <img 
                            src={project.img}
                             alt={project.alt} 
                             className="w-full rounded-lg "/>
                            </div>
                            <h1 className="text-2xl font-bold tex my-6 px-4 text-white" > {project.header} </h1>
                            <p className="w-full  my-6 text-gray-500 px-4 text-lg">{project.text}</p>
                            <div className=" absolute bottom-4  left-1/14 flex  gap-4 xl:gap-6"> 
                                {project.button.map((btn,index)=>(
                                    <Button key={index} text={btn}    className="text-teal-500 border border-teal-500" />
                                ))}
                            </div>
                            </a>
                        </motion.div>
                     ))}
                     </motion.div>
                </motion.div>
            </div>
            </div>
        </section>
     );
}