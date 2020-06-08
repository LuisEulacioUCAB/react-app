import React, {Component} from "react";
import {connect} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {Title} from "../components/Title";
import {SubmitButton} from "../components/SubmitButton";
import {LoginForm} from "../components/LoginForm";
import {userActions} from "../actions/user.actions";
import * as toast from "../components/toast";

class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loginData :{
                email: '',
                password: ''
            },
            isSubmitted:false,
            loggedIn:false
        }
    }

    onChange = (event) =>{
        const {loginData} = this.state;

        loginData[event.target.name] = event.target.value;
        this.setState({
            loginData
        })
    };


    onClick = () =>{
        const {loginData } = this.state;
        let isSubmitted = true;
        const {dispatch} = this.props;

        this.setState({
            isSubmitted
        });

        dispatch(userActions.authentication(loginData));

    };


    componentWillReceiveProps = (nextProps) => {
        const {authentication} = nextProps;
        const {loggedIn} = authentication;

        if(!loggedIn) {
            const {error} = authentication;
            const isSubmitted = false;
            this.setState({
                isSubmitted
            });
            toast.errors(error.arr);

        }else{
            toast.success("Login successfully");
            this.props.history.push('/');
        }
    };


    render() {
        const {loginData, isSubmitted} = this.state;
        return(
            <Container className={'container'}>
                <Row>
                    <Col md={{span:4 , offset:4}}>
                        <div className={'container-form'}>
                            <Title title={'Log In'} />
                            <LoginForm data={loginData} onChange={this.onChange}/>
                            <SubmitButton onClick={this.onClick} text={'Log In'} bgColor={'#9C2C8F'} isSubmitted={isSubmitted}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}


function mapStateToProps(state) {
    const {authentication} = state;

    return {
        authentication
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export {connectedLoginPage as LoginPage};