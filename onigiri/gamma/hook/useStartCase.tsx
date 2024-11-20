/**
 * Start Case Hook
 *
 * Convert an `input` string to Start Case.
 * Reference: https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage
 */

export function useStartCase(input: string) {
  return input.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}
