
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState('');

    const Login = () => {
        if (userName === "Dung" && passWord === "123") {
            return navigate("home");
        } else {
            return navigate("header");
        }
    }
    function changeInputValueUserName(value) {
        setUserName(value);
    }
    function changeInputValuePassWord(value) {
        setPassWord(value);
    }

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <form>
                    <div className="form-group">
                        <label htmlFor="text">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={e => changeInputValueUserName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={e => changeInputValuePassWord(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => Login()}
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;