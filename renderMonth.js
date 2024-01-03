import {
  endOfMonth,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  format,
} from "date-fns";
import createDayElement from "./createDayElement";

const daysContainer = document.querySelector("[data-calendar-days]");

export default function renderMonth(monthDate) {
  document.querySelector("[data-month-title]").textContent = format(
    monthDate,
    "MMMM yyyy"
  );
  const dayElements = getCalendarDates(monthDate).map((date, index) => {
    return createDayElement(date, {
      isCurrentMonth: isSameMonth(monthDate, date),
      isCurrentDay: isSameDay(Date.now(), date),
      showWeekName: index < 7,
    });
  });
  daysContainer.innerHTML = "";
  dayElements.forEach((element) => daysContainer.append(element));
}

function getCalendarDates(date) {
  const firstWeekStart = startOfWeek(startOfMonth(date), { weekStartsOn: 1 });
  const lastWeekEnd = endOfWeek(endOfMonth(date), { weekStartsOn: 1 });

  return eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd });
}
