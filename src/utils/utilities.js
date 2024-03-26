import { format, parse } from "date-fns";

export const epochToDateTimeZone = (epoch, timezone) => {
  const date = new Date(epoch * 1000);
  const formatted = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    hourCycle: "h12",
    timeZone: timezone,
  }).format(date);
  return formatted.split(" at ");
};

export const everyHour = (timeStr) => {
  const formattedTime = format(parse(timeStr, "HH:mm", new Date()), "hh:mm aa");
  return formattedTime;
};

export const everyDay = (dateStr) => {
  const formattedDate = format(
    parse(dateStr, "yyyy-MM-dd", new Date()),
    "do MMM"
  );
  return formattedDate;
};
