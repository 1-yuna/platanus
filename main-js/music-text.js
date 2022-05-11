const musicTitle = document.querySelector(".music-title");
const musicText = document.querySelector(".music-text");

if (getFeel === "happy") {
  const musicHappy = [
    "happy-0",
    "happy-1",
    "happy-2",
    "happy-3",
    "happy-4",
    "happy-5",
  ];

  const chooseMusicHappy =
    musicHappy[Math.floor(Math.random() * musicHappy.length)];

  console.log(chooseMusicHappy);
  musicPlay.src = `music/${chooseMusicHappy}.mp3`;

  if (chooseMusicHappy === musicHappy[0]) {
    musicTitle.innerText = "Here’s to never growing up";
    musicText.innerText = "- Avril Lavigne";
  }
}
