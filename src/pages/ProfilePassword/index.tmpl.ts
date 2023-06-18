const profilePasswordTemplate = `<main class="profile-password">
  <aside class="profile-password__aside">
  <button class="profile-password__back-button"><img src={{backImageUrl}} /></button>
  </aside>
<div class="profile-password__content">
  <div class="profile-password__container">
<label for="avatar" class="profile-password__avatar-label"><img src={{emptyAvatarUrl}} /></label>
<input class="profile-password__avatar-input" class="my" id="avatar" name="avatar" type="file"/>
<form class="profile-password__form">
{{{profileOldPassword}}}
{{{profileNewPassword}}}
{{{profileRepeatNewPassword}}}
<div class="profile-password__actions">
{{{profileSaveButton}}}
</div>
</form>
  </div>
</div>
</main>`;
export default profilePasswordTemplate;
