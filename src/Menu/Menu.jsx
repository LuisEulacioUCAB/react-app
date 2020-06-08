import React, {Component} from "react";
import {connect} from "react-redux";
import { Nav} from "react-bootstrap";
import {userActions} from "../actions/user.actions";
import styled from "@emotion/styled";

const StyledMenu = styled(Nav.Link)`
    font-size: 16px;
    color: #9C2C8F!important;
    font-weight:700;
`;
class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        const user = localStorage.getItem('user');
        if(user) this.setState({loggedIn:true})
    }

    logout = () =>{
        const {dispatch} = this.props;
        dispatch(userActions.logout());
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const {authentication} = nextProps;
        const {loggedIn} = authentication;
        if(loggedIn) this.setState({loggedIn});
        else window.location.reload();
    }

    render() {
        const {loggedIn} = this.state;

        return(
            <div className={'main-menu'}>
                <Nav activeKey="/home" as={'ul'} className="justify-content-end" >
                    { loggedIn ?(
                    <Nav.Item as={'li'}>
                        <StyledMenu href="/">Home</StyledMenu>
                    </Nav.Item>) :null}

                    { !loggedIn ?(
                        <>
                            <Nav.Item as={'li'}>
                                <StyledMenu href="/register">Register</StyledMenu>
                            </Nav.Item>
                            <Nav.Item as={'li'}>
                            <StyledMenu href="/login"> Login</StyledMenu>
                            </Nav.Item>
                        </>
                        ):
                        <Nav.Item as={'li'}>
                            <StyledMenu onClick={this.logout}>Logout</StyledMenu>
                        </Nav.Item>}

                </Nav>
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

const connectedHeader = connect(mapStateToProps)(Menu);
export {connectedHeader as Menu};