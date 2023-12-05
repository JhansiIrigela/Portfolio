"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectTag from "../../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Admin-Dashboard",
    desc: "description 1",
    image: "/images/projects/1.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/JhansiIrigela/admin-dashboard",
    previewUrl: "https://admin-dashboard-xi-topaz.vercel.app/",
  },
  {
    id: 2,
    title: "Cermaic-Store",
    desc: "description 2",
    image: "/images/projects/2.png",
    tag: ["All", "Javascript"],
    gitUrl: "https://github.com/JhansiIrigela/Ceramic-store",
    previewUrl: "https://ceramic-store-inky.vercel.app/",
  },
  {
    id: 3,
    title: "FoodTutorial-app",
    desc: "description 3",
    image: "/images/projects/3.png",
    tag: ["All", "Javascript"],
    gitUrl: "https://github.com/JhansiIrigela/Food-Tutorial-App",
    previewUrl: "https://food-tutorial-app.vercel.app/",
  },
  {
    id: 4,
    title: "React-Table",
    desc: "description 4",
    image: "/images/projects/4.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/JhansiIrigela/react-table",
    previewUrl: "https://react-table-five-umber.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    inital: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Javascript"
          isSelected={tag === "Javascript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            inital="initial"
            animate={isInView ? "animate" : "inital"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              desc={project.desc}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
