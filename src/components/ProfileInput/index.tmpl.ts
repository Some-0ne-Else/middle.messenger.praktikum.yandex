const profileInputTemplate = `
<div class="profile-input {{ className }}">
  <label for={{ name }} class="profile-input__label" {{disabled}}>{{ label }}</label>
  <input class="profile-input__input" id={{ name }} name={{ name }} type={{ type }} {{disabled}} value={{value}} />
</div>`;

export default profileInputTemplate;
