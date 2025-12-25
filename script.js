const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789";

function generatePassword(length = 8) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return result;
}

window.generatedPassword = generatePassword(10);

console.log("PASS:", window.generatedPassword);

const encodedNextPage = "X3N5cy9NYU1GMlkuaHRtbA";

function goNext() {
  const nextPage = atob(encodedNextPage);
  window.location.href = nextPage;
}

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === window.generatedPassword) {
    goNext();
  } else {
    error.textContent = "ACCESS DENIED";
  }
}
