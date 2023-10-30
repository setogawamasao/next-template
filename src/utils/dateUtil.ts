import { DateTime } from "luxon";
export const convertDateToString = (date: Date): string => {
  return DateTime.fromJSDate(date).setZone("Asia/Tokyo").toFormat("yyyy/MM/dd");
};
