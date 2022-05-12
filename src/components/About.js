import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi there 👋 I'm Zach
            <br />
            <br className="hidden lg:inline-block" />I have a broad business and technical skill set
          </h1>
          <h2></h2>
          <p className="mb-8 leading-relaxed">
            I've managed customer success and operations teams in hi-tech and I have experience in sales, product, and writing.  I also completed an intensive bootcamp in full stack web development with some projects showcased below.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Some Apps
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-third md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./prof-pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}
