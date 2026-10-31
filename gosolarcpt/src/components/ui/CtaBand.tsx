import Link from "next/link";

export default function CtaBand({ title = "Ready to compare real quotes?", body = "Free, no obligation, and takes about a minute." }: { title?: string; body?: string }) {
  return (
    <section className="bg-teal-900 text-white">
      <div className="wrap py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <p className="text-teal-100 mt-1">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact/" className="btn-primary">Get free quotes</Link>
          <Link href="/" className="btn-ghost">Try the calculator</Link>
        </div>
      </div>
    </section>
  );
}
