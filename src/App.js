import { handleChange, handleClear, handleSubmit } from "./helpers/handlers.js";

const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const bdayField = document.querySelector("#bday");
const emailConsentCheckbox = document.querySelector("#email-consent");
const formFields = [nameField, emailField, bdayField, emailConsentCheckbox];

const clearButton = document.querySelector(".clear-button");
const submitButton = document.querySelector(".submit-button");

formFields.forEach((field) => {
  field.addEventListener("change", (e) => handleChange(e));
});
clearButton.addEventListener("click", (e) => handleClear(e, formFields));
submitButton.addEventListener("click", (e) => handleSubmit(e, formFields));
