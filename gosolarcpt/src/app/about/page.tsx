import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About GoSolarCPT",
  description: "GoSolarCPT is a Cape Town solar lead-matching service. Here is how we work and how we are paid.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <article className="container mx-auto px-4 py-14 max-w-3xl prose-page">
      <h1 className="text-4xl font-extrabold">About GoSolarCPT</h1>
      <p>GoSolarCPT connects Cape Town homeowners and businesses with solar installers. We are not an installer and we do not supply or guarantee installations.</p>
      <h2>How we are paid</h2>
      <p>Installers pay us for qualified introductions. It is free for you and you are never obliged to accept a quote.</p>
      <h2>Choosing an installer</h2>
      <p>Always check that your installer can issue an electrical Certificate of Compliance, handle City SSEG registration and provide written warranties. We recommend comparing all quotes.</p>
      <p>{/* TODO(owner): add registered company name, registration number and physical address */}</p>
    </article>
  );
}
