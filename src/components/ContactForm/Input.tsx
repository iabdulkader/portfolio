import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function Input({ type, placeholder }: Props) {
  return (
    <input
      className="bg-[#231F1A] p-10 rounded-[3rem] w-full focus:border border-none outline-none focus:outline-[#FEF48C] placeholder-[#FEF48C]"
      placeholder={placeholder}
      type={type}
    />
  );
}

Input.Textarea = function InputTextarea({
  placeholder,
}: React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>) {
  return (
    <textarea
      className="bg-[#231F1A] p-10 outline-none border-none rounded-[3rem] w-full focus:border focus:outline-[#FEF48C] placeholder-[#FEF48C] min-h-[20rem]"
      placeholder={placeholder}
    />
  );
};

export default Input;
