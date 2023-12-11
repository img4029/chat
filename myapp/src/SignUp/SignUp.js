import React from "react"
import "./SignUp.css"
import { useState } from 'react';
import { app } from "../firebase";
import { getDatabase, ref, child, get, update } from "firebase/database";

export function SignUp() {
    const [signUp, setSignUp] = useState(false),
        [signHtml, setSignHtml] = useState(false),
        [signUpId, setSignUpId] = useState(""),
        [signUpName, setSignUpName] = useState(""),
        [signUpPW, setSignUpPW] = useState(""),
        [signUpPW2, setSignUpPW2] = useState(""),
        [sIdmgOk, setIdmgOk] = useState("idmg"),
        [sIdmg, setIdmg] = useState(""),
        [sNamemg, setNamemg] = useState(""),
        [sPwmg, setPwmg] = useState(""),
        [sPw2mg, setPw2mg] = useState("");
    const setId = event => {
        setSignUpId(event.target.value);
        setIdmg("");
    }
    const setName = event => {
        setSignUpName(event.target.value);
        setNamemg("");
    }
    const setPW = event => {
        setSignUpPW(event.target.value);
        setPwmg("");
    }
    const setPW2 = event => {
        setSignUpPW2(event.target.value);
        setPw2mg("");
    }
    function idCheckTrue() {
        // let ch = idCheck()
        // console.log(ch);
        setSignUp(idCheck());
    }
    function idCheck() {
        const dbRef = ref(getDatabase());
        let ch = get(child(dbRef, `user/`)).then((data) => {
            if (data.exists()) {
                const checkInput = document.querySelector(".checkInput");
                const userdata = data.val();
                for (const key in userdata) {
                    console.log(userdata[key]);
                    if (userdata[key].memberId === signUpId) {
                        setIdmg("아이디가 중복됩니다.");
                        return false;
                    } else if (signUpId === "") {
                        setIdmg("아이디를 입력해주세요");
                        return false;
                    }
                }
                setIdmg("아이디가 사용가능합니다.");
                setIdmgOk("idmgOk");
                checkInput.disabled = true;
                return true;
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        return ch;
    }
    function chatSend(memberId, memberName, memberPassword) {
        const db = getDatabase();
        const postData = {
            memberId,
            memberName,
            memberPassword
        };
        const updates = {};
        updates['/user/' + memberId] = postData;
        return update(ref(db), updates);
    }
    function loginOk() {
        const input = document.querySelectorAll("input");
        let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

        if (!signUp) {
            setIdmg("중복확인해주세요");
            return;
        }
        if (signUpName === "") {
            setNamemg("닉네임을 입력해주세요.");
            return;
        }
        if (!regPass.test(signUpPW)) {
            setPwmg("영문, 숫자, 특수기호 조합으로 8~16자리 입력해주세요.")
            input[2].focus();
            return;
        }
        if (signUpPW !== signUpPW2) {
            setPw2mg("비밀번호가 일치하지 않습니다.")
            input[3].focus();
            return;
        }
        chatSend(signUpId, signUpName, signUpPW);
        setSignHtml(true);
    }
    function htmlCheck() {
        let html;
        if (signHtml) {
            html = (
                <div>가입이 완료되었습니다.</div>
            )
        } else {
            html = (
                <div className="signUp">
                    <h1>회원가입</h1>
                    <div>
                        <h4>아이디</h4>
                        <div>
                            <input
                                className="checkInput"
                                onChange={setId}
                                type="text"
                            />
                            <div
                                className="check"
                                onClick={idCheckTrue}
                            >중복확인</div>
                        </div>
                        <div className={sIdmgOk}>{sIdmg}</div>
                    </div>
                    <div>
                        <h4>닉네임</h4>
                        <input
                            onChange={setName}
                            type="text"
                        />
                        <div className="namemg">{sNamemg}</div>
                    </div>
                    <div>
                        <h4>비밀번호</h4>
                        <input
                            onChange={setPW}
                            type="password"
                        />
                        <div className="pwmg">{sPwmg}</div>
                    </div>
                    <div>
                        <h4>비밀번호 확인</h4>
                        <input
                            onChange={setPW2}
                            type="password"
                        />
                        <div className="pw2mg">{sPw2mg}</div>
                    </div>
                    <div
                        onClick={loginOk}
                    >가입완료</div>
                </div>
            )
        }
        return html;
    } 
    return htmlCheck();
}