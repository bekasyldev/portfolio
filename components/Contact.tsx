import SendEmail from "./SendEmail";

const Contact = () => {
  return (
    <section id="contact" className="mb-5 my-40 md:my-10 relative">
      <div className="flex items-center justify-center flex-col gap-10">
        <h3 className="text-5xl font-bold text-center tracking-wide">
          Let&apos;s built something <br /> great together
        </h3>
        <SendEmail />
      </div>
    </section>
  );
};

export default Contact;
