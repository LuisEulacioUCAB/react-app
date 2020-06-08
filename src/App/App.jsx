import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import {PrivateRoute} from "../components/PrivateRoute";
import {RegisterPage} from "../RegisterPage";
import {LoginPage} from "../LoginPage";
import {DashboardPage} from "../DashboardPage/DashboardPage";
import {Menu} from "../Menu";
import {ToastContainer} from "react-toastify";
import {history} from "../shared/history";

class App extends React.PureComponent {

  componentDidMount() {
    const usersList = localStorage.getItem('userList');
    if(!usersList){
      localStorage.setItem('userList',JSON.stringify([]))
    }
  }

  render() {
    return (

        <div>
        <ToastContainer/>
        <Router history={history}>
            <div>
              <Menu/>
              <Switch>
                <PrivateRoute exact path="/" component={DashboardPage} />
                <Route path="/register" refresh="true" component={RegisterPage}/>
                <Route path="/login"  refresh="true" component={LoginPage}/>
              </Switch>
            </div>
          </Router>
        </div>

    )

  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}
const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
