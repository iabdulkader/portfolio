import React from "react";
import Input from "./Input";
import { AiOutlineSend } from "react-icons/ai";

type Props = {};

function ContactForm({}: Props) {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submit}>
      <div className="gap-3 flex h-full w-full flex-col lg:flex-row">
        <div className="flex-grow">
          <div className="flex flex-col gap-3 lg:flex-row mb-3">
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="text" />
            <Input placeholder="Subject" type="text" />
          </div>
          <Input.Textarea placeholder="Message" />
        </div>
        <div className="flex-grow  lg:max-w-md lg:min-w-[24rem]">
          <button className="bg-[#FEF48C] text-slate-900 rounded-[3rem] w-full h-full min-h-[15rem] block">
            <div className="flex flex-row justify-center items-center gap-3 text-xl font-bold">
              <AiOutlineSend />
              <h1>Send</h1>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
