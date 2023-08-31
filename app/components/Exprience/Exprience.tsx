"use client";
import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ReactBD from "../Works/ReactBD";
import Amazon from "../Works/Amazon";
import Apple from "../Works/Apple";
import Google from "../Works/Google";

const Exprience = () => {
  const [exp, setExp] = useState({
    reactBD: true,
    google: false,
    apple: false,
    amazon: false,
  });

  const handleRoute = (e: any) => {
    e.preventDefault();

    if (e.target.id == "react") {
      setExp({
        reactBD: true,
        google: false,
        apple: false,
        amazon: false,
      });
    } else if (e.target.id == "google") {
      setExp({
        reactBD: false,
        google: true,
        apple: false,
        amazon: false,
      });
    } else if (e.target.id == "apple") {
      setExp({
        reactBD: false,
        google: false,
        apple: true,
        amazon: false,
      });
    } else if (e.target.id == "amazon") {
      setExp({
        reactBD: false,
        google: false,
        apple: false,
        amazon: true,
      });
    }
  };
  return (
    <section
      id="exprience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={(e) => handleRoute(e)}
            id="react"
            className={`border-l-2 ${
              exp.reactBD ? "border-l-textGreen" : "border-l-hoverColor"
            }   text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            ReactBD
          </li>
          <li
            id="google"
            onClick={handleRoute}
            className={`border-l-2 ${
              exp.google ? "border-l-textGreen" : "border-l-hoverColor"
            }  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            id="apple"
            onClick={handleRoute}
            className={`border-l-2 ${
              exp.apple ? "border-l-textGreen" : "border-l-hoverColor"
            }  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
          <li
            id="amazon"
            onClick={handleRoute}
            className={`border-l-2 ${
              exp.amazon ? "border-l-textGreen" : "border-l-hoverColor"
            }  border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li>
        </ul>
        {exp.reactBD && <ReactBD />}
        {exp.google && <Google />}
        {exp.apple && <Apple />}
        {exp.amazon && <Amazon />}
      </div>
    </section>
  );
};

export default Exprience;
