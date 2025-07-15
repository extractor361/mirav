'use client'
import React from 'react'
import Link from "next/link"

export default function Contact() {
    return (
        <> 

            <section className="contact-style1">
                <div className="contact-style1__bg" style={{ backgroundImage: "url(assets/images/shapes/contact-style1__bg.png)" }}>
                </div>
                <div className="container">
                    <div className="contact-style1__inner">
                        <div className="contact-style1__img1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2000ms">
                            <img className="float-bob-x" src="assets/images/resources/contact-v1-1.png" alt="image"/>
                        </div>
                        <div className="contact-style1__img2 wow slideInRight" data-wow-delay="100ms"
                            data-wow-duration="2000ms">
                            <img className="float-bob-x" src="assets/images/resources/contact-v1-2.png" alt="image"/>
                        </div>
                        <div className="contact-style1__content text-center">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h4>Contact</h4>
                                </div>
                                <h2>Need Help? Contact us!</h2>
                            </div>
                            <div className="phone-box">
                                <div className="icon">
                                    <i className="icon-dial-pad"></i>
                                </div>
                                <h3><Link href="tel:66120003456">+66 12 000 3456</Link></h3>
                            </div>
                            <div className="text">
                                <p>Drive Master, 54 Thurston Avenue, Ithaca, NY 10001.</p>
                                <p><span>Ring During: </span>Mon - Sat: 8am to 6pm.</p>
                            </div>
                            <div className="btn-box">
                                <Link className="btn-one" href="tel:66120003456">
                                    <span className="txt">
                                        Get call Back
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="contact-style1__form">
                            <form id="contact-style1__form" name="contact-style1_form" action="#" method="post">

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="select-box clearfix">
                                                <select className="wide">
                                                    <option data-display="Reason for Contact">Reason for Contact
                                                    </option>
                                                    <option value="1">Reason for Contact 01</option>
                                                    <option value="2">Reason for Contact 02</option>
                                                    <option value="3">Reason for Contact 03</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="text" name="form_Address" id="formAddress"
                                                    placeholder="Address"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="text" name="form_name" id="formName" placeholder="Name"
                                                    required=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="email" name="form_email" id="formEmail" placeholder="Email"
                                                    required=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="text" name="form_phone" id="formPhone" placeholder="Phone"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <textarea name="form_message" id="formMessage"
                                                    placeholder="Message (If any)" required=""></textarea>
                                            </div>
                                            <button className="btn-box" type="submit" data-loading-text="Please wait...">
                                                <span className="txt">
                                                    <i className="icon-next"></i>
                                                    Send
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
