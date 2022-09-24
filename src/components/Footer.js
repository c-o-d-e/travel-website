import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation
                    deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form action="">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="footer-input"
                        />
                        <Button buttonStyle="btn-outline">Subscription</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/travel-website">Testimonials</Link>
                        <Link to="/travel-website">Careers</Link>
                        <Link to="/travel-website">Investors</Link>
                        <Link to="/travel-website">Terms of Service</Link>
                    </div>
                    <div class="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/travel-website">Contact</Link>
                        <Link to="/travel-website">Support</Link>
                        <Link to="/travel-website">Destinations</Link>
                        <Link to="/travel-website">Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/travel-website">Submit Video</Link>
                        <Link to="/travel-website">Ambassadors</Link>
                        <Link to="/travel-website">Agency</Link>
                        <Link to="/travel-website">Influencer</Link>
                    </div>
                    <div class="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/travel-website">Instagram</Link>
                        <Link to="/travel-website">Facebook</Link>
                        <Link to="/travel-website">Youtube</Link>
                        <Link to="/travel-website">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/travel-website" className="social-logo">
                            TRAVELIO
                            <i className="fa-solid fa-plane-departure"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRAVELIO © 2022</small>
                    <div className="social-icons">
                        <Link
                            to="/travel-website"
                            target="_blank"
                            aria-label="Facebook"
                            className="social-icon-link facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                            to="/travel-website"
                            target="_blank"
                            aria-label="Instagram"
                            className="social-icon-link instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                            class="social-icon-link youtube"
                            to="/travel-website"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i class="fab fa-youtube" />
                        </Link>
                        <Link
                            class="social-icon-link twitter"
                            to="/travel-website"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i class="fab fa-twitter" />
                        </Link>
                        <Link
                            class="social-icon-link linkedin"
                            to="/travel-website"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i class="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
