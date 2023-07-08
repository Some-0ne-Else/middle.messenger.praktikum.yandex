const loginTemplate = `
  <div class="login__container">
    <h1 class="login__header">Вход</h1>
    <form class="login__form" novalidate targetForEvents={{ targetForEvents }}>
    {{{loginInput}}}
    {{{passwordInput}}}
    {{{loginButton}}}
    {{{loginLink}}}
    </form>
  </div>
`;

export default loginTemplate;
