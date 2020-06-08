import React, {Component} from "react";
import {Col, Container, Row , Spinner} from "react-bootstrap";


class DashboardPage  extends Component{
    constructor(props) {
        super(props);
        this.state ={
            user:null,
            loading:true
        }
    }

     componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        const loading = false;
        this.setState({
            user,
            loading
        })
     }


    render() {
        const {loading, user} = this.state;
        let container = loading ?
            (<div className={'align-middle'} style={{height:'40vh', textAlign:'center'}} >
                    <div className="spinner-grow" style={{width: '4rem', height: '4rem', color: '#007bff'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                ): (

            <Row>
                <Col md={{span:10 , offset:1}}>
                    Welcome {user.username}
                </Col>
            </Row>
        );

        return (
            <Container className={'container container-body'} style={{height:'40vh', marginTop:'25px'}} >
                {container}
            </Container>
        )
    }
}

export {DashboardPage}

