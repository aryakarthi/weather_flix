import { format } from "date-fns";

export const epochToDateTime = (epoch) => {
  const date = new Date(epoch * 1000);
  return format(date, "dd-MM-yyyy hh:mm:ss a");
};
