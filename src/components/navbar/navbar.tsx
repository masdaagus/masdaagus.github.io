'use client'
import { useState } from "react";
import Link from "next/link";

const navItems = ["Skills", "Experience", "Projects", "About", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#fafaf8]/92 backdrop-blur-md border-b border-zinc-200">
      <div className="mx-auto max-w-3xl px-6 flex items-center justify-between h-[52px]">
        <Link href="/" className="font-serif text-[17px] text-[#111110] no-underline tracking-tight">
          Masda Agus
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-7 list-none">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[13px] text-zinc-500 no-underline tracking-wide hover:text-[#111110] transition-colors duration-150"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-[4px] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-5 bg-zinc-500 transition-transform duration-200 ${open ? "rotate-45 translate-y-[5.5px]" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-zinc-500 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-zinc-500 transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-200 ${
          open ? "max-h-[300px] border-t border-zinc-200" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 list-none bg-[#fafaf8]">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-[14px] text-zinc-500 no-underline hover:text-[#111110] transition-colors duration-150"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
