"use client";

import React, { useState } from "react";
import { TextRevealCard } from "./ui/TextRevealCard";
import { HoverEffect } from "./ui/HoverCardEffect";
import { FaUserGraduate } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { SiCoursera } from "react-icons/si";

const Education = () => {
  const [eduType, setEduType] = useState("academic");
  const academicEducations = [
    {
      title: "Graduation Running.",
      major: "Department of CSE",
      institute: "Uttara University",
      icon: <FaUserGraduate className="text-lg text-blue-400" />,
      link: "https://uttarauniversity.edu.bd/",
    },

    {
      title: "Diploma in Computer Science",
      major: "Computer Science",
      institute: "Mymensingh Polytechnic Institute",
      icon: <PiExamFill className="text-lg text-blue-400" />,
      link: "https://mpi.edu.bd/",
    },
    
    {
      title: "Secondary School Certificate",
      major: "Civil Construction",
      institute: "Trishal Technical And Commercial College",
      icon: <PiExamFill className="text-lg text-blue-400" />,
      link: "https://www.facebook.com/p/Trishal-Technical-And-Commercial-College-100077648956163/",
    },

  ];

  const courseEducation = [
    {
      title: "PHP & MySQL",
      major: "Laravel",
      institute: "Creative IT Institute",
      icon: <SiCoursera className="text-lg text-blue-400" />,
      link: "https://www.creativeitinstitute.com/",
    },
    {
      title: "Diploma in Professional Web Application Development",
      major: "Full Stack Developer",
      institute: "IsDB-BISEW IT Scholarship Programme",
      icon: <SiCoursera className="text-lg text-blue-400" />,
      link: "https://isdb-bisew.org/",
    },
    {
      title: "Digital Marketing",
      major: "Marketing",
      institute: "Learning & Earning Development Project | ICT Division",
      icon: <SiCoursera className="text-lg text-blue-400" />,
      link: "https://ledp.ictd.gov.bd/",
    },
  ];

  return (
    <div className="my-16">
      {/* <TextRevealCard
        text="Education Courses and Recognition"
        revealText="Recognition Courses and Education "
      /> */}
      {/* <div className="flex justify-center mb-3">
        <h1 className="text-base md:text-lg lg:text-xl text-blue-200 font-bold tracking-widest">
          Education and Courses
        </h1>
      </div> */}

      {/* tab */}
      <div className="my-3 flex">
        <div className="flex flex-col gap-y-3">
          <span
            onClick={() => {
              setEduType("academic");
            }}
            className={`${
              eduType == "academic" && " border-l-4 border-red-600 bg-slate-900"
            } cursor-pointer px-5 py-1 rounded`}
          >
            Academic
          </span>
          <span
            onClick={() => {
              setEduType("course");
            }}
            className={`${
              eduType == "course" && " border-l-4 border-red-600 bg-slate-900"
            } cursor-pointer px-5 py-1 rounded`}
          >
            Courses
          </span>
        </div>
      </div>
      <div>
        {eduType == "academic" ? (
          <div className="w-full mx-auto">
            <HoverEffect items={academicEducations} />
          </div>
        ) : (
          <div className="w-full mx-auto">
            <HoverEffect items={courseEducation} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
