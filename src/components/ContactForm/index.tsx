import React from "react";
import Input from "./Input";
import { AiOutlineSend } from "react-icons/ai";

type Props = {};

function ContactForm({}: Props) {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    console.log(res);

    const data = await res.json();

    console.log(data);

    if (data.success) {
      alert("Message Sent.");
      setValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <form onSubmit={submit}>
      <div className="gap-3 flex h-full w-full flex-col lg:flex-row">
        <div className="flex-grow">
          <div className="flex flex-col gap-3 lg:flex-row mb-3">
            <Input
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              placeholder="Name"
              type="text"
            />
            <Input
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              placeholder="Email"
              type="text"
            />
            <Input
              value={values.subject}
              onChange={(e) =>
                setValues({ ...values, subject: e.target.value })
              }
              placeholder="Subject"
              type="text"
            />
          </div>
          <Input.Textarea
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            placeholder="Message"
          />
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
