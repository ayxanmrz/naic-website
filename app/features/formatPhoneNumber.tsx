export default function formatAzerbaijanPhone(value: string): string {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("994")) {
    digits = digits.slice(3);
  }

  digits = digits.slice(0, 9);

  let formatted = "+994";

  if (digits.length > 0) {
    formatted += " " + digits.slice(0, 2);
  }
  if (digits.length > 2) {
    formatted += " " + digits.slice(2, 5);
  }
  if (digits.length > 5) {
    formatted += " " + digits.slice(5, 7);
  }
  if (digits.length > 7) {
    formatted += " " + digits.slice(7, 9);
  }

  return formatted;
}
