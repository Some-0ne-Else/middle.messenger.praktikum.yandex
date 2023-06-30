export const checkInputValidity = (inputElement: HTMLInputElement) => {
  const { value } = inputElement;
  const pattern = inputElement.getAttribute('pattern');
  console.log(pattern);
  if (!pattern) {
    return true;
  }
  const regexp = new RegExp(pattern);
  return regexp.test(value);
};

export const validateForm = (form: HTMLFormElement) => {
  const formState: Record<string, Record<string, string | boolean>> = {};

  const inputList = Array.from(form.querySelectorAll('input'));
  inputList.forEach((input) => {
    const name = input.getAttribute('name')!;
    const { value } = input;

    formState[name] = { value, isValid: checkInputValidity(input) };
  });
  const isFormValid = Object.values(formState).every(({ isValid }) => isValid);
  const formData = Object.entries(formState).reduce(
    (acc, [key, { value }]) => ({ ...acc, [key]: value }),
    {},
  );
  return { isFormValid, formData };
};
