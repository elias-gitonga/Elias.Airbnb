import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import React from 'react';
import './Book.css';
import airbnb_logo from './logo-black.png'; // Import the logo image

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAR7RPQbePwwymKRhD5hnjDA5NY5_2eQRI",
   authDomain: "airbnb-fdcc0.firebaseapp.com",
   projectId: "airbnb-fdcc0",
   storageBucket: "airbnb-fdcc0.appspot.com",
   messagingSenderId: "1022519295440",
   appId: "1:1022519295440:web:789a0ddc11015bfa7e8dd5",
   measurementId: "G-MPD1R7GT6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Book = () => {
  let Hotels = [
    {
      name: "Khalif",
      price: "10000",
      image: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Casa",
      price: "20000",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Jaiden",
      price: "30000",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Urba",
      price: "50000",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const bookHotel = (hotel) => {
    const imageTarget = document.querySelector("#targetImage");
    const nameTarget = document.querySelector("#targetName");
    const priceTarget = document.querySelector("#targetPrice");
    const cards = document.querySelector(".cards_box");
    const request = document.querySelector(".request");

    imageTarget.src = hotel.image;
    nameTarget.innerHTML = hotel.name;
    priceTarget.innerHTML = 'Ksh' + hotel.price;
    cards.style.display = "none";
    request.style.display = "block";

    writeUserData(hotel);
  }

  const writeUserData = (hotel) => {
    const db = getDatabase();
    set(ref(db, 'booking/'), {
      HotelImage: hotel.image,
      HotelName: hotel.name,
      HotelPrice: 'Ksh' + hotel.price,
    });
  }

  const request = () => {
    const request = document.querySelector(".request");
    const cards = document.querySelector(".cards_box");
    request.style.display = "none";
    cards.style.display = "block";
    alert("Your request has been sent");
    clearData();
  }

  const clearData = () => {
    const imageTarget = document.querySelector("#targetImage");
    const nameTarget = document.querySelector("#targetName");
    const priceTarget = document.querySelector("#targetPrice");
    imageTarget.src = '';
    nameTarget.innerHTML = '';
    priceTarget.innerHTML = '';
  }

  const Khalif = () => bookHotel(Hotels[0]);
  const Casa = () => bookHotel(Hotels[1]);
  const Jaiden = () => bookHotel(Hotels[2]);
  const Urba = () => bookHotel(Hotels[3]);

  return (
    <div className="box">
      <div className="content">
        <div className="text">Find Best Hotels</div>
        <div className="target">
          <div className="trgt">
            <div className="card">
              <img src={airbnb_logo} id='targetImage' alt="" />
              <div className="hotel_name" id='targetName'></div>
              <div className="price" id='targetPrice'></div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cards_box">
            <div className="card" onClick={Khalif}>
              <img src={Hotels[0].image} alt="Khalif" />
              <div className="hotel_name">{Hotels[0].name}</div>
              <div className="price">{'Ksh' + Hotels[0].price}</div>
            </div>
            {/*  */}
            <div className="card" onClick={Casa}>
              <img src={Hotels[1].image} alt="Casa" />
              <div className="hotel_name">{Hotels[1].name}</div>
              <div className="price">{'Ksh' + Hotels[1].price}</div>
            </div>
            {/*  */}
            <div className="card" onClick={Jaiden}>
              <img src={Hotels[2].image} alt="Jaiden" />
              <div className="hotel_name">{Hotels[2].name}</div>
              <div className="price">{'Ksh' + Hotels[2].price}</div>
            </div>
            {/*  */}
            <div className="card" onClick={Urba}>
              <img src={Hotels[3].image} alt="Urba" />
              <div className="hotel_name">{Hotels[3].name}</div>
              <div className="price">{'Ksh' + Hotels[3].price}</div>
            </div>
          </div>
          <div className="request">
            <button className="btn" onClick={request}>Request</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Book;
