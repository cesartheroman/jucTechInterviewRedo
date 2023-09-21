(function () {
  const nameField = document.querySelector("#name");
  const emailField = document.querySelector("#email");
  const bdayField = document.querySelector("#bday");
  const emailConsentField = document.querySelector("#email-consent");
  const clearButton = document.querySelector(".clear-button");
  const submitButton = document.querySelector(".submit-button");

  const isDateValid = (date) => {
    if (date.length === 1) return true;

    const [year, month, day] = date;

    if (year < "1000" || year > "3000") return false;
    if (month < "01" || month > "12") return false;
    if (day < "01" || day > "31") return false;

    return true;
  };

  const isEmailValid = (email) => {
    console.log("email: ", email);
    let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(email);
  };

  const isFormValid = (e) => {
    const eventType = e.target.id;
    const date = bdayField.value.split("-");
    const email = emailField.value;
    const checkBoxMarked = emailConsentField.checked;

    if (nameField.value === "") {
      throw new Error("Please enter a name.");
    }

    if (!isEmailValid(email)) {
      throw new Error("Please enter a valid email address.");
    }

    if (!isDateValid(date)) {
      throw new Error("Please enter a valid date.");
    }

    if (!checkBoxMarked) {
      throw new Error("Must check email contact agreement box.");
    }

    return true;
  };

  const handleClear = (e) => {
    e.preventDefault();

    nameField.value = "";
    emailField.value = "";
    bdayField.value = "";
    emailConsentField.checked = false;
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    try {
      if (isFormValid(e)) {
        submitButton.disabled = false;
        console.log("form successfully submitted!");
      }
    } catch (err) {
      submitButton.disabled = true;
      alert(err.message);
    }
  };

  clearButton.addEventListener("click", (e) => handleClear(e));
  submitButton.addEventListener("click", (e) => handleSumbit(e));
})();
