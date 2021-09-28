const cnToggleIcon = document.querySelector(".channel-toggle-btn");
const cnContent = document.querySelector(".channel-component");
const frToggleIcon = document.querySelector(".friends-toggle-btn");
const frContent = document.querySelector(".friends-component");

//friend.html - 친구 토글
function closeFriends() {
  frContent.classList.toggle("close");
  frToggleIcon.classList.toggle("closeBtn");
}
frToggleIcon.addEventListener("click", closeFriends);

//friend.html - 채널 토글
function closeChannel() {
  cnContent.classList.toggle("close");
  cnToggleIcon.classList.toggle("closeBtn");
}
cnToggleIcon.addEventListener("click", closeChannel);
