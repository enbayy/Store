import React from 'react'
import './Featured.css';
import aykb from '../assets/aykb2.png';

function Featured() {
    return (
        <div className='container featuredAll'>

            <div className='featuredText'>

                <div style={{ fontSize: "60px", fontWeight: "bold", color: "orange" }}>
                    HIGHLIGHTS
                </div>

                <div style={{ fontSize: "70px", fontWeight: "bold" }}>
                    NIKE SNEAKERS AIR
                </div>

                <div style={{ fontSize: "70px", fontWeight: "bold" }}>
                    LANCING SHOES
                </div>

                <div style={{ fontSize: "25px" }}>
                    The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.
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