const inputTemplate = `
  <label for={{ name }} class="input__label">{{ label }}</label>
  <input class="input__input"
   id={{ name }} name={{ name }}
   type={{ inputType }}
   targetForEvents={{ targetForEvents }}
   pattern={{ pattern }} />
   <p class="input__error-text">{{errorText}}</p>
   `;

export default inputTemplate;
