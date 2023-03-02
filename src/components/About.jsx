import React from "react";

const About = () => {
  return (
    <div 
      style={{padding:"0px"}}
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, I'm Tanmoy Mondal an aspiring and determined Full Stack Web
          Developer, curious to explore different industry-standard tech stacks
          and environments. Skilled in the MERN stack and willing to start a
          career with an organization that provides an opportunity to improve
          skills and knowledge gained as well as to grow along with the
          organization’s goal.
        </p>

        <br />

        <p className="text-xl">
          My interest in web development started few years back when the
          digitalization started, most of the CAD and management software is
          started their services on web cloud, so I got the curiosity to know
          how these works and then my Full stack web development journey started
          from Masai School.
        </p>
      </div>
    </div>
  );
};

export default About;
