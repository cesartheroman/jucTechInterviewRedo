import {
  isNameValid,
  isDateValid,
  isEmailValid,
  isFormValid,
} from "./validators.js";

const disableSubmitButton = (value) =>
  (document.querySelector(".submit-button").disabled = value);

export const handleChange = (e) => {
  const eventType = e.target.id;
  const elementValue = e.target.value;

  if (eventType === "name" && !isNameValid(elementValue)) {
    disableSubmitButton(true);
  } else if (eventType === "email" && !isEmailValid(elementValue)) {
    disableSubmitButton(true);
  } else if (eventType === "bday" && !isDateValid(elementValue.split("-"))) {
    disableSubmitButton(true);
  } else {
    disableSubmitButton(false);
  }
};

export const handleClear = (e, formFields) => {
  e.preventDefault();
  const [nameField, emailField, bdayField, emailConsentCheckbox] = formFields;

  nameField.value = "";
  emailField.value = "";
  bdayField.value = "";
  emailConsentCheckbox.checked = false;
};

export const handleSubmit = (e, formFields) => {
  e.preventDefault();

  try {
    const [nameField, emailField, bdayField, emailConsentCheckbox] = formFields;
    const name = nameField.value;
    const email = emailField.value;
    const date = bdayField.value.split("-");
    const checkBoxMarked = emailConsentCheckbox.checked;

    if (isFormValid(name, email, date, checkBoxMarked)) {
      const user = {
        id: 1,
        name,
        email,
        birthDate: date.join("-"),
        emailConsent: checkBoxMarked,
      };

      disableSubmitButton(false);
      handleClear(e, formFields);
      alert("Form successfully submitted!");
    }
  } catch (err) {
    disableSubmitButton(true);
    alert(err.message);
  }
};
