import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Popup from "./Popup";


export const Contact = () => {
  const form = useRef();
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1iof7pk",
        "template_ap4s5ff",
        form.current,
        "EqQX2wXzJKLi7FbK9"
      )
      .then(
        () => {
          setPopup({
            show: true,
            message: "Message sent successfully ✅",
            type: "success",
          });
          form.current.reset(); // clear inputs
        },
        () => {
          setPopup({
            show: true,
            message: "Something went wrong ❌",
            type: "error",
          });
        }
      );
  };

  return ( 
       <section id="contact">
            <div className="bg-[#0f172a] h-screen 2xl:h-fit 2xl:pb-8 w-full">
                <div className="text-center text-white 2xl:pt-20 xl:pt-12 lg:pt-8 pt-6  2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl font-bold">
                    <h1>Get In Touch</h1>
                </div>

                
                    <form  
                    className="2xl:mt-30 xl:mt-20 lg:mt-10 sm:mt-10 mt-6 flex flex-col 2xl:gap-12 xl:gap-6
                     gap-4 2xl:w-2xl xl:w-xl lg:w-lg md:w-md sm:w-sm
                      w-full p-3 sm:p-0 mx-auto
                      "
                       ref={form}
                       onSubmit={sendEmail}
                      >
                    
                    <input 
                    type="text"
                     name="from_name"
                    placeholder=" Your Name..."
                    className="block w-full p-3 
                    rounded-lg border-2 border-white/10 backdrop-blur 
                    shadow-lg text-gray-400
                    transition-all duration-300 
                    focus:scale-105 
                     focus:border-teal-500 
                    focus:shadow-md 
                    focus:shadow-teal-500/50 
                    focus:outline-none
                    "


                    />
                    <input 
                    type="text"
                     name="from_email"
                    placeholder=" Your Email"
                    className="
                    block w-full p-3 rounded-lg
                     border-2 border-white/10
                      backdrop-blur shadow-lg text-gray-400
                      transition-all duration-300 
                      focus:scale-105 
                     focus:border-teal-500 
                     focus:shadow-md
                    focus:shadow-teal-500/50 
                    focus:outline-none              
                      "

                    />
                    <textarea 
                    name="message"
                     placeholder=" Your message..."
                     className="block w-full h-40 p-3 rounded-lg border-2 border-white/10 backdrop-blur shadow-lg text-gray-400
                     transition-all duration-300 
                        focus:scale-105 
                        focus:border-teal-500 
                        focus:shadow-md 
                        focus:shadow-teal-500/50 
                        focus:outline-none
                      "

                    />

                    <button
                    type="submit"
                    className="
                    block w-full p-3 rounded-lg border-2 border-white/10 backdrop-blur shadow shadow-green-500 text-white bg-green-500 font-bold
                     relative overflow-hidden  
                    before:content-[''] before:absolute before:top-0 before:left-[-100%]
                    before:w-full before:h-full 
                    before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                    before:transition-all before:duration-800
                    hover:before:left-[100%]
                    hover:scale-105 transform transition-all duration-300
                    "

                    > Send Message</button>
                </form>
                
                {/* popup */}
                <Popup
                  show={popup.show}
                  message={popup.message}
                  type={popup.type}
                  onClose={() => setPopup({ ...popup, show: false })}
                />
            </div>
       </section>

     );
}