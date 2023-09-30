"use client";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const sendEmail = () => {
    const emailAddress = "utepovbekasyl@example.com";

    const mailtoLink = `mailto:${emailAddress}?`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="mb-5">
      <div className="flex items-center justify-center flex-col gap-16">
        <h3 className="text-5xl font-bold text-center tracking-wide">
          Let's built something <br /> great together
        </h3>
        <Button
          onClick={sendEmail}
          size={"lg"}
          className="bg-[#106ae8] w-[200px] text-md rounded-xl hover:bg-blue-400 gap-x-3"
        >
          <Mail />
          Get in touch
        </Button>
      </div>
    </section>
  );
};

export default Contact;
