import "./AirbnbHome.css";
import BookPage from "./Book";
import { useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


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

const Home = () => {
  const [valid, setvalid] = useState(true);
  const [hide, sethide] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const book_date = document.getElementById("book-date");
    const book_time = document.getElementById("book-time");

    const leave_date = document.getElementById("leave-date");
    const leave_time = document.getElementById("leave-time");

    if (
      !book_date.value ||
      !book_time.value ||
      !leave_date.value ||
      !leave_time.value
    ) {
      alert("Please fill all the fields");
    } else {
      writeUserData();
      function writeUserData() {
        const db = getDatabase();
        set(ref(db, "data/"), {
          bookingdate: book_date.value,
          bookingtime: book_time.value,
          leave_date: leave_date.value,
          leave_time: leave_time.value,
        });
      }
      alert("Your booking has been made");
      const BookPageDiv = document.querySelector(".box");
      const container = document.querySelector(".container");
      setvalid(!valid + BookPageDiv.classList.add("show"));
      sethide(!hide + container.classList.add("hide"));
    }
  };
  return (
    <>
      <BookPage />
      <div className="container">
        <div className="content">
          <div className="text">Book Now</div>
          <div className="form2">
            <div className="txt">Date & Time You Would Like To Stay</div>
            <form action="" onSubmit={handleSubmit}>
              <div className="inputData">
                <input type="date" name="" id="book-date" />
              </div>
              <div className="inputData">
                <input type="time" name="" id="book-time" />
              </div>
              <div className="txt">Date & Time You Would Like To Leave</div>
              <div className="inputData">
                <input type="date" name="" id="leave-date" />
              </div>
              <div className="inputData">
                <input type="time" name="" id="leave-time" />
              </div>
              <div className="book">
                <button type="submit">Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
