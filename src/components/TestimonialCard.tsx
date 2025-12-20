export default function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <p className="italic text-gray-700 mb-4">"{text}"</p>
      <p className="font-bold text-green-600">- {name}</p>
    </div>
  );
}