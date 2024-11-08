const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const loginbtn = document.getElementById("loginbtn");
const signin = document.getElementById("login-form");


sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

loginbtn.addEventListener('click',(e) =>{
    e.preventDefault();
    const username = signin.Username.value
    const password = signin.Password.value

    if(username === "0000" && password === "0000"){
        document.getElementById("social-text").innerHTML="正確";
    }
    else{
        document.getElementById("social-text").innerHTML="錯誤";
    }
});
