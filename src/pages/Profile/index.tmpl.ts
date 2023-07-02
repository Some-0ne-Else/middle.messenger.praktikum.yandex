const profileTemplate = `
<aside class="profile-sidebar">
{{{profileSidebarButton}}}
</aside>
<div class="profile__content">
  <div class="profile__container">
<label for="avatar" class="profile__avatar-label"><img src={{emptyAvatarUrl}} /></label>
<input class="profile__avatar-input" id="avatar" name="avatar" type="file"/>
<h1 class="profile__header">{{profileHeader}}</h1>
<form class="profile__form">
{{{profileEmail}}}
{{{profileLogin}}}
{{{profileName}}}
{{{profileSurname}}}
{{{profileDisplayName}}}
{{{profilePhone}}}
<div class="profile__links">
<div class="profile__change-data">
{{{changeDataLink}}}
</div>
<div class="profile__change-data">
{{{changePasswordLink}}}
</div>
<div class="profile__logout">
{{{logoutLink}}}
</div>
</div>
</form>
  </div>
</div>`;
export default profileTemplate;
