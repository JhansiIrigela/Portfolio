"use client";

import Image from "next/image";
import React from "react";
import Profile from "public/profile1.png";
import Profile2 from "public/profile2.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
// import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left  justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl  lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jhansi",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "Front End Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "4rem",
                display: "inline-block",
                marginTop: "25px",
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mt-3">
            Welcome to Jhansi&apos;s Universe!
            <br />
            Hello there! I&apos;m Jhansi, a passionate and detail-oriented Web
            developer with a fresh perspective and a hunger for learning. I
            embark on this digital journey with a mission to transform
            imaginative ideas into seamless, user-friendly experiences.
          </p>
          <div className="flex ">
            <div>
              <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-900 text-white mt-3">
                <Link
                  href="/my-cv.pdf"
                  download
                  className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                >
                  Download CV
                </Link>
              </button>
              <button className="ml-2 px-1 py-1 rounded-full w-full sm:w-fit bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-900 text-white mt-3">
                <Link
                  href="/mern.jpeg"
                  download
                  className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                >
                  MERN Certificate
                </Link>
              </button>
            </div>

            <div className="flex justify-center items-center mt-4 ml-5 ">
              <Link
                href="https://www.linkedin.com/in/irigela-jhansi-reddy-798950200/"
                title="Linkdin"
              >
                <FaLinkedin className="text-4xl mr-3 hover:skew-x-3 -skew-x-3 " />
              </Link>
              <Link href="https://github.com/JhansiIrigela" title="Github">
                <FaGithub className="text-4xl  mr-3 hover:skew-x-3 -skew-x-3" />
              </Link>
              <Link
                href="https://www.instagram.com/jhaan_seee/"
                title="Instagram"
              >
                <IoLogoInstagram className="text-4xl  mr-3 hover:skew-x-3 -skew-x-3" />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4   place-self-center mt-4 lg:mt-0 "
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={Profile}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
