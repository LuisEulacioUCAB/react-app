import React, {Component} from "react";
import {connect} from "react-redux";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    render() {
        return(
            <div>
                header
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {authentication} = state;

    return {
        authentication
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export {connectedHeader as Header};