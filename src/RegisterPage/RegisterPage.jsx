import React, {Component} from "react";
import { connect } from 'react-redux';
import {Container, Row, Col} from "react-bootstrap";
import {RegisterForm} from "../components/RegisterForm";
import {Title} from "../components/Title";
import {SubmitButton} from "../components/SubmitButton";
import {userActions} from "../actions/user.actions";
import * as toast from '../components/toast'

class RegisterPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            registerData:{
                username:'',
                email:'',
                password:'',
                confirm_password:''
            },
            isSubmitted :false,
            registering: false
        }
    }

    componentDidMount = () => {


    };

    componentWillReceiveProps = (nextProps) => {
        const {registration} = nextProps;
        const {registering} = registration;

        if(!registering) {
            const {error} = registration;
            const isSubmitted = false;
            this.setState({
                isSubmitted
            });
            toast.errors(error.arr);

        }else{
            toast.success("Registration successfully");
            this.props.history.push('/login/');
        }

    };

    onChange = (event) =>{
      const {registerData} = this.state;

      registerData[event.target.name] = event.target.value;
        this.setState({
            registerData
        })
    };

    onClick = () =>{
        const {registerData } = this.state;
        let isSubmitted = true;
        const {dispatch} = this.props;

        this.setState({
            isSubmitted
        });

        dispatch(userActions.register(registerData));


    };


    render() {
        const {registerData, isSubmitted} = this.state;
        return(

            <Container className={'container'}>
                <Row>
                    <Col md={{span:4 , offset:4}}>
                        <div className={'container-form'}>
                            <Title title={'Sign Up'} />
                            <RegisterForm data={registerData} onChange={this.onChange}/>
                            <SubmitButton onClick={this.onClick} text={'Sign Up'} bgColor={'#9C2C8F'} isSubmitted={isSubmitted}/>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}

function mapStateToProps(state) {
    const {registration} = state;

    return {
        registration
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export {connectedRegisterPage as RegisterPage};
