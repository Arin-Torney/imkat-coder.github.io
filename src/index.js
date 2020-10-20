function login() {
  let name = prompt("Enter your name");
  let username = prompt("Enter your mail id");
  let password = prompt("Enter a strong password");
  alert("Everything is set! But your account is for temporary use only for now.\nThat is, next time you open this website, you again need to sign up.");
  document.getElementById("account").innerHTML=name;
}
