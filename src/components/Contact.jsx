import React from "react";
import "../components/Home.css";
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";

const links1 = [
  {
    id: 4,
    child: (
      <>
        <FaGithub size={30} /> GitHub
      </>
    ),
    href: "https://github.com/tanmoymandalofficial",
  },
  
  {
    id: 3,
    child: (
      <>
        <FaLinkedin size={30} /> LinkedIn
      </>
    ),
    href: "https://www.linkedin.com/in/tanmoymandalofficial/",
    style: "rounded-tr-md",
  },
  {
    id: 6,
    child: (
      <>
        <BsFillPersonLinesFill size={30} />Download Resume
      </>
    ),
    href: "https://drive.google.com/file/d/1LslesodBORIbgqADc9EaUuCYY6S48lMF/view",
    style: "rounded-br-md",
    download: true,
  },
  
];
const links2 = [
  {
    id: 1,
    child: (
      <>
        <FaLocationArrow size={30} /> Birbhum, West Bengal
      </>
    ),
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        <HiOutlineMail size={30} /> tm.mypersonal@gmail.com
      </>
    ),
    href: "mailto:tm.mypersonal@gmail.com",
  },
  {
    id: 5,
    child: (
      <>
        <AiTwotonePhone size={30} /> 8972782368
      </>
    ),
    href: "tel:+8972782368",
  },
  
]
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white" id="contactrad"
    >
      <div className="flex flex-col p-4 justify-saround max-w-screen-lg mx-auto h-fit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          {/* <p className="py-6">Submit the form below to get in touch with me</p> */}
        </div>

        <div id="contact-sub-container">

          <div>
            <ul>
              {links1.map(({ id, child, href, style, download }) => (
                <li
                  key={id}
                >
                  <a
                    href={href}
                    id="contact"
                    className="flex justify-between items-center w-full text-white"
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
            
          </div>
          <div>
            <ul>
              {links2.map(({ id, child, href, style, download }) => (
                <li
                  key={id}
                >
                  <a
                    href={href}
                    id="contact"
                    className="flex justify-between items-center w-full text-white"
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <form
            action="https://getform.io/f/fa63b65d-d431-470a-8048-b4c9f76c26f3"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input style={{marginTop:"-0px"}}
              type="text"
              name="mobile"
              placeholder="Enter your phone number"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form> */}

          
        </div>
      </div>
    </div>
  );
};


export default Contact;
