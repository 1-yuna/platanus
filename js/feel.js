function feelbtnclick1(event) {
  event.preventDefault();
  const userfeel = "happy";
  localStorage.setItem("savefeel", userfeel);
}

function feelbtnclick2(event) {
  event.preventDefault();
  const userfeel = "sad";
  localStorage.setItem("savefeel", userfeel);
}

function feelbtnclick3(event) {
  event.preventDefault();
  const userfeel = "angry";
  localStorage.setItem("savefeel", userfeel);
}

function feelbtnclick4(event) {
  event.preventDefault();
  const userfeel = "worry";
  localStorage.setItem("savefeel", userfeel);
}
