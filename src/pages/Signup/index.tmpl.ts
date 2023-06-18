const signupTemplate = `<main class="signup">
  <div class="signup__container">
    <h1 class="signup__header">Регистрация</h1>
    <form class="signup__form">
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
  </div>
</main>`;

export default signupTemplate;
