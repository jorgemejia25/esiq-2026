const GALA_PAYMENTS_OPEN_DATE = "2026-08-24";
const TIME_ZONE = "America/Guatemala";

export function isGalaPaymentOpen(now: Date = new Date()): boolean {
  const today = now.toLocaleDateString("en-CA", { timeZone: TIME_ZONE });
  return today >= GALA_PAYMENTS_OPEN_DATE;
}
