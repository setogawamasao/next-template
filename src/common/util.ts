import { DateTime } from "luxon";
export const convertDate = (stringDate: string): string => {
  return DateTime.fromISO(stringDate)
    .setZone("Asia/Tokyo")
    .toFormat("yyyy/MM/dd");
};
