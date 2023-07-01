const inputTemplate = `
  <label for={{ name }} class="input__label">{{ label }}</label>
  <input class="input__input"
   id={{ name }} name={{ name }}
   type={{ inputType }}
   targetForEvents={{ targetForEvents }}
   pattern={{ pattern }} />`;

export default inputTemplate;
