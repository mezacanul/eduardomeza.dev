"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormType,
} from "@/lib/schemas";
import { sendMessage } from "@/lib/actions";
import { useParams } from "next/navigation";

// type Status = "success" | "error" | "loading" | null;
interface FormComponentProps {
  form: any;
  cns: any;
}
export default function MessageForm({
  form,
  cns,
}: FormComponentProps) {
  const { lang } = useParams();
  const [response, setResponse] = useState({
    status: "",
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormType) {
    console.log("data", data);
    const response = await sendMessage({
      ...data,
      region: lang as string,
    });
    console.log("action response", response);
    if (response.status == 200) {
      setResponse({
        status: "success",
        message: response.message,
      });
    } else {
      setResponse({
        status: "error",
        message: response.message,
      });
    }
  }
  return (
    <form
      className={"relative"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={cn(
          "flex flex-col gap-5",
          response.status === "success" && "opacity-0"
        )}
      >
        {/* Form fields  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:gap-8 gap-4">
          <div className="flex flex-col gap-2">
            <input
              // type="text"
              {...register("name")}
              placeholder={form.name.label}
              className={cn(
                cns.input,
                errors.name && "border-red"
              )}
            />
            {errors.name && (
              <p className={cns.error}>{form.name.error}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              // type="email"
              {...register("email")}
              placeholder={form.email.label}
              className={cn(
                cns.input,
                errors.email && "border-red"
              )}
            />
            {errors.email && (
              <p className={cns.error}>
                {form.email.error}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <input
            // type="email"
            {...register("subject")}
            placeholder={form.subject.label}
            className={cn(
              cns.input,
              errors.subject && "border-red"
            )}
          />
          {errors.subject && (
            <p className={cns.error}>
              {form.subject.error}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <textarea
            rows={5}
            {...register("message")}
            placeholder={form.message.label}
            className={cn(
              cns.textarea,
              errors.message && "border-red"
            )}
          />
          {errors.message && (
            <p className={cns.error}>
              {form.message.error}
            </p>
          )}
        </div>

        {/* Submit button, loading state and error message */}
        <div
          className={cn(
            "flex items-center justify-end gap-2",
            response.status === "error" && "justify-between"
          )}
        >
          {response.status === "error" && (
            <p className="text-red">{form.error}</p>
          )}
          {isSubmitting && (
            <span className="py-3">
              <ImSpinner2
                size={30}
                className="animate-spin text-green"
              />
            </span>
          )}
          {!isSubmitting && (
            <button
              // onClick={sendMessage}
              className="button-variant-underline self-end"
              type="submit"
            >
              {form.button}
            </button>
          )}
        </div>
      </div>

      {/* Success message */}
      {response.status === "success" && (
        <SuccessMessage message={form.success} />
      )}
    </form>
  );
}

type Message = { top: string; bottom: string };

function SuccessMessage({ message }: { message: Message }) {
  const { top, bottom } = message;
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col gap-6 text-center items-center justify-center">
      <p className="text-green h3-regular">{top}</p>
      {/* <p className="p1">{bottom}</p> */}
    </div>
  );
}
