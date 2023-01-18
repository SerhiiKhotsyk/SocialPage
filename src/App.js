import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MessagesContainer from './components/Messages/MessagesContainer';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';


const App = () => {
  return (
    <BrowserRouter>
    <div className='app__wrapper'>
      <Header />
      <Sidebar />
      <div className='app__content'>
        <Routes>
          <Route element={<Profile />} path='/profile' />
          <Route element={<MessagesContainer />} path='/messages/*' />
          <Route element={<UsersContainer />} path='/users/' />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
