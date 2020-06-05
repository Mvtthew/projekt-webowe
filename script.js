const onLoginBtnToggle = () => {
	loginPanel.classList.toggle('show');

};
const loginPanel = document.querySelector("aside");
const loginBtn = document.getElementById("login");
const loginCloseBtn = document.querySelector(".hide-btn");

loginBtn.addEventListener('click', onLoginBtnToggle);
loginCloseBtn.addEventListener('click', onLoginBtnToggle);
