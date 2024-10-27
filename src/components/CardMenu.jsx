import React from 'react'
import {
    BrowserRouter, Routes,
    Route, Link
} from 'react-router-dom'

function CardMenu() {
  return (
    <div className='app__cardItem'>
        <img src="../public/images/wp1.webp" />
        <button>Detail</button>
    </div>
  )
}

export default CardMenu