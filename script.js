document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("loginBtn");
  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");
  const result = document.getElementById("result");

  button.addEventListener("click", function () {
    const user = userInput.value;
    const pass = passInput.value;

    if (user === "hemanya" && pass === "bluelagoon") {
      // Redirect to welcome page
      window.location.href = "MAIN.HTML";
    }
      else if (user === "yuvaan" && pass === "bluelagoon") {
      // Redirect to welcome page
      window.location.href = "MAIN.HTML"; }
     else if(user === "" && pass === ""){
   result.innerText = "Please enter Username and Password!";
    }else if(user === "yuvaan","hemanya" && pass === ""){
   result.innerText = "Please enter  Password!";
    }
      else {
      result.innerText = "Invalid username or password!";
    }


  });
});
  const num = document.getElementById("num");
  

