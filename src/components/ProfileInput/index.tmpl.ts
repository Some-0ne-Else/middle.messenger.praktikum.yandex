const profileInputTemplate = `
  <label for={{ name }} class="profile-input__label" {{disabled}}>{{ label }}</label>
  <input class="profile-input__input" id={{ name }} name={{ name }} type={{ inputType }} {{disabled}} value={{value}} />
`;

export default profileInputTemplate;
