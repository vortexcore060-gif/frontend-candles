const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
