import React, { useState } from "react";

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
    <ul className="flex flex-col gap-4 text-white text-start font-light px-4 py-2">
      <div>
        <h4
          className={`absolute font-normal right-0 mr-4 ${
            open && "rotate-90"
          } transition-all duration-500 `}
        >
          {">"}
        </h4>
        <h4
          className="hover:cursor-pointer font-normal border-b-[1px] border-current hover:scale-105 select-none"
          onClick={handleClick}
        >
          {title}
        </h4>
      </div>
      <div
        className={`overflow-hidden transition-all flex flex-col duration-500 gap-2 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        {items.map((e, index) => (
          <li
            className="border-b-[1px] border-current hover:font-normal hover:cursor-pointer"
            key={index}
          >
            {e}
          </li>
        ))}
      </div>
    </ul>
  );
};
