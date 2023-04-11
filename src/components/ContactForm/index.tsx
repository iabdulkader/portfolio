import React from "react";
import Input from "./Input";
import { AiOutlineSend } from "react-icons/ai";
import { Toaster, toast } from "react-hot-toast";

type Props = {};

type Input = {
  value: string;
  error: string;
};

function ContactForm({}: Props) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [name, setName] = React.useState<Input>({ value: "", error: "" });
  const [email, setEmail] = React.useState<Input>({ value: "", error: "" });
  const [subject, setSubject] = React.useState<Input>({ value: "", error: "" });
  const [message, setMessage] = React.useState<Input>({ value: "", error: "" });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;

    if (!name.value || name.value.length < 3) {
      setName({ error: "Name is invalid.", value: name.value });
      valid = false;
    }

    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(email.value) ===
      false
    ) {
      setEmail({ error: "Email is invalid.", value: email.value });
      valid = false;
    }

    if (!subject.value || subject.value.length < 5) {
      setSubject({ error: "Subject is invalid.", value: subject.value });
      valid = false;
    }

    if (!message.value || message.value.length < 10) {
      setMessage({ error: "Message is invalid.", value: message.value });
      valid = false;
    }

    if (!valid || loading) return;

    setLoading(true);

    toast.promise(
      fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.success) {
            setName({ error: "", value: "" });
            setEmail({ error: "", value: "" });
            setSubject({ error: "", value: "" });
            setMessage({ error: "", value: "" });
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        }),

      {
        loading: "Sending...",
        success: "Message Sent.",
        error: "Error sending message.",
      }
    );
  };
  return (
    <form onSubmit={submit}>
      <div className="gap-3 flex h-full w-full flex-col lg:flex-row">
        <div className="flex-grow">
          <div className="flex flex-col gap-3 lg:flex-row mb-3">
            <Input
              value={name.value}
              onChange={(e) => setName({ error: "", value: e.target.value })}
              placeholder="Name"
              type="text"
              error={name.error}
            />

            <Input
              value={email.value}
              onChange={(e) => setEmail({ error: "", value: e.target.value })}
              placeholder="Email"
              type="text"
              error={email.error}
            />
            <Input
              value={subject.value}
              onChange={(e) => setSubject({ error: "", value: e.target.value })}
              placeholder="Subject"
              type="text"
              error={subject.error}
            />
          </div>
          <Input.Textarea
            value={message.value}
            onChange={(e) => setMessage({ error: "", value: e.target.value })}
            placeholder="Message"
            error={message.error}
          />
        </div>
        <div className="flex-grow  lg:max-w-md lg:min-w-[24rem]">
          <button className="hover:scale-95 transition-all duration-300 bg-[#FEF48C] text-slate-900 rounded-[3rem] w-full h-full min-h-[15rem] block">
            {!loading ? (
              <div className="flex flex-row justify-center items-center gap-3 text-xl font-bold">
                <AiOutlineSend />
                <h1>Send</h1>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-slate-50 animate-spin dark:text-gray-600 fill-slate-900"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>
      <Toaster />
    </form>
  );
}

export default ContactForm;
