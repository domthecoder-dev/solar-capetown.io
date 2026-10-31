"use client";

import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/constants";
import { track } from "@/lib/analytics";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(SITE.whatsappText)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-wa"
      aria-label="Chat on WhatsApp"
      onClick={() => track("whatsapp_click")}
    >
      <FaWhatsapp />
    </a>
  );
}
