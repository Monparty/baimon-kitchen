import React from 'react';
import './App.css';
import { useState } from 'react';

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className='backToTop' onClick={scrollToTop}  style={{ display: visible ? "inline" : "none" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(255, 255, 255, 1)"}}><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"></path></svg>
            </button>
        </div>
    )
}

export default BackToTop;