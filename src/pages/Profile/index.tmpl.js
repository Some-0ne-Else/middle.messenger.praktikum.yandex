export const profileTemplate = `<main class="profile">
  <aside class="profile__aside">
  <button class="profile__back-button"><img src={{backImageUrl}} /></button>
  </aside>
<div class="profile__content">
  <div class="profile__container">
<label for="avatar" class="profile__avatar-label"><img src={{emptyAvatarUrl}} /></label>
<input class="profile__avatar-input" class="my" id="avatar" name="avatar" type="file"/>
<form class="profile__form">
{{{profileEmail}}}
</form>
  </div>
</div>
</main>`
