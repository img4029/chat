'use strict';

//===================================================================================

const login = document.querySelector(".login");

console.log();
login.children[2].href = "./chatting/chatting.html"
login.children[3].addEventListener('click', () => {
    open("./signup/signup.html", "회원가입", " height= 741px, width= 361px, location = no");
});