import { format } from "date-fns";

export const epochToDateTime = (epoch) => {
  const date = new Date(epoch * 1000);
  return format(date, "dd-MM-yyyy hh:mm:ss a");
};

export const epochToTime = (epoch) => {
  const date = new Date(epoch * 1000);
  return format(date, "hh:mm a");
};

export const epochToDayMonth = (epoch) => {
  const date = new Date(epoch * 1000);
  return format(date, "do MMM");
};
