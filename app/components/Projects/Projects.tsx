import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import { amazonImg, cyberBlog, noorShop } from "@/public/assets/images";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some things I have a built" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/**Project one */}
        <div className="w-full flex flex-col items-center  justify-center gap-28 mt-10">
          <div className="w-full flex flex-col xl:flex-tow gap-6">
            <div className="flex flex-col xl:flex-row gap-6">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://nextamazon.reactbd.com/"
                target="_blank"
              >
                <Image
                  className="w-full h-full object-contain"
                  src={amazonImg}
                  alt="amazonImg"
                />
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between  items-end  text-right  xl:-ml-16 z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                  An Amazon clone website for visualizing personalized Amazon
                  website. View your products, Add your account with
                  <span className="text-textGreen"> O-auth </span> and then make
                  the purchage using{" "}
                  <span className="text-textGreen">stripe.</span>
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>Nextjs</li>
                  <li>Typescript</li>
                  <li>Next-auth</li>
                  <li>Stripe</li>
                  <li>Vercel Deployment</li>
                </ul>
                <div className="text-2xl flex gap-4">
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://gthub.com/Md-Kayda-Azam"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://gthub.com/Md-Kayda-Azam"
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**Project two */}
        <div className="w-full flex flex-col items-center  justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://nextamazon.reactbd.com/"
              target="_blank"
            >
              <Image
                className="w-full h-full object-contain"
                src={cyberBlog}
                alt="cyberBlog"
              />
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between  items-end  text-right  xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Cyber Security Blog</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                An Amazon clone website for visualizing personalized Amazon
                website. View your products, Add your account with
                <span className="text-textGreen"> O-auth </span> and then make
                the purchage using{" "}
                <span className="text-textGreen">stripe.</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>Typescript</li>
                <li>Next-auth</li>
                <li>Stripe</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://gthub.com/Md-Kayda-Azam"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://gthub.com/Md-Kayda-Azam"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/**Project three */}
        <div className="w-full flex flex-col items-center  justify-center gap-28 mt-10">
          <div className="w-full flex flex-col xl:flex-tow gap-6">
            <div className="flex flex-col xl:flex-row gap-6">
              <a
                className="w-full xl:w-1/2 h-auto relative group"
                href="https://nextamazon.reactbd.com/"
                target="_blank"
              >
                <Image
                  className="w-full h-full object-contain"
                  src={noorShop}
                  alt="amazonImg"
                />
              </a>
              <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between  items-end  text-right  xl:-ml-16 z-10">
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
                <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                  An Amazon clone website for visualizing personalized Amazon
                  website. View your products, Add your account with
                  <span className="text-textGreen"> O-auth </span> and then make
                  the purchage using{" "}
                  <span className="text-textGreen">stripe.</span>
                </p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                  <li>Nextjs</li>
                  <li>Typescript</li>
                  <li>Next-auth</li>
                  <li>Stripe</li>
                  <li>Vercel Deployment</li>
                </ul>
                <div className="text-2xl flex gap-4">
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://gthub.com/Md-Kayda-Azam"
                    target="_blank"
                  >
                    <TbBrandGithub />
                  </a>
                  <a
                    className="hover:text-textGreen duration-300"
                    href="https://gthub.com/Md-Kayda-Azam"
                    target="_blank"
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
