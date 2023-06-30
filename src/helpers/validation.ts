const checkInputValidity = (inputElement: HTMLInputElement) => {
  const { value } = inputElement;
  const pattern = inputElement.getAttribute('pattern');
  console.log(pattern);
  if (!pattern) {
    return true;
  }
  const regexp = new RegExp(pattern);
  return regexp.test(value);
};

export const markInputError = (
  inputElement: HTMLInputElement,
  isValid: boolean,
  inputErrorClass: string,
) => {
  if (!isValid) {
    inputElement.classList.add(inputErrorClass);
  } else inputElement.classList.remove(inputErrorClass);
};

export const validateInput = (inputElement: HTMLInputElement, inputErrorClass: string) => {
  const isValid = checkInputValidity(inputElement);
  markInputError(inputElement, isValid, inputErrorClass);
  return isValid;
};

export const validateForm = (form: HTMLFormElement, inputErrorClass: string) => {
  const formState: Record<string, Record<string, string | boolean>> = {};

  const inputList = Array.from(form.querySelectorAll('input'));
  inputList.forEach((input) => {
    const name = input.getAttribute('name')!;
    const { value } = input;

    const isValid = validateInput(input, inputErrorClass);

    formState[name] = { value, isValid };
  });
  const isFormValid = Object.values(formState).every(({ isValid }) => isValid);
  const formData = Object.entries(formState).reduce(
    (acc, [key, { value }]) => ({ ...acc, [key]: value }),
    {},
  );
  return { isFormValid, formData };
};
