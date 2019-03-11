import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard';
import AddContact from './components/add-contact/AddContact';
import EditContact from './components/edit-contact/EditContact';

//Styling
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" component={Dashboard} exact />
              <Route path="/add" component={AddContact} />
              <Route path="/edit/:id" component={EditContact} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
