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

const toSubscript = (digits: string): string =>
  [...digits].map(d => subscriptMap[d] || d).join('');

export const formatSubzeroPrice = (input: string | number): string => {
  const num = typeof input === "string" ? parseFloat(input) : input;

  if (isNaN(num)) return "$0";

  // Handle big numbers as usual
  if (num >= 1) return `$${num.toFixed(2)}`;

  // Handle small values with subscripted tail
  const [intPart, decPart = ""] = num.toString().split(".");
  
  if (!decPart) return `$${num}`;

  // Decide how many digits to show normally vs subscripted
  const normalDigits = decPart.slice(0, 2);
  const subscriptDigits = decPart.slice(2, 7); // show up to 5 as subscript

  return `$${intPart}.${normalDigits}${toSubscript(subscriptDigits)}`;
};
