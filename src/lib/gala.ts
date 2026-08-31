const GALA_PAYMENTS_OPEN_AT = new Date("2026-08-31T00:00:00-06:00").getTime();

export function isGalaPaymentOpen(now: Date = new Date()): boolean {
  return now.getTime() >= GALA_PAYMENTS_OPEN_AT;
}
