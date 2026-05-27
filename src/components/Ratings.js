import React from "react";

function Ratings(){
    return(
        <section className="rating">
            <div className="content">
            <p>TUSTED BY 15M MEMBERS</p>
            <h1>the proof <br></br> writes itself</h1>
        </div>
        <div className="stars">
            <div className="app">
                <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/rating-stars.png"></img>
                <div>
                <span id="given">4.8</span>
                <span id="overall">/5</span>
                </div>
                <p>APP STORE</p>
            </div>
            <div className="play">
                <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/rating-stars.png"></img>
                <div>
                <span id="given">4.8</span>
                <span id="overall">/5</span>
                </div>
                <p>PLAY STORE</p>
            </div>
        </div>
        </section>
    )
}

export default Ratings;