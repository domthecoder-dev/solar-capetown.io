import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-5 flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          GoSolarCPT
        </Link>
        <div className="flex gap-6 mt-4 md:mt-0 text-lg font-medium">
          <Link href="/" className="hover:text-green-600 transition">Home</Link>
          <Link href="/how-it-works" className="hover:text-green-600 transition">How It Works</Link>
          <Link href="/pricing" className="hover:text-green-600 transition">Pricing</Link>
          <Link href="/contact" className="hover:text-green-600 transition">Contact</Link>
        </div>
      </nav>
    </header>
  );
}