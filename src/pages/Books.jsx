import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import trash from "../assets/trash-solid.svg"
import update from "../assets/pencil-solid.svg"
import Blob from "../components/Blob";


const blob = document.getElementById("blob");

const mouseMovement = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };


  
  return (
    <div>
      <Blob/>
      <div id="blob" onMouseOver={mouseMovement}></div>
      <Header/>
      <section id="product1">
      <div className="pro-container" >
        {books.map((book) => (
          <div key={book.id} className="pro">
            <img src={book.cover} alt="" />
            
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <img src={trash} alt ="" onClick={() => handleDelete(book.id)} id="delete-button"/>
            
            <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <img src={update} alt ="" id="update-button"/>
            </Link>
          
          </div>
        ))}
      </div>

      
      </section>
    </div>
    
  );
};

export default Books;