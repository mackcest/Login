
import React from "react";
import { Link, redirect, withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "Username": "",
            "Password": "",
            "User": false,
        };
        this.Login = this.Login.bind(this);
    }

    Login() {

        if (this.state.Username === "Dung" && this.state.Password === "123") {
            this.setState({
                ...this.state,
                "User": true,
            }, function () {
                redirect("home");
            })
        } else {
            return;
        }

    }


    changeInputValueUserName(value) {
        console.log(value);
        this.setState({
            ...this.state,
            "Username": value,
        })
    }

    changeInputValuePassWord(value) {
        console.log(value);
        this.setState({
            ...this.state,
            "Password": value,
        })
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>

                {this.state.User && (
                    <Link to="/home" replace={true} />
                )}
                <form
                    onSubmit={e => {
                        this.submitForm(e);
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="text">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={e => this.changeInputValueUserName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={e => this.changeInputValuePassWord(e.target.value)}
                        />
                    </div>
                    {/* <Link to="home"> */}
                    <button
                        type="button"
                        onClick={() => this.Login()}
                    >
                        Login
                    </button>
                    {/* </Link> */}
                </form>
            </div>

        );
    }
}
export default withRouter(Login);