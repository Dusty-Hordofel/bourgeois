"use server";
import { formSchema } from "./../app/contact-form";
import RequestEmail from "@/email-templates/request-email";
import SendResetPasswordEmail from "@/email-templates/send-reset-password-email";
import ServiceRequestEmail from "@/email-templates/service-request-email";
import { sendEmail } from "@/lib/send-email";
import { z } from "zod";

export const sendRequestEmail = async (values: z.infer<typeof formSchema>) => {
  //   const response = await sendEmail(
  //     "dusty.bamana@isg.fr",
  //     "Next Pizza / Ваш заказ успешно оформлен 🎉",
  //     RequestEmail({
  //       userName,
  //       userEmail,
  //       subscriptionStartDate,
  //       subscriptionEndDate,
  //     })
  //   );

  //   const resetPasswordCode: number = 233444;
  //   const tala = await sendEmail(
  //     "dusty.bamana@isg.fr",
  //     "Next Pizza / Ваш заказ успешно оформлен 🎉",

  //     SendResetPasswordEmail({ resetPasswordCode })
  //   );

  const response = await sendEmail(
    "dusty.bamana@isg.fr",
    "Nouvelle demande de prestation de service  🎉",
    ServiceRequestEmail({ ...values })
  );

  return response;
};
