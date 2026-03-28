"use server";
import { ContactFormType } from "./schemas";

interface SendMessageProps extends ContactFormType {
  region: string;
}

export async function sendMessage(data: SendMessageProps) {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

  const response = await fetch(`${baseUrl}/api/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, projectId }),
  });
  return await response.json();
}
