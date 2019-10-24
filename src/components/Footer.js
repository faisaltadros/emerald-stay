import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            <div class="container-fluid other-content">
                <div class="row">
                    <div class="col">
                        <div class="lg-text">STAY IN TOUCH</div>
                        <div class="normal-text">
                            <input className="subscribe-input" placeholder="EMAIL" type="text" />
                        </div>
                        <div class="btn-holder">
                            <a href="#" class="cr-btn ex-padding">Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="container-fluid footer">
                <div class="row">
                    <div class="col">
                        <div class="lg-text">
                            <span>MADE WITH</span><br />
                            <span><i className="fas fa-heart" style={{paddingBottom: '15px'}}></i></span><br />
                            <span>IN SWITZERLAND</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="contact-info-holder">
                            <div class="title">Call us</div>
                            <div class="contact-info">+33 1 88220111</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="contact-info-holder">
                            <div class="title">E-mail</div>
                            <div class="contact-info"><a href="mailto:info@emeraldstay.com">info@emeraldstay.com</a></div>
                            <div class="social-media">
                                <div class="social-link-holder"><a href="#">Instagram</a></div>
                                <div class="social-link-holder"><a href="#">Twitter</a></div>
                                <div class="social-link-holder"><a href="#">Facebook</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer
