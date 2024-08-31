const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
let join_nowbtn = document.querySelector(".home .btn");
let join_btn = document.querySelector(".nav-btns .btn3");
let wrapper = document.querySelector(".wrapper");
let exit_login = document.querySelector(".login-signup");


join_nowbtn.onclick = (()=>{
    wrapper.style.display = "block";
    exit_login.style.display = "block";
  });
  join_btn.onclick = (()=>{
    wrapper.style.display = "block";
    exit_login.style.display = "block";
  });
  exit_login.onclick = (()=>{
    wrapper.style.display = "none";
    exit_login.style.display = "none";
  });
  
  signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  });
  loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  });
  signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
  });
  