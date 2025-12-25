"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react (once)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center relative">
        {/* Logo – centered on mobile, left on desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/GSC-logo.svg"
              alt="GoSolarCPT Logo"
              width={140}
              height={90}
              className="h-10 w-auto md:h-12 object-contain drop-shadow-sm"
              priority
            />
          </Link>
        </div>

        {/* Hamburger – visible only on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 text-gray-800 hover:text-green-600 transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Nav – hidden on mobile */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-green-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Slide-in Menu – from right, 80% width */}
        <div
          className={`fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center pt-24 space-y-8 text-xl font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="hover:text-green-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Overlay – closes menu when clicked */}
        {isOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </nav>
    </header>
  );
}