const subscriptMap: Record<string, string> = {
  '0': '₀',
  '1': '₁',
  '2': '₂',
  '3': '₃',
  '4': '₄',
  '5': '₅',
  '6': '₆',
  '7': '₇',
  '8': '₈',
  '9': '₉',
  '.': '.'
};

const toSubscript = (digits: string): string => [...digits].map(d => subscriptMap[d] || d).join('');

export const formatSubzeroPrice = (num: number): string => {
  if (isNaN(num)) return "$0";

  if (num >= 1) return `$${num.toFixed(2)}`;

  const [intPart, decPart = ""] = num.toString().split(".");

  if (!decPart) return `$${num}`;

  const normalDigits = decPart.slice(0, 2);
  const subscriptDigits = decPart.slice(2, 7);

  return `$${intPart}.${normalDigits}${toSubscript(subscriptDigits)}`;
};
