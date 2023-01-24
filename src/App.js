import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';


const App = () => {
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
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
