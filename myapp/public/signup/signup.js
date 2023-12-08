'use strict';

const signUp = document.querySelector(".signUp"),
    check = document.querySelector(".check"),
    input1 = document.querySelector("input");
var dbUser = database.ref('user/');
let idTrue;

function idCheck(input1) {
    dbUser.on('child_added', function (data) {
        if (data.val().memberId == input1.value) {
            alert("아이디가 중복됩니다.")
            return false;
        } else if (input1.value == "") {
            alert("아이디를 입력해주세요")
            return false;
        }
        alert("아이디가 사용가능합니다.")
        console.log(input1.value);
        input1.disabled = true;
        return true;
    });
}

function loginOk() {
    const input = document.querySelectorAll("input");
    let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    if (!idTrue) {
        alert("중복확인해주세요")
        return;
    }
    if (input[1].value == "") {
        alert("닉네임을 입력해주세요.")
        return;
    }
    if (!regPass.test(input[2].value)) {
        alert("영문, 숫자, 특수기호 조합으로 8~16자리 입력해주세요.")
        input[2].focus();
        return;
    }
    if (input[2].value !== input[3].value) {
        alert("비밀번호가 일치하지 않습니다.")
        input[3].focus();
        return;
    }

    database.ref('user/').push({
        "memberId": `${input[0].value}`,
        "memberName": `${input[1].value}`,
        "memberPassword": `${input[2].value}`
    });
}

signUp.children[5].addEventListener('click', loginOk);

check.addEventListener('click', () => {
    idTrue = idCheck(input1);
});