"use client";
import React, { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import project from "./projectsData.json";
import projectNext from "./projectsDataNext.json";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  des: string;
  listItem: string[];
  link: string;
}

interface Data {
  project: Project[];
}

const Archive = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const data: Data = project;
  const data1: Data = projectNext;

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {data.project.map((project) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <ArchiveCard
              key={project.id}
              title={project.title}
              des={project.des}
              listItem={project.listItem}
              link={project.link}
            />
          </motion.div>
        ))}

        {showMore &&
          data1.project.map((project) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                key={project.id}
                title={project.title}
                des={project.des}
                listItem={project.listItem}
                link={project.link}
              />
            </motion.div>
          ))}
      </div>
      <div className="mt-12 flex justify-center items-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Archive;
