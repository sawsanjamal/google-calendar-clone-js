import { addMonths } from "date-fns";
import renderMonth from "./renderMonth.js";
let selectedMonth = Date.now();
document
  .querySelector("[data-next-month-btn]")
  .addEventListener("click", () => {
    selectedMonth = addMonths(selectedMonth, 1);
    renderMonth(selectedMonth);
  });
document
  .querySelector("[data-prev-month-btn]")
  .addEventListener("click", () => {
    selectedMonth = addMonths(selectedMonth, -1);
    renderMonth(selectedMonth);
  });
document.querySelector("[data-today-btn]").addEventListener("click", () => {
  selectedMonth = Date.now();
  renderMonth(selectedMonth);
});

renderMonth(Date.now());
