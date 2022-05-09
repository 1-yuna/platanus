const welcomeNameBody = document.querySelector(".welcome_body");
const welcomeNameForm = document.querySelector(".welcome_name");
const welcomeNameInput = document.querySelector(".welcome_name_text");
const welcomeNameBtn = document.querySelector(".welcome_name_btn");
const welcomeNameText = document.querySelector(".welcome_text");
const welcomeNameTextH = document.querySelector(".welcome_text h2");
const welcomeNameTextP = document.querySelectorAll(".welcome_text p");

// 버튼 클릭시 글 삭제, 변경 함수
function welcomeNameBtnClick() {
  const getName = localStorage.getItem("savename");

  // 삭제
  if (getName !== null) {
    welcomeNameTextH.innerText = "How are you feeling today?";
    for (var i = 0; i < welcomeNameTextP.length; i++) {
      welcomeNameTextP[i].remove();
    }
    welcomeNameForm.remove();

    // 코드 변경
    const feelP = document.createElement("p");
    const feelForm = document.createElement("form");
    const feelbtn1 = document.createElement("button");
    const feelbtn2 = document.createElement("button");
    const feelbtn3 = document.createElement("button");
    const feelbtn4 = document.createElement("button");

    feelP.innerText = " I'll recommend songs and writings that fit you!!";
    feelbtn1.innerText = "happy";
    feelbtn2.innerText = "sad";
    feelbtn3.innerText = "angry";
    feelbtn4.innerText = "worry";
    feelbtn1.style.cursor = "pointer";
    feelbtn2.style.cursor = "pointer";
    feelbtn3.style.cursor = "pointer";
    feelbtn4.style.cursor = "pointer";
    feelForm.classList.add("feel_form");

    welcomeNameText.appendChild(feelP);
    feelForm.append(feelbtn1, feelbtn2, feelbtn3, feelbtn4);
    welcomeNameBody.append(feelForm);

    //feel 버튼 클릭 후 단어 저장
    feelbtn1.addEventListener("click", feelbtnclick1);
    feelbtn2.addEventListener("click", feelbtnclick2);
    feelbtn3.addEventListener("click", feelbtnclick3);
    feelbtn4.addEventListener("click", feelbtnclick4);
  }
}

//로그인 후, name 저장
function onLogin(event) {
  event.preventDefault();
  const username = welcomeNameInput.value;
  localStorage.setItem("savename", username);

  // 버튼 클릭 > 글 변경
  welcomeNameBtnClick();
}

welcomeNameForm.addEventListener("submit", onLogin);
