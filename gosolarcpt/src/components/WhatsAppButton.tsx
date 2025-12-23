import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27827841234?text=Hi!%20I%20want%20a%20free%20solar%20quote%20for%20my%20home%20in%20Cape%20Town"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-wa"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}