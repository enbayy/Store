import React from 'react'
import "./Head.css";
import adidas from "../assets/adidas.png"
import aykb from "../assets/aykb1.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { useRef } from 'react';
import clip from "../assets/clip.mp4"
import clip2 from "../assets/clip2.mp4"
import clip3 from "../assets/clip3.mp4"

function Head() {

    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

    const handleMouseOver = (videoRef) => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseOut = (videoRef) => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Videoyu başa sarar
        }
    };

    return (
        <div className='headAll'>
            <div className='container headText'>
                Play With Electric Adidas
            </div>
            <div className='headRow'>
                <div className='container headImages'>
                    <div
                        className="container video"
                        onMouseOver={() => handleMouseOver(videoRef1)}
                        onMouseOut={() => handleMouseOut(videoRef1)}
                    >
                        <video
                            ref={videoRef1}
                            className="video"
                            muted
                            loop
                        >
                            <source src={clip} type="video/mp4" />
                        </video>
                    </div>

                    <div
                        className="container video"
                        onMouseOver={() => handleMouseOver(videoRef2)}
                        onMouseOut={() => handleMouseOut(videoRef2)}
                    >
                        <video
                            ref={videoRef2}
                            className="video"
                            muted
                            loop
                        >
                            <source src={clip2} type="video/mp4" />
                        </video>
                    </div>

                    <div
                        className="container video"
                        onMouseOver={() => handleMouseOver(videoRef3)}
                        onMouseOut={() => handleMouseOut(videoRef3)}
                    >
                        <video
                            ref={videoRef3}
                            className="video"
                            muted
                            loop
                        >
                            <source src={clip3} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className='container headMid'>

                    <div className='container headButton'>
                        <button className='buttonPr'>Explore Product</button>
                    </div>

                    <div className='container'>
                        <img className='headShoe' src={aykb} alt="aykb1.png" />
                    </div>
                </div>

                <div className='container headIcons'>
                    <FaFacebookSquare className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaFacebookMessenger className='icon' />
                </div>


            </div>
        </div>
    )
}

export default Head