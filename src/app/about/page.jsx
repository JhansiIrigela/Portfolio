"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import about from "public/about.jpg";
import TabButton from "../../components/TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Node Js</li>
        <li>Mongo Db</li>
        <li>Bootstrap</li>
        <li>Tailwind Css</li>
        <li>Next Js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FullStack - Be-Practical Institute</li>
        <li>Gradutaion - Badruka College of Commerce & Arts</li>
        <li>Intermediate - Gurus Inter College</li>
        <li>10th - Ravindra Bharathi School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificate in MernStack</li>
        <li>From: Be-practical </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={about} width={400} height={400} alt />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Aspiring React Front-End Developer | Recent graduate with a passion
            for creating engaging and responsive web applications. Proficient in
            HTML, CSS, and JavaScript, with hands-on experience in React. Eager
            to contribute to innovative projects and grow in the dynamic world
            of web development. Open to learning and collaborating with
            like-minded professionals. Let's build something incredible
            together! 🚀 #ReactJS #FrontEndDeveloper
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
