import { format } from "date-fns";

const formatDate = (date) => {
  return format(date, "d / M / yyyy");
};

export { formatDate };
