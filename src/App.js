import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <Header />
        <Sidebar state={props.state.friends} />
        <div className='app__content'>
          <Routes>
            <Route element={<Profile  state={props.state.posts} dispatch={props.dispatch} />} path='/profile' />
            <Route element={<Messages state={props.state.dialogs} dispatch={props.dispatch} />} path='/messages/*' />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
