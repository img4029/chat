// 'use strict';

// const signUp = document.querySelector(".signUp"),
//     check = document.querySelector(".check"),
//     input1 = document.querySelector("input");
// var dbUser = database.ref('user/');
// let idTrue;

// function idCheck(input1) {
//     dbUser.on('child_added', function (data) {
//         if (data.val().memberId == input1.value) {
//             alert("아이디가 중복됩니다.")
//             return false;
//         } else if (input1.value == "") {
//             alert("아이디를 입력해주세요")
//             return false;
//         }
//         alert("아이디가 사용가능합니다.")
//         console.log(input1.value);
//         input1.disabled = true;
//         return true;
//     });
// }

// function loginOk() {
//     const input = document.querySelectorAll("input");
//     let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

//     if (!idTrue) {
//         alert("중복확인해주세요")
//         return;
//     }
//     if (input[1].value == "") {
//         alert("닉네임을 입력해주세요.")
//         return;
//     }
//     if (!regPass.test(input[2].value)) {
//         alert("영문, 숫자, 특수기호 조합으로 8~16자리 입력해주세요.")
//         input[2].focus();
//         return;
//     }
//     if (input[2].value !== input[3].value) {
//         alert("비밀번호가 일치하지 않습니다.")
//         input[3].focus();
//         return;
//     }

//     database.ref('user/').push({
//         "memberId": `${input[0].value}`,
//         "memberName": `${input[1].value}`,
//         "memberPassword": `${input[2].value}`
//     });
// }

// signUp.children[5].addEventListener('click', loginOk);

// check.addEventListener('click', () => {
//     idTrue = idCheck(input1);
// });
import React from "react"
import "./SignUp.css"
import { useState } from 'react';

export function SignUp() {
    const [signUp, setSignUp] = useState(false);
    const [signUpId, setSignUpId] = useState(""),
        [signUpName, setSignUpName] = useState(""),
        [signUpPW, setSignUpPW] = useState(""),
        [signUpPW2, setSignUpPW2] = useState("");
    let idTrue;

    const setId = event => {
        setSignUpId(event.target.value);
    }
    const setName = event => {
        setSignUpName(event.target.value);
    }
    const setPW = event => {
        setSignUpPW(event.target.value);
    }
    const setPW2 = event => {
        setSignUpPW2(event.target.value);
    }
    function idCheck(input1) {
        // dbUser.on('child_added', function (data) {
        //     if (data.val().memberId == input1.value) {
        //         alert("아이디가 중복됩니다.")
        //         return false;
        //     } else if (input1.value == "") {
        //         alert("아이디를 입력해주세요")
        //         return false;
        //     }
        //     alert("아이디가 사용가능합니다.")
        //     console.log(input1.value);
        //     input1.disabled = true;
        //     return true;
        // });
    }

    function loginOk() {
        const input = document.querySelectorAll("input");
        let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

        if (!idTrue) {
            alert("중복확인해주세요")
            return;
        }
        if (signUpName == "") {
            alert("닉네임을 입력해주세요.")
            return;
        }
        if (!regPass.test(signUpPW)) {
            alert("영문, 숫자, 특수기호 조합으로 8~16자리 입력해주세요.")
            input[2].focus();
            return;
        }
        if (signUpPW !== signUpPW2) {
            alert("비밀번호가 일치하지 않습니다.")
            input[3].focus();
            return;
        }

        // database.ref('user/').push({
        //     "memberId": `${input[0].value}`,
        //     "memberName": `${input[1].value}`,
        //     "memberPassword": `${input[2].value}`
        // });
    }
    return (
        <div className="signUp">
            <h1>회원가입</h1>
            <div>
                <h4>아이디</h4>
                <div>
                    <input
                        onChange={setId}
                        type="text"
                    />
                    <div className="check">중복확인</div>
                </div>
                <div></div>
            </div>
            <div>
                <h4>닉네임</h4>
                <input
                    onChange={setName}
                    type="text"
                />
                <div></div>
            </div>
            <div>
                <h4>비밀번호</h4>
                <input
                    onChange={setPW}
                    type="password"
                />
                <div></div>
            </div>
            <div>
                <h4>비밀번호 확인</h4>
                <input
                    onChange={setPW2}
                    type="password"
                />
                <div></div>
            </div>
            <div
                onClick={loginOk}
            >가입완료</div>
        </div>
    )
}