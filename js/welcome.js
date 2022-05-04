const welcomeNameForm = document.querySelector(".welcome_name");
const welcomeNameInput = document.querySelector(".welcome_name_text");

function onLogin(event) {
  event.preventDefault();
  const userName = welcomeNameInput.value;
  localStorage.setItem("savename", userName);
}

welcomeNameForm.addEventListener("submit", onLogin);
