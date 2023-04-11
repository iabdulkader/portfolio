import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function Input({
  type,
  placeholder,
  value,
  onChange,
  className,
  error,
}: Props) {
  return (
    <div className="relative overflow-hidden flex-grow">
      <input
        value={value}
        onChange={onChange}
        className={`bg-[#231F1A] p-10 rounded-[3rem] w-full border ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-transparent focus:border-[#FEF48C]"
        } outline-none 
        placeholder-[#FEF48C] ${className}`}
        placeholder={placeholder}
        type={type}
      />
      <span className="text-red-500 absolute text-sm bottom-3 left-10 overflow-hidden whitespace-nowrap">
        {error}
      </span>
    </div>
  );
}

Input.Textarea = function InputTextarea({
  placeholder,
  value,
  onChange,
  className,
  error,
}: React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  Props) {
  return (
    <div className="relative overflow-hidden">
      <textarea
        value={value}
        onChange={onChange}
        className={`bg-[#231F1A] p-10 rounded-[3rem] w-full border ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-transparent focus:border-[#FEF48C]"
        } outline-none 
        placeholder-[#FEF48C] min-h-[20rem] ${className}`}
        placeholder={placeholder}
      />
      <span className="text-red-500 absolute text-sm bottom-8 left-10 overflow-hidden whitespace-nowrap">
        {error}
      </span>
    </div>
  );
};

export default Input;
