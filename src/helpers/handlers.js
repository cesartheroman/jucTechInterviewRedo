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

export const handleSubmit = async (e, formFields) => {
  e.preventDefault();

  try {
    const [nameField, emailField, bdayField, emailConsentCheckbox] = formFields;
    const name = nameField.value;
    const email = emailField.value;
    const date = bdayField.value.split("-");
    const checkBoxMarked = emailConsentCheckbox.checked;
    const URL = `https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users`;

    if (isFormValid(name, email, date, checkBoxMarked)) {
      const postBody = {
        id: 1,
        name,
        email,
        birthDate: date.join("-"),
        emailConsent: checkBoxMarked,
      };

      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(postBody),
      });
      const result = await response.json();

      disableSubmitButton(false);
      handleClear(e, formFields);
      alert("Form successfully submitted!");
    }
  } catch (err) {
    disableSubmitButton(true);
    alert(err.message);
  }
};
