const profileEditTemplate = `
{{{profileSidebar}}}
<div class="profile-edit__content">
  <div class="profile-edit__container">
    <label for="avatar" class="profile-edit__avatar-label"><img src={{emptyAvatarUrl}} /></label>
    <input class="profile-edit__avatar-input" class="my" id="avatar" name="avatar" type="file"/>
  <form class="profile-edit__form" novalidate targetForEvents={{ targetForEvents }} >
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
`;

export default profileEditTemplate;
