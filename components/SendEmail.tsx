"use client";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

const SendEmail = () => {
  const sendEmail = () => {
    const emailAddress = "utepovbekasyl@gmail.com";

    const mailtoLink = `mailto:${emailAddress}?`;
    window.location.href = mailtoLink;
  };

  return (
    <Button
      onClick={sendEmail}
      size={"lg"}
      className="bg-[#106ae8] rounded-xl gap-x-2"
    >
      <Mail />
      Get in touch
    </Button>
  );
};

export default SendEmail;
