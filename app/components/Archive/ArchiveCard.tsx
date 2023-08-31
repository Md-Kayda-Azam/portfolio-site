import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";
interface ArchiveCardProps {
  title: string;
  des: string;
  listItem: string[];
  link: string;
}
const ArchiveCard: React.FC<ArchiveCardProps> = ({
  title,
  des,
  listItem,
  link,
}) => {
  return (
    <>
      <a href={link} target="_blank">
        <div className="w-full h-80 rounded-lg bg-[#112240] p-7 cursor-pointer flex flex-col gap-6 hover:translate-y-2 transition-transform duration-300 group">
          <div className="flex justify-between items-center">
            <FaRegFolder className="text-4xl text-textGreen" />
            <RxOpenInNewWindow className="text-3xl hover:text-textGreen" />
          </div>
          <div>
            <h1 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen ">
              {title}
            </h1>
            <p className="text-sm mt-3">{des}</p>
          </div>
          <ul className="text-xs mdl:text-sm text-textDark flex items-center justify-between gap-2 flex-wrap">
            {listItem.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </a>
    </>
  );
};

export default ArchiveCard;
