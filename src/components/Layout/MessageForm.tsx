"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

type Status = "success" | "error" | "loading" | null;

export default function MessageForm({
  form,
  cns,
}: {
  form: any;
  cns: any;
}) {
  const [status, setStatus] = useState<Status>(null);

  function sendMessage() {
    setStatus("loading");
    // console.log("sendMessage");
    setTimeout(() => {
      // setStatus("error");
      setStatus("success");
    }, 1000);
  }
  return (
    <div className={"relative"}>
      <div
        className={cn(
          "flex flex-col gap-5",
          status == "success" && "opacity-0"
        )}
      >
        {/* <label htmlFor="name">{form.name.label}</label> */}
        <input
          type="text"
          placeholder={form.name.label}
          className={cns.input}
        />
        {/* <label htmlFor="email">{form.email.label}</label> */}
        <input
          type="email"
          placeholder={form.email.label}
          className={cns.input}
        />
        {/* <label htmlFor="message">{form.message.label}</label> */}
        <textarea
          rows={5}
          placeholder={form.message.label}
          className={cns.textarea}
        />

        <div
          className={cn(
            "flex items-center justify-end gap-2",
            status === "error" && "justify-between"
          )}
        >
          {status === "error" && (
            <p className="text-red">{form.error}</p>
          )}
          {status === "loading" && (
            <span className="py-3">
              <ImSpinner2
                size={30}
                className="animate-spin text-green"
              />
            </span>
          )}
          {status !== "loading" && (
            <button
              onClick={sendMessage}
              className="button-variant-underline self-end"
              // type="submit"
            >
              {form.button}
            </button>
          )}
        </div>
      </div>
      {status === "success" && (
        <SuccessMessage message={form.success} />
      )}
    </div>
  );
}

type Message = { top: string; bottom: string };

function SuccessMessage({ message }: { message: Message }) {
  const { top, bottom } = message;
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col gap-6 text-center items-center justify-center">
      <p className="text-green h3-regular">{top}</p>
      <p className="p1">{bottom}</p>
    </div>
  );
}
