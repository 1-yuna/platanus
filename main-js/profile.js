const profileImg = document.querySelector(".main_high-profile-img-box p");
const profileName = document.querySelector(".main_high-profile-name-box h1");
const getFeel = localStorage.getItem("savefeel");
const getName = localStorage.getItem("savename");

if (getFeel === "happy") {
  profileImg.innerText = "😆";
}

if (getFeel === "sad") {
  profileImg.innerText = "😢";
}

if (getFeel === "angry") {
  profileImg.innerText = "🤬";
}

if (getFeel === "love") {
  profileImg.innerText = "🥰";
}

profileName.innerText = getName;
