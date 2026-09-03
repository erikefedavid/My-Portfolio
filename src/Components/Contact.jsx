import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Popup from "./Popup";
import { FaWhatsapp } from "react-icons/fa";


export const Contact = () => {
  const form = useRef();
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_485pe1r",
        "template_ap4s5ff",
        form.current,
        "Qb84x7gNNcGfCtnrp"
      )
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          setLoading(false);
          setPopup({
            show: true,
            message: "Message sent successfully ✅",
            type: "success",
          });
          form.current.reset(); // clear inputs
        },
        (error) => {
          console.error("EmailJS Error details:", error);
          setLoading(false);
          setPopup({
            show: true,
            message: `Failed: ${error?.text || error?.message || "Something went wrong"} ❌`,
            type: "error",
          });
        }
      );
  };

  return (
    <section id="contact">
      <div className="bg-[#0f172a] min-h-screen py-16 2xl:py-24 w-full flex flex-col justify-center">
        <div className="text-center text-white 2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl font-bold">
          <h1>Get In Touch</h1>
          <p className="text-gray-400 font-normal text-base md:text-lg mt-3">
            Send an email or message me directly on WhatsApp
          </p>
        </div>


        <form
          className="2xl:mt-16 xl:mt-12 lg:mt-8 sm:mt-8 mt-6 flex flex-col 2xl:gap-6 xl:gap-5
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
            disabled={loading}
            className={`
                    block w-full p-3 rounded-lg border-2 border-white/10 backdrop-blur shadow shadow-teal-500/30 text-white bg-teal-500 font-bold
                     relative overflow-hidden  
                    before:content-[''] before:absolute before:top-0 before:left-[-100%]
                    before:w-full before:h-full 
                    before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                    before:transition-all before:duration-800
                    hover:before:left-[100%]
                    hover:scale-105 transform transition-all duration-300 cursor-pointer
                    ${loading ? "opacity-60 cursor-not-allowed" : ""}
                    `}
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>

          <div className="flex items-center my-1">
            <div className="flex-grow border-t border-white/20"></div>
            <span className="px-4 text-sm text-gray-400 font-semibold tracking-wider">OR</span>
            <div className="flex-grow border-t border-white/20"></div>
          </div>
            <a
              href="https://wa.me/2347043554052?text=Hi%20David%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-3 rounded-lg border-2 border-[#25D366]/40 bg-[#25D366]/15 hover:bg-[#25D366]/30 text-[#25D366] hover:text-white backdrop-blur shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-105 font-bold cursor-pointer"
            >
              <FaWhatsapp className="text-2xl text-[#25D366]" />
              <span >Chat Directly on WhatsApp</span>
            </a>
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