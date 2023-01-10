import React, { Component } from "react";

class MyProvider extends Component {
    state = { message: "" }
    render() {
        return (
            <MContext.Provider value={
                {
                    state: this.state,
                    setMessage: (value) => this.setState({
                        message: value
                    })
                }}>
                {this.props.children}
            </MContext.Provider>
        );
    }
}

const MContext = React.createContext();
export { MyProvider, MContext };