const template = `
  <div class="chat__image-container">
  <image src={{chatImage}} alt="иконка чата" />
  </div>
  <div class="chat__content">
  <div class="chat__text-container">
  <p class="chat__username">{{username}}</p>
  <p class="chat__last-message">{{lastMessage}}</p>
  </div>
  <div class="chat__status-container">
  <p class="chat__timestamp">{{timestamp}}</p>
  <div class="chat__message-counter-wrapper">
  <img class="chat__messgae-counter-image" src={{messageCounterImage}} />
  <p class="chat__message-counter-text">{{messageCounter}}</p>

  </div>
  </div>
  </div>
  </div>
  `;

export default template;
