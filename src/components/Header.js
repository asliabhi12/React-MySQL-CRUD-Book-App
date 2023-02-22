import React from 'react'
import { Link } from 'react-router-dom'
import {hackerEffect} from "./hackerEffect"

function header() {
  return (
    <div className = "glass-panel">
        
        <h1 data-value="BOOKSAPP" onMouseOver={hackerEffect}>BOOKSAPP</h1>
        <button ><Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link></button>
    </div>
  )
}

export default header