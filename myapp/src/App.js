// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal/Modal";
import { SignUp } from "./SignUp/SignUp";
import { app } from "./firebase";
// import { getDatabase, ref, onValue } from "firebase/database";
import { getDatabase, ref, child, get } from "firebase/database";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    // const database = getDatabase();
    // const dbUser = ref(database, 'user/');
    useEffect(() => {
        console.log("실행되었다.");
    }, []);
    const [myId, setMyId] = useState(""),
        [myPW, setMyPW] = useState("");
    const [modalOpen, setModalOpen] = useState(false)

    const dbRef = ref(getDatabase());
    const navigate = useNavigate();

    const setId = event => {
        setMyId(event.target.value);
    }

    const setPW = event => {
        setMyPW(event.target.value);
    }

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    function login() {
        // onValue(dbUser, (data) => {
        //     const userData = data.val();
        //     console.log(userData);
        // });
        get(child(dbRef, `user/`)).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val()
                for (const key in data) {
                    if (data[key].memberId === myId && data[key].memberPassword === myPW) {
                        // if (true) {
                        console.log({ state: data[key] });
                        navigate("/Chatting", {
                            state: data[key]
                        });
                        return;
                    }
                }
                alert("아이디와 비밀번호를 다시 입력해주세요.");
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <main className='main'>
            <div className='login'>
                <h1>채팅프로그램</h1>
                <div>
                    <input
                        type="text"
                        value={myId}
                        onChange={setId}
                    />
                    <input
                        type="password"
                        value={myPW}
                        onChange={setPW}
                    />
                </div>
                <div
                    onClick={login}
                >LOGIN</div>
                <div onClick={openModal}>회원가입</div>
                <Modal open={modalOpen} close={closeModal} header="회원가입">
                    <SignUp/>
                </Modal>
            </div>
        </main>
    );
}

export default App;
