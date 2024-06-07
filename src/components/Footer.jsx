import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h2>ABOUT ADIDAS</h2>
                        <h1 className="list-unstyled">
                            <li>News</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Prupose</li>
                            <li>Sustainability</li>
                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h2>GET HELP</h2>
                        <ui className="list-unstyled">
                            <li>Order Status</li>
                            <li>Shipping & Delivery</li>
                            <li>Payment Options</li>
                            <li>Gift Card Balance</li>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Blog</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h2>COMPANY</h2>
                        <ui className="list-unstyled">
                            <li>Gift Cards</li>
                            <li>Promotions</li>
                            <li>Find A Store</li>
                            <li>Signup</li>
                            <li>Nike Jouneral</li>
                            <li>Send Us Feeback</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;