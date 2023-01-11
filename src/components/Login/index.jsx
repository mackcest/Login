import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = (props) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const Login = () => {
        if (userName === "Dung" && passWord === "123") {
            return navigate("home");
        } else {
            return navigate("");
        }
    }

    function changeInputValueUserName(value) {
        setUserName(value);
    }

    function changeInputValuePassWord(value) {
        setPassWord(value);
    }

    return (
        <div className="c-login container-fluid">
            <div className="row container wrapper-login mx-auto">
                <div class="left-screen col">
                    <div class="logo mb-3">
                        <img class="fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
                    </div>
                    <h2 className="_8eso text-start" style={{ width: "70%" }}>Facebook helps you connect and share with the people in  your life.</h2>
                </div>
                <div className="right-screen col " style={{ textAlign: 'center', padding: "15px", width: "496px" }}>
                    <form className="wrapper-form">
                        <div className="form-group mt-2">
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={e => changeInputValueUserName(e.target.value)}
                                placeholder="Email address or phone number"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={e => changeInputValuePassWord(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="btn btn-info my-3 w-100"
                                type="button"
                                onClick={() => Login()}
                                value="Login"
                            />
                        </div>
                        <a href="main">Forgotten password?</a><br />
                        <hr />
                        <div className="form-group">
                            <input
                                className="btn btn-success mt-2 w-100"
                                type="button"
                                value="Create New Account"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;