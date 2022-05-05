const welcomeNameForm = document.querySelector(".welcome_name");
const welcomeNameInput = document.querySelector(".welcome_name_text");
const welcomeNameBtn = document.querySelector(".welcome_name_btn");
const welcomeNameTextH = document.querySelector(".welcome_text h2");
const welcomeNameTextP = document.querySelectorAll(".welcome_text p");

// 버튼 클릭시 글 삭제, 변경
function welcomeNameBtnClick() {
  const saveUsername = localStorage.getItem("savename");
  if (saveUsername !== null) {
    welcomeNameTextH.innerText = "How are you feeling today?";
    for (var i = 0; i < welcomeNameTextP.length; i++) {
      welcomeNameTextP[i].remove();
    }
    welcomeNameInput.remove();
    welcomeNameBtn.remove();
  }
}

//로그인 후, name 저장
function onLogin(event) {
  event.preventDefault();
  const username = welcomeNameInput.value;
  localStorage.setItem("savename", username);

  welcomeNameBtnClick();
}

welcomeNameForm.addEventListener("submit", onLogin);
