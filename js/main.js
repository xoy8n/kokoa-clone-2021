//Global variables
const clock = document.querySelector("span#clock");
const cnToggleIcon = document.querySelector(".channel-toggle-btn");
const cnContent = document.querySelector(".channel-component");
const frToggleIcon = document.querySelector(".friends-toggle-btn");
const frContent = document.querySelector(".friends-component");

// 시계 기능
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}
getClock();
setInterval(getClock, 1000);

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
