import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";


import ContactsContainer from './components/Contacts/ContactsContainer';
import WindowContainer from './components/ChatWindow/WindowContainer';
import LoginForm from './components/Login/LoginForm';
import {useSelector} from 'react-redux';



function App(props) {
  const {isAuth, fullName, email} = useSelector(state => state.user);
  console.log(isAuth);
  console.log(fullName);
  console.log(email);
  return (

   
      <div className='App'>
        <div className='container'>
        
          {isAuth ? (
          <div className='chatBody'>
            <div className='contactsContainer'><ContactsContainer /></div>
            <div className='windowContainer'><WindowContainer /></div>
          </div>
          )
          : (
          <LoginForm />
          )}


        </div>
      </div>
   

  );
}

export default App;
