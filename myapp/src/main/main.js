// 'use strict';
// import { getDatabase } from "../../node_modules/firebase/database";

const login = document.querySelector(".login");

login.children[2].addEventListener('click', () => {
    // dbUser.on('child_added', function (data) {
    //     const input = document.querySelectorAll("input");
    //     if (input[0].value === data.val().memberId && input[1].value === data.val().memberPassword) {
            // userLogin = {
    //         //     memberId: `${data.val().memberId}`,
    //         //     memberName: `${data.val().memberName}`
    //         // };
    //         window.location.href = "./chatting/chatting.html";
    //     }
    // });
});

login.children[3].addEventListener('click', () => {
    window.open("./signup/signup.html", "회원가입", " height= 741px, width= 501px, location = no");
});

