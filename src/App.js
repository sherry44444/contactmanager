import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Layout/Header";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";

import { Provider } from "./Context";
import AddContact from "./Components/Contacts/AddContact";
import EditContact from "./Components/Contacts/EditContact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header heading="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route axact path="/contact/add" component={AddContact} />
                <Route path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
