const profileEditTemplate = `<main class="profile-edit">
  <aside class="profile-edit__aside">
  <button class="profile-edit__back-button"><img src={{backImageUrl}} /></button>
  </aside>
<div class="profile-edit__content">
  <div class="profile-edit__container">
<label for="avatar" class="profile-edit__avatar-label"><img src={{emptyAvatarUrl}} /></label>
<input class="profile-edit__avatar-input" class="my" id="avatar" name="avatar" type="file"/>
<form class="profile-edit__form">
{{{profileEmail}}}
{{{profileLogin}}}
{{{profileName}}}
{{{profileSurname}}}
{{{profileDisplayName}}}
{{{profilePhone}}}
<div class="profile-edit__actions">
{{{profileSaveButton}}}
</div>
</form>
  </div>
</div>
</main>`;

export default profileEditTemplate;
