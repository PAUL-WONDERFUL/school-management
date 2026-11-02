// JavaScript = what the page DOES when people interact with it.
// Lines starting with // are comments: notes for humans, ignored by the computer.

// 1. FIND the elements on the page we need, using their id="..." names.
//    "const" creates a named box (a variable) holding something we'll reuse.
const form = document.getElementById("login-form");
const message = document.getElementById("message");

// 2. LISTEN for the form being submitted (clicking Login or pressing Enter).
//    The code inside { } runs every time that happens.
form.addEventListener("submit", function (event) {

  // Normally a form reloads the page when submitted. This stops that.
  event.preventDefault();

  // 3. READ what the user typed. ".value" is the text inside the box.
  //    ".trim()" removes accidental spaces at the start/end.
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // 4. CHECK the input with "if" (make a decision).
  if (username === "" || password === "") {      // || means "or"
    showMessage("Please fill in both username and password.", "error");
    return;  // stop here, don't run the code below
  }

  // ⚠️ PRACTICE ONLY: the password is written right here in the code,
  // so anyone can see it by viewing the page source. In the real app
  // the SERVER will check passwords secretly, never the browser.
  if (username === "admin" && password === "1234") {   // && means "and"
    showMessage("Welcome, " + username + "! Logged in as " + role + ".", "success");
  } else {
    showMessage("Wrong username or password.", "error");
  }
});

// 5. A FUNCTION is a reusable set of steps with a name.
//    We call it above with showMessage("some text", "error").
function showMessage(text, type) {
  message.textContent = text;   // put the text inside <p id="message">
  message.className = type;     // apply the .error or .success style from CSS
}
