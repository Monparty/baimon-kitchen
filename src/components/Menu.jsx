import React from 'react'
import Navbar from './Navbar'
import CardMenu from './CardMenu'
import Footer from './Footer'

function Menu() {
  return (
    <div>
      <Navbar />
      <div className='menu__container'>
        <section className='app__card'>
            <div className='app__cardContainer'>
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
            </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Menu