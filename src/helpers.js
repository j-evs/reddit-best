const SELECTED_LOCALE = "nl-NL";

export const convertNumberToLocaleString = number =>
  number.toLocaleString(SELECTED_LOCALE);
