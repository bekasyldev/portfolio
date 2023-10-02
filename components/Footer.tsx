export default function Footer() {
  return (
    <footer className="py-10 mb-10 xl:my-0 sm:mt-20 text-center text-gray-500 border-t w-full">
      <small className="mb-2 block text-xs">
        &copy; 2030 Ricardo. All rights reserved.
      </small>
      <p className="text-xs flex flex-wrap items-center justify-center">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
