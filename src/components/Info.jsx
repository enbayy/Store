import React from 'react'
import './Info.css';
import aykb from '../assets/ad13.png';

function Info() {
    return (
        <div className='container infoAll'>

            <div>
                <img className='infoImage' src={aykb} alt="" />
            </div>

            <div className='infoText'>

                <div style={{ fontSize: "60px", fontWeight: "bold", color: "orange" }}>
                    HIGHLIGHTS
                </div>

                <div style={{ fontSize: "60px", fontWeight: "bold" }}>
                    ADIDAS TUBULAR <br />
                    WITH LIMITLESS CHOICES
                </div>

                <div style={{ fontSize: "25px" }}>
                    Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.
                </div>

                <div className='container headButton' style={{marginTop:"30px"}}>
                    <button className='buttonPr'>Explore Product</button>
                </div>
            </div>
        </div>
    )
}

export default Info