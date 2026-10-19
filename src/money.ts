export type Line = { amount: number };

const CURRENCY_DECIMALS: Record<string, number> = {
  KWD: 3,
  BHD: 3,
  JOD: 3,
  OMR: 3,
  TND: 3,
};

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  const decimals = CURRENCY_DECIMALS[currency] ?? 2;
  return sum.toFixed(decimals);
}
