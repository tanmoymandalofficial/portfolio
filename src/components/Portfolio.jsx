import React from "react";
import bewkoof from "../assets/portfolio/bewkoof.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import shop from "../assets/portfolio/shop.png";
import Faballey from "../assets/portfolio/Faballey.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import beauti from "../assets/portfolio/beautiBebo.png"
import "../components/Portfolio.css";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Faballey,
      live: "https://faballey-replica.netlify.app/",
      code: "https://github.com/harshita0802goswami/faballey-clone",
      title: "FAVALLEY.COM CLONE",
      description:
        "FABALLEY  is an inclusive and fashion-forward western wear brand aimed at arming women with fashion. ",
      techstack: "HTML | CSS | React | ChakraUI | Express js | Mongo DB",
      members:
        "A collaborative project built by a team of 5 web developers in 6 Days",
      feature1: "User can search the hotels according to their preference",
      feature2: "Category-wise page listing & Product filtration",
      feature3: "Add to cart & Multiple types of payment options",
      feature4:
        "All the data is coming from backed using fetch and stored payment and booking details in MongoDB",
    },

    {
      id: 2,
      src: shop,
      live: "https://shop-clone-site.netlify.app",
      code: "https://github.com/kajalyadavgithub/Shop.com-clone",
      title: "SHOP.COM CLONE",
      description:
        "SHOP.COM Marketplace offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more from over 1500 stores with one easy checkout.",
      techstack: "HTML | CSS | JavaScript",
      members:
        "A collaborative project built by a team of 4 web developers in 6 Days",
      feature1: "User can Sign in & Sign up",
      feature2: "Category-wise page listing & Product filtration",
      feature3: "Add to cart & Multiple types of payment options",
    },
    {
      id: 3,
      src: beauti,
      live: "https://beauty-beboclone.netlify.app/",
      code: "https://github.com/harshita0802goswami/Beauty-bebo",
      title: "BEAUTIBEBO.COM CLONE",
      description:
        "Beauty-Bebo is a Beauty Product shopping site that offers the most comprehensive shopping experience on the Internet.",
      techstack: "HTML | CSS | JavaScript",
      members:
        "A collaborative project built by a team of 4 web developers in 6 Days",
      feature1: "User can Sign in & Sign up",
      feature2: "Category-wise page listing & Product filtration and searching",
      feature3: "Add to cart & Multiple types of payment options",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-8" style={{ marginTop: "100px" }}>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0"
          id="mainContainer"
        >
          {portfolios.map(
            ({
              id,
              src,
              live,
              code,
              title,
              description,
              techstack,
              feature1,
              feature2,
              feature3,
              feature4,
            }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg"
                id="container"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                  id="container-img"
                />
                <div id="container-profile">
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <p>Tech stack : {techstack}</p>
                  <ul>
                    {" "}
                    Feature
                    <li className="container-li">{feature1}</li>
                    <li className="container-li">{feature2}</li>
                    <li className="container-li">{feature3}</li>
                    {feature4 ? (
                      <li className="container-li">{feature4}</li>
                    ) : null}
                  </ul>
                  <div id="container-button">
                    <a href={live} target="blank">
                      <button className="w-10  py-3 m-4 duration-200 text-center hover:scale-105 hover:border-b-4 border-indigo-500">
                        Live
                      </button>
                    </a>
                    <a href={code} target="blank">
                      <button className="w-1/2 px-0 py-3 m-4 duration-200 hover:scale-105 hover:border-b-4 border-indigo-500">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
