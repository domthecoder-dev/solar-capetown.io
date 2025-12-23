import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-5 flex flex-wrap justify-between items-center">
        {/* Logo – smaller, cropped to fit header height */}
        <Link href="/" className="flex items-center">
          <Image
            src="/GSC-logo.svg"
            alt="GoSolarCPT Logo"
            width={140}              // Adjust this number to make logo wider/narrower
            height={90}              // Fixed height to match header (~py-5 = 40px + padding)
            className="h-10 w-auto md:h-22 object-contain object-center drop-shadow-sm"
            priority                 // Loads fast on initial page view
          />
        </Link>

        {/* Navigation links */}
        <div className="flex flex-wrap gap-6 mt-4 md:mt-0 text-lg font-medium">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="hover:text-green-600 transition"
          >
            How It Works
          </Link>
          <Link href="/pricing" className="hover:text-green-600 transition">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-green-600 transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}