"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Intelligent Elevator Optimization Program",
    description: "ELEVATE",
    image: "/images/projects/project-1.GIF",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/JhaAyushCanCode/ELEVATE",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project Suggestion Website",
    description: "Anchorr",
    image: "/images/projects/project-2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JhaAyushCanCode/Anchor",
    previewUrl: "https://anchorr-51ep.onrender.com",
  },
  {
    id: 3,
    title: "Automated Web Source Database Generator",
    description: "DataBird",
    image: "/images/projects/project-3.jpg",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/JhaAyushCanCode/Python-Web-Scraper-",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Refurbished Supercar Dealership webApp",
    description: "SecondRev",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JhaAyushCanCode/SecondRev",
    previewUrl: "https://second-ezcuii3y1-ayushs-projects-33c1ac4a.vercel.app/",
  },
  {
    id: 5,
    title: "Python Aim Trainer Software",
    description: "Aim-Quick",
    image: "/images/projects/project-5.jpg",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/JhaAyushCanCode/Python-Aim-Trainer",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Python Automated Scripter",
    description: "FileDaddy",
    image: "/images/projects/project-6.webp",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/JhaAyushCanCode/Python-Automated-Scripter-Algorithm",
    previewUrl: "/",
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
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
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
