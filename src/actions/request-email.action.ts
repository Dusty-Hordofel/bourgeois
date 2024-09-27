"use server";
import { formSchema } from "../components/form/contact-form";
import ServiceRequestEmail from "@/email-templates/service-request-email";
import { sendEmail } from "@/lib/send-email";
import { z } from "zod";

export const sendRequestEmail = async (values: z.infer<typeof formSchema>) => {
  const response = await sendEmail(
    "dusty.bamana@isg.fr",
    "Nouvelle demande de prestation de service  🎉",
    ServiceRequestEmail({ ...values })
  );

  return response;
};
