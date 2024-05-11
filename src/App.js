import './App.css';
import React, { useState } from 'react';
import Book from './components/Book'; // Import Book component
import AirbnbHome from './components/AirbnbHome';
import airbnb_logo from './components/logo-color.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [hide, setHide] = useState(true); 
  const [show, setShow] = useState(true); 

  const validateForm = (event) => {
    event.preventDefault();
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");

    let validation = "Please fill-in the above fields";
    let emailVal = "Email validation error must include @ and .com. Try again!";
    let passVal = "Password char must not be less than 8";

    if (!input1.value || !input2.value) {
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      emailValidate();
      passwordValidate();
    }

    function emailValidate() {
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!input1.value.match(pattern)) {
        console.warn("pattern failed")
        status.classList.add("active");
        status.innerHTML = `${emailVal}`;
      } else {
        console.log("input1 validated");
        status.classList.remove("active");
        input1.classList.add("valid");
      }
    }

    function passwordValidate() {
      if (input2.value.length < 8) {
        console.warn("Password Characters Must Not Be Less Than 8");
        status.classList.add("active");
        status.innerHTML = `${passVal}`;
      } else {
        console.log("input2 validated");
        status.classList.remove("active");
        input2.classList.add("valid");
      }
    }

    if (input1.classList.contains("valid") && input2.classList.contains("valid")) {
      console.log('submitted');
      setTimeout(() => {
        let container = document.querySelector(".container");
        let wrapper = document.querySelector(".wrapper");
        setHide(!hide); 
        setShow(!show); 
        wrapper.classList.add("hide");
        container.classList.add("show");
      }, 1000);
    }
  }

  const handleMail = () => {
    const input1 = document.querySelector("#input1");
    const status = document.querySelector(".status");
    let validation = "Please fill-in the above fields";
    let emailVal = "Email validation error must include @ and .com. Try again!";
    if (!input1.value) {
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      emailValidate();
    }

    function emailValidate() {
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!input1.value.match(pattern)) {
        console.warn("pattern failed")
        status.classList.add("active");
        status.innerHTML = `${emailVal}`;
      } else {
        console.log("input1 validated");
        status.classList.remove("active");
      }
    }
  }

  const handlePassword = () => {
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");

    let validation = "Please fill-in the above fields";
    let passVal = "Password Characters Must Not Be Less Than 8";
    if (!input2.value) {
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      passwordValidate();
    }

    function passwordValidate() {
      if (input2.value.length < 8) {
        console.warn("Password Characters Must Not Be Less Than 8");
        status.classList.add("active");
        status.innerHTML = `${passVal}`;
      } else {
        console.log("input2 validated");
        status.classList.remove("active");
      }
    }
  }

  return (
    <div className="App">
      <Book /> {/* Render Book component */}
      <AirbnbHome /> {/* Render AirbnbHome component */}
      <div className="wrapper">
        <div className="content">
          <div className="logo">
            <img src={airbnb_logo} alt="" />
          </div>
          <div className="c1">
            <span>Be An Airbnb Member</span>
          </div>
          <div className="form">
            <div className="status"></div>
            <form action="#" onSubmit={validateForm}>
              <div className="eInput">
                <FontAwesomeIcon className='icon' icon={faUser} />
                <input id='input1' type="text" placeholder='Enter Email Address' onKeyUp={handleMail} />
              </div>
              <div className="eInput">
                <FontAwesomeIcon className='icon' icon={faLock} />
                <input id='input2' type="password" placeholder='Enter Password' onKeyUp={handlePassword} />
              </div>
              <div className="submit">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
