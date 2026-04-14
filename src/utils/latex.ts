export function normalizeTurkishLatex(input: string): string {
  if (!input) return input;

  let s = input;

  // Normalize doubled backslashes that commonly appear after YAML escaping
  // e.g. "O\\ugulcan" becomes "O\ugulcan" for easier matching.
  s = s.replace(/\\\\/g, '\\');

  // BibTeX/LaTeX accent macros commonly seen in Turkish names.
  // \u{g} / \ug  -> ğ, \u{G} / \uG -> Ğ
  s = s.replace(/\\u\{g\}/g, 'ğ');
  s = s.replace(/\\u\{G\}/g, 'Ğ');
  s = s.replace(/\\ug/g, 'ğ');
  s = s.replace(/\\uG/g, 'Ğ');

  // Dotted capital I: \.I or \.{I} -> İ
  s = s.replace(/\\\.\{I\}/g, 'İ');
  s = s.replace(/\\\.I/g, 'İ');

  // Fall back: remove remaining braces that sometimes leak through.
  s = s.replace(/[{}]/g, '');

  return s;
}

