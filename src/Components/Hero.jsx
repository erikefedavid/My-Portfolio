import { animate, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ReactTyped } from "react-typed";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub />, // ✅ actual JSX, not a string
      link: "https://github.com/ERIKEFE-DAVID",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/david-erikefe-3a41072b8/",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/daveBuild_s",
    },
  ];

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
    >
      <motion.div
        className="bg-gradient-to-tr relative  from-black via-green-500 to-teal-500 w-full lg:h-screen"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className=" w-full items-center lg:flex block p-8 md:p-10  lg:p-12 2xl:p-32 justify-between">

          <div className=" sm:w-[600px] md:w-[450px] lg:w-[500px] h-fit xl:w-[650px] md:mx-auto lg:mx-0 2xl:w-[900px]">
            <div className="text-white mx-auto lg:mx-0 2xl:w-[400px] 2xl:text-5xl lg:text-lg bg-white/20 w-32 text-center backdrop-filter border-white/30 rounded-2xl shadow-xl p-2">
              <h1>👋Hello,I'm</h1>
            </div>
            <motion.div
              variants={fadeUp}
              className="text-white 2xl:text-9xl mx-auto lg:mx-0 text-4xl md:text-5xl lg:text-6xl font-bold transform w-fit drop-shadow-lg drop-shadow-teal-500 my-4 lg:my-6 2xl:my-12 hover:scale-105 transition-all duration-500 ease-in-out"
            >
              <h1>David Erikefe</h1>
            </motion.div>
            <div className="text-teal-500 2xl:my-12 2xl:text-7xl text-center lg:text-start drop-shadow my-4 lg:my-6 text-3xl lg:text-4xl font-bold">
              <h1>
               <ReactTyped
                 strings={[
                  "Creative Frontend Engineer",
                  "React Developer", 
                  "Web Developer"
                 ]}
               typeSpeed={50}
               backSpeed={30}
               loop
               backDelay={1500}
               /></h1>
            </div>
            <div className="lg:text-xl text-center 2xl:my-12 2xl:text-5xl leading-snug 2xl:w-full lg:text-start md:text-lg text-white w-full xl:w-[550px] drop-shadow">
              <h1>
                I merge code and creativity to deliver dynamic, pixel-perfect
                websites with seamless animations and intuitive design.
              </h1>
            </div>

            {/* button */}
            <div className="lg:my-6 2xl:my-12 my-4 justify-center gap-4 md:gap-0  lg:justify-start text-sm md:text-md lg:text-lg flex lg:gap-6 text-center">
              <motion.div
                className="bg-white md:mx-auto lg:mx-0 w-32 md:w-40 2xl:p-12 2xl:w-96 2xl:text-4xl text-green-500 p-3 rounded-full  backdrop-blur
                                        hover:scale-105 transform transition-all duration-300 cursor-pointer"
                whileTap={{ scale: 0.95 }}
              >
                <a href="#projects">View My Work</a>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="bg-transparent 2xl:w-96  2xl:text-4xl 2xl:p-12 md:mx-auto lg:mx-0 w-32 md:w-40
                   relative overflow-hidden px-6 py-3 
                    before:content-[''] before:absolute before:top-0 before:left-[-100%]
                    before:w-full before:h-full 
                    before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                    before:transition-all before:duration-800
                    hover:before:left-[100%]
                   text-white p-3 border border-white shadow hover:scale-105 transform transition-all duration-300
                   cursor-pointer shadow-white rounded-full backdrop-blur"
                            >
                <a href="#contact">Contact Me</a>
              </motion.div>
            </div>

            {/* social links */}
            <div className="flex w-40 mx-auto lg:mx-0 p-2 2xl:gap-24 2xl:my-24  my-12 lg:my-0 justify-between">
              {socialLinks.map((social, index) => (
                <a
                  href={social.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl 2xl:text-6xl text-white backdrop-blur hover:text-teal-500">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
         
         {/* about me */}
          <motion.div
           initial={{opacity:0, x:50}}
           animate={{opacity:1,x:0}}
           transition={{duration:0.9, delay:0.4}}
          >
<div className="relative hidden md:block  md:w-[500px]  xl:w-[700px] md:mx-auto 2xl:w-[900px]  lg:mx-0 md:p-4 lg:p-6 rounded-2xl bg-black/80 backdrop-blur-lg border 2xl:h-[900px] border-white/20 shadow-lg">
  <SyntaxHighlighter
    style={vscDarkPlus}
    language="typescript"
    customStyle={{
      background: "transparent", 
      padding: "1rem",
      borderRadius: "0.75rem",
      fontSize: "0.9rem",
    }}
  >
    {`const aboutMe = {
  codename: "DaveBuild_s",
  origin: "🌍 Crafting code from Nigeria to the World",
  role: "Frontend Developer",
  stack: {
    languages: ["JavaScript", "Python (Basics)"],
    frameworks: ["React", "TailwindCSS"],
  }
  traits: [
    "clean-code advocate",
    "API explorer",
    "dark mode lover",
    "always learning",
  ],
  missionStatement: 
    "Bringing designs to life with code that’s both functional and elegant.",
  availability: "Open to collaborations and opportunities",
  contact: "+234704355052"
};`}
  </SyntaxHighlighter>
     <motion.div
      animate={{ rotate: [ 0,2,0, ], y: [0,-10,0] }} // wiggle effect
      transition={{
        duration: 4,
        repeat: Infinity, 
        ease: "easeInOut"
      }}
         className="absolute hidden md:block p-4  -bottom-4 right-1/14 z-20  text-white text-lg bg-white/10 border-white/20 border backdrop-filter-lg rounded-2xl shadow-lg ">
        <span>💻 Currently working on something awesome!</span>
      </motion.div>
</div>
    </motion.div>        
   </div>
      </motion.div>
    </motion.section>
  );
};
