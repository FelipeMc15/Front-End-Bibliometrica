import React from "react";

type Props = {
  htmlFor: string;
  label: string;
};

const Checkbox = (props: Props) => {
  const { htmlFor, label } = props;
  return (
    <div className="flex flex-row gap-4 select-none">
      <input type="checkbox" name="" id={htmlFor} />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};

export default Checkbox;
