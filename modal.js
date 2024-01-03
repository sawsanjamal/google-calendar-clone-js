import { format } from "date-fns";

const modal = document.querySelector("[data-modal]");
const modalBody = document.querySelector("[data-modal-body]");
const eventModalTemplate = document.getElementById("event-form-template");

export function openAddEventModal(date) {
  const formModalBody = eventModalTemplate.content.cloneNode(true);
  openModal(getEventFormModalBody({ date }));
}
export function openEditEventModal(event) {
  openModal(getEventFormModalBody(event));
}
function getEventFormModalBody(event, deleteCallback) {
  console.log(event);
  const formModalBody = eventModalTemplate.content.cloneNode(true);
  const isNewEvent = event.id == null;
  formModalBody.querySelector("[data-title]").textContent = isNewEvent
    ? "Add Event"
    : "Edit Event";

  formModalBody.querySelector("[data-date]").textContent = format(
    event.date,
    "M/d/yyy"
  );

  const form = formModalBody.querySelector("[data-form]");
  form.querySelector("[data-save-btn]").textContent = isNewEvent
    ? "Add"
    : "Update";
  const deleteButton = form.querySelector("[data-delete-btn]");
  if (isNewEvent) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener("click", () => {
      deleteCallback(event);
      closeModal();
    });
  }
  return formModalBody;
}
function openModal(bodyContents) {
  modalBody.innerHTML = "";
  modalBody.append(bodyContents);
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}
