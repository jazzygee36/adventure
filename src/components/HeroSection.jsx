import React from "react";
import "./HeroSection.css";

import Button from './Button.css'


function HeroSection() {
    return (
        <div className='hero-container'>
            <div className="row hero-title">
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>

                <div className="hero-btns">
                    <button className="btn btn-primary started">GET STARTED <i class="fa fa-play-circle-o"></i></button>
                    <button className="btn btn-secondary triller">WATCH TRILLER</button>
                </div>

            </div>
        </div>

    )
}
export default HeroSection