function feelbtnclick1(event) {
  event.preventDefault();
  const userfeel = "happy";
  localStorage.setItem("savefeel", userfeel);
  window.location.href = "main.html";
}

function feelbtnclick2(event) {
  event.preventDefault();
  const userfeel = "sad";
  localStorage.setItem("savefeel", userfeel);
  window.location.href = "main.html";
}

function feelbtnclick3(event) {
  event.preventDefault();
  const userfeel = "angry";
  localStorage.setItem("savefeel", userfeel);
  window.location.href = "main.html";
}

function feelbtnclick4(event) {
  event.preventDefault();
  const userfeel = "love";
  localStorage.setItem("savefeel", userfeel);
  window.location.href = "main.html";
}
