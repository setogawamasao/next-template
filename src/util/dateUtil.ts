import { DateTime } from "luxon";
export const convertDate = (date: Date): string => {
  return DateTime.fromJSDate(date).setZone("Asia/Tokyo").toFormat("yyyy/MM/dd");
};
