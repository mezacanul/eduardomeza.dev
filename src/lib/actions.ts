"use server";
import { ContactFormType } from "./schemas";

export async function sendMessage(data: ContactFormType) {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
  
  const response = await fetch(`${baseUrl}/api/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}
