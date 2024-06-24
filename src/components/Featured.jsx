import React from 'react'
import './Featured.css';
import aykb from '../assets/ad14.png';

function Featured() {
    return (
        <div className='container featuredAll'>

            <div className='featuredText'>

                <div style={{ fontSize: "60px", fontWeight: "bold", color: "orange" }}>
                    HIGHLIGHTS
                </div>

                <div style={{ fontSize: "65px", fontWeight: "bold" }}>
                    ADIDAS NMD R1 <br />
                    SHOES
                </div>

                <div style={{ fontSize: "25px" }}>
                    The radiance lives on Adidas NMD R1 Shoes, the basket ball OG that puts a fresh spin on what you know best: durable stitched overlays, clean finished and the perfect amount of flash to make you shine.
                </div>

                <div className='container featuredButton' style={{ marginTop: "10px" }}>
                    <button className='buttonPr'>Explore Product</button>
                </div>

            </div>
            <div>
                <img className='featuredImage' src={aykb} alt="" />
            </div>
        </div>
    )
}

export default Featured