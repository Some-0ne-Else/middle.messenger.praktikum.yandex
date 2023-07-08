const chatListTemplate = `
  <div class="chats__sidebar">
  <a href="/profile" class="chats__profile-link">Профиль ></a>
  <input class="chats__search" placeholder="Поиск" />
  <div class="chats__list">
  {{{chatInstance}}}
  {{{chatInstance2}}}
  </div>
  </div>
  {{{chatContent}}}
`;

export default chatListTemplate;
