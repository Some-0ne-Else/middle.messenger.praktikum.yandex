const signupTemplate = `
  <div class="signup__container">
    <h1 class="signup__header">Регистрация</h1>
    <form class="signup__form" novalidate targetForEvents={{ targetForEvents }}>
{{{emailInput}}}
{{{loginInput}}}
{{{nameInput}}}
{{{surnameInput}}}
{{{phoneInput}}}
{{{passwordInput}}}
{{{repeatPasswordInput}}}
{{{signupButton}}}
{{{signupLink}}}
    </form>
  </div>`;

export default signupTemplate;
