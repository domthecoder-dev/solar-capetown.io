export default function HowItWorks() {
  return (
    <section className="py-24 container mx-auto px-4 text-center">
      <h1 className="text-5xl font-bold mb-16">How It Works – 3 Simple Steps</h1>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <div className="text-6xl font-bold text-green-600 mb-4">1</div>
          <h3 className="text-2xl font-bold mb-4">Fill Out the Form</h3>
          <p className="text-lg">Takes less than 60 seconds</p>
        </div>
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <div className="text-6xl font-bold text-green-600 mb-4">2</div>
          <h3 className="text-2xl font-bold mb-4">We Match You With 3 Vetted Installers</h3>
          <p className="text-lg">Only the best Cape Town companies</p>
        </div>
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <div className="text-6xl font-bold text-green-600 mb-4">3</div>
          <h3 className="text-2xl font-bold mb-4">Choose the Best Quote</h3>
          <p className="text-lg">Zero cost or obligation to you</p>
        </div>
      </div>
    </section>
  );
}