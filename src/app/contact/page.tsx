import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="py-24 container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-12">Get Your Free Solar Quotes</h1>
      <ContactForm />
      <div className="text-center mt-12 text-xl">
        <p>Or reach us directly:</p>
        <p className="font-bold text-3xl text-green-600 mt-4">WhatsApp: 082 784 1234</p>
        <p className="mt-2">We reply in minutes!</p>
      </div>
    </section>
  );
}