import { format } from "date-fns";

const dayTemplate = document.getElementById("day-template");
export default function createDayElement(date, options = {}) {
  const {
    isCurrentMonth = true,
    isCurrentDay = false,
    showWeekName = false,
  } = options;
  const dayElement = dayTemplate.content
    .cloneNode(true)
    .querySelector("[data-date-wrapper]");

  if (!isCurrentMonth) {
    dayElement.classList.add("non-month-day");
  }
  if (showWeekName) {
    dayElement.querySelector("[data-week-name]").textContent = format(
      date,
      "E"
    );
  }

  const dayNumberElement = dayElement.querySelector("[data-day-number]");
  dayNumberElement.textContent = date.getDate();
  if (isCurrentDay) {
    dayNumberElement.classList.add("active");
  }

  return dayElement;
}
