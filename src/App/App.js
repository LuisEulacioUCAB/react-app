import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {history} from "./shared/history";
import { connect } from 'react-redux';
import {PrivateRoute} from "./components/PrivateRoute";


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
          <Router history={history}>
            <div>
              <Switch>
                <Route path="/register" />
                <Route path="/login" />
                <PrivateRoute path="/dashboard"/>
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
