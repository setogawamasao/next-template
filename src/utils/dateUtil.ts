import { DateTime } from "luxon";
export const convertDateToString = (date: Date): string => {
  return DateTime.fromJSDate(date).setZone("Asia/Tokyo").toFormat("yyyy/MM/dd");
};

export const isDateType = (
  value: string | Date | number | boolean,
): boolean => {
  return Object.prototype.toString.call(value) === "[object Date]";
};
