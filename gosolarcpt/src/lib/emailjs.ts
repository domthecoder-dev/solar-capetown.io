// EmailJS config. Public keys are safe client-side; restrict allowed domains in the EmailJS dashboard.
export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_03d40fs";
export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_oafbbpb";
export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "3AQTcP4wujQ23AfJS";
