export const isNameValid = (name) => {
  if (name === "" || name === " ") {
    return false;
  }

  return true;
};

export const isDateValid = (date) => {
  if (date.length === 1) return true;

  let [year, month, day] = date;
  year = Number(year);
  month = Number(month);
  day = Number(day);

  if (year < 1000 || year > 3000) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;

  return true;
};

export const isEmailValid = (email) => {
  let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return res.test(email);
};

export const isFormValid = (name, email, date, checkBoxMarked) => {
  if (!isNameValid(name)) {
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
