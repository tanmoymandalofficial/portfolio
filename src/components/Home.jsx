import React from "react";
import HeroImage from "../assets/me.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "../components/NavBar.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "../components/Home.css";
import resume from '../assets/Tanmoy_Mondal_Resume.pdf'

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["Full Stack Web Developer","MERN Stack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 150,
      backSpeed: 175,
      smooth:true,
      // backDelay: 100,
      // smartBackspace: true,
      loop: true,
      // showCursor: true,
      // cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row" style={{ width: "90%", justifyContent:"space-between" }}>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white  duration-200 hover:scale-105">
           Hello, I'm Tanmoy Mondal
          </h2>
          <br/>
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
           I'm a  <span className="typing"></span>
          </h2>
          {/* <p className="text-gray-500 py-4 max-w-md">
            I'm a passionate Developer, with strong administrative and communication skills, good attention to detail and the ability to write efficient code using MERN Stack.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p> */}

          <div>
            <a href={resume} target="blank">
            <button
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mt-10"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300"> 
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            id="profileImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
