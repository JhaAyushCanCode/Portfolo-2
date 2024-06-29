"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>C++</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Delhi Technological University</li>
        <li>Department of Engineering Physics</li>
      </ul>
    ),
  },
  {
    title: "Proficiency",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>MERN stack web dev</li>
        <li>Next.js web dev</li>
        <li>Data Structures & Algorithms</li>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.avif" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          With a focus on simplifying complex problems, I specialize in developing practical solutions through programming and innovative thinking. As a project enthusiast, I've led impactful initiatives, optimizing elevator systems, automating website creation, ensuring product authenticity, and forecasting stock prices. Using languages like C++, Python, and JavaScript, along with frameworks and tools such as BOOST, React.js, and PyTorch, I've consistently delivered efficient algorithms and user-friendly platforms. My academic background in B. Tech from Delhi Technological University provides a strong foundation in areas like microprocessors, digital electronics, and communication systems. Beyond my technical skills, I've also demonstrated leadership as a programming mentor, dance battle winner, and team leader, showcasing a well-rounded approach to problem-solving and collaboration.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Proficiency{" "}
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
