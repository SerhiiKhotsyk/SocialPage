import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';
import { initializedApp } from './redux/app-reducer';


class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    
    if(!this.props.initialized) return <Preloader />

    return (
      <BrowserRouter>
      <div className='app__wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className='app__content'>
          <Routes>
            <Route element={<ProfileContainer />} path='/profile/:userId?' />
            <Route element={<MessagesContainer />} path='/messages/*' />
            <Route element={<UsersContainer />} path='/users/' />
            <Route element={<Login />} path='/login' />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
      // isAuth: state.auth.isAuth,
      // login: state.auth.login,
  }
}

export default connect (mapStateToProps, {initializedApp})(App);
