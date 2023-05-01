import React from "react";

type Props = {
  htmlFor: string;
  label: string;
};

const InputWithLabel = (props: Props) => {
  const { htmlFor, label } = props;
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type="text"
        name=""
        id={htmlFor}
        placeholder=""
        className="border-2 rounded-md px-4 py-2"
      />
    </div>
  );
};

export default InputWithLabel;
