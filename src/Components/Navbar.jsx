import { useState } from "react";
import {Menu} from 'lucide-react'
import {motion} from "framer-motion"
export const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false)

 const NavLinks = [
    {
        name:"Home",
        href:"#home"
    },
        {
        name:"Projects",
        href:"#projects"
    },
        {
        name:"Contact",
        href:"#contact"
    }
 ]

    return ( 
    <motion.div
     initial={{  y: -100 }}        
      animate={{  y: 0 }}           
      transition={{ duration: 0.6, ease: "easeOut" }} 
    
    className={`bg-gradient-to-tl from-black via-black to bg-teal-500 w-full md:h-20  ${menuOpen?"h-fit" : "h-20" }`}>
        <div className="flex items-center p-3 justify-between mx-10">
            <div>
             <h1 className="text-2xl md:text-3xl lg:text-4xl  text-teal-500 font-extrabold drop-shadow-xl drop-shadow-white/20 hover:scale-105 transform transition-all duration-1000"> Portfolio </h1>
             </div>
             {/* hamburger icon for mobile */}
             <div>
                <div className="items-center md:hidden flex">
                    <button onClick={()=>setMenuOpen(!menuOpen) }><Menu className="text-white" /></button>
                </div>
             </div>
             {/* navLinks */}
           <div className="gap-6 hidden md:flex p-2 items-center text-lg mx-4 ">  
            {NavLinks.map((links,index)=>(            
              <motion.a href={links.href}
                key={index}
                whileTap={{ scale: 0.98 }} 
                className="relative group text-gray-200 hover:text-teal-500 hover:scale-110 transform duration-300 ease-in-out transition-colors"
              >{links.name}
             <span className="absolute left-0 w-0 h-0.5 bg-teal-500 transiton-all bottom-0 duration-700 group-hover:w-full"></span>
              </motion.a>
               ))}   
            </div>           
        </div>   
          {menuOpen &&(
                <div className="flex  md:hidden flex-col text-xl p-4 leading-loose w-24">
                {NavLinks.map((links,index)=>(
                  <a 
                  href={links.href}
                  key={index}
                  className="relative group text-white hover:text-teal-500"
                  >{links.name}
                  <span className="absolute w-0 h-0.5 transition-all ease-in-out duration-700 left-0 bottom-0 bg-teal-500 group-hover:w-28 "> </span>
                  </a>
                ))}
                </div>
             )}
    </motion.div>
     );
}