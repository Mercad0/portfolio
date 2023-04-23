import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-600 py-4 rounded-t-lg">
      <div className="container mx-auto text-center">
        <p className="text-md text-white font-medium">
          Copyright &copy;{currentYear} Abimael Mercado
        </p>
        <p className="text-sm text-gray-300 font-light my-2">
          Built with Next.js, Tailwind CSS, and TypeScript
        </p>
        <a
          href="https://github.com/Mercad0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 font-light underline hover:text-white"
        >
          View my GitHub
        </a>
      </div>
    </footer>
  );
}
