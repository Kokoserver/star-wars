import { MONTH_NAMES } from "../services/months";

const formatDate = (date) => {
  // const dateObj = new Date(date);

  // const month = MONTH_NAMES[dateObj.getMonth()];
  // const day = dateObj.getDate();
  // const year = dateObj.getFullYear();

  // return `${month} ${day}, ${year}`;

  if (!date) {
    throw new Error("Missing required parameter");
  }

  const [year, month, day] = date.split("-");
  if (
    !year ||
    !month ||
    !day ||
    year.length < 4 ||
    parseInt(month) < 1 ||
    parseInt(month) > 12
  ) {
    throw new Error("Parameter format must be YYYY-MM-DD");
  }
  return `${MONTH_NAMES[Number(month) - 1]} ${day}, ${year}`;
};

export default formatDate;
