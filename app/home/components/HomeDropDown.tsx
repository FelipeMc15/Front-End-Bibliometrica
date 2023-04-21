import Image from "next/image";
import React, { useState } from "react";
import arrow_rigth from "public/icons/arrow-right.svg";

type Props = {
  title: string;
  items: string[];
};

export const HomeDropDown = ({ title, items }: Props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <ul className="flex flex-col gap-2 hover:bg-blue-700 transition-all duration-300 text-white text-start border-b-[1px] w-full border-current py-2 px-4 font-light">
      <div className="hover:cursor-pointer" onClick={handleClick}>
        <Image
          src={arrow_rigth}
          alt="arrow"
          className={`w-4 h-4 absolute text-center right-0 my-1 mx-4 ${
            open && "rotate-90"
          } transition-all duration-500`}
        />
        <h4 className="hover:cursor-pointer font-normal select-none">
          {title}
        </h4>
      </div>
      <div
        className={`overflow-hidden transition-all flex flex-col duration-500 gap-2 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        {items.map((item) => (
          <li className="pl-2 hover:cursor-pointer hover:font-normal transition-all duration-300" key={item}>
            {item}
          </li>
        ))}
      </div>
    </ul>
  );
};
