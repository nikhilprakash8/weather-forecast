import { format, parse } from "date-fns";
import { enUS, de } from "date-fns/locale";

const supportedLocales = [enUS, de];

const findLocale = (code?: string) => (locale: Locale) => code === locale.code;
const getLocale = (code?: string): Locale =>
  supportedLocales.find(findLocale(code)) || enUS;

/**
 * Formatting the time to a localized format.
 *
 * @param {number|Date} dateInput
 * @param {Locale} userLocale
 */
export function dateFormat(
  dateInput: number | Date,
  userLocale?: string
): string {
  return format(dateInput, "cccc, P", { locale: getLocale(userLocale) });
}

/**
 * Formatting the time to a localized format.
 *
 * @param {number} dateInput
 * @param {Locale} userLocale
 */
export function timeFormat(dateInput: string, userLocale?: string): string {
  return format(parse(dateInput, "HH:mm", 0), "p", {
    locale: getLocale(userLocale),
  });
}