"use client";

export default function CookieSettingsLink() {
  return (
    <button type="button" className="hover:text-white text-left" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>
      Cookie settings
    </button>
  );
}
