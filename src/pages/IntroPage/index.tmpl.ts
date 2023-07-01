const template = `
  <h1 class="not-found__header">Навигация</h1>
<nav>
<ul>
<li>
<a href="{{loginUrl}}">Логин</a>
</li>
<li>
<a href="{{signupUrl}}">Регистрация</a>
</li>
<li>
<a href="{{profileUrl}}">Отображение профиля</a>
</li>
<li>
<a href="{{profileEditUrl}}">Редактирование профиля</a>
</li>
<li>
<a href="{{profilePasswordUrl}}">Смена пароля</a>
</li>
<li>
<a href="{{internalErrorUrl}}">Внутренняя ошибка сервера</a>
</li>
<li>
<a href="{{notFoundUrl}}">Страница не найдена</a>
</li>
<li>
<a href="{{chatsUrl}}">Заглушка страницы чатов</a>
</li>
</ul>
</nav>`;

export default template;
