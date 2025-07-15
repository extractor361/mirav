'use client'
import React from 'react'
import Link from "next/link"

export default function About() {
    return (
        <> 

            <section className="about-style1">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-6">
                            <div className="about-style1-img">
                                <div className="inner">
                                    <img src="assets/images/resources/Mirav-2062_compressed.webp" alt="image"/>
                                </div>
                                <div className="about-style1-total-leaners">
                                    <ul className="about-style1-img-link clearfix">
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/about/about-v1-2.jpg" alt="image"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/about/about-v1-3.jpg" alt="image"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-box">
                                                <Link href="#">
                                                    <i className="icon-plus-sign"></i>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="title text-center">
                                        <h5>2k+ sigurnih <br/>Vozača</h5>
                                    </div>
                                </div>
                                <div className="about-style1-experience">
                                    <div className="title">
                                        <h1>12</h1>
                                    </div>
                                    <div className="text">
                                        <h5>Godina<br/> Tradicije</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="about-style1-content">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>O nama</h4>
                                    </div>
                                    <h2>Zajedno gradimo sigurnije puteve.</h2>
                                </div>
                                <div className="about-style1-text">
                                    <p>
                                        Auto škola Mirav osnovana je 2013. godine u Podgorici kao porodična firma. Tada smo započeli misiju osposobljavanja budućih vozača sa dva vozila i dva instruktora. <br/>Danas, zahvaljujući vašem povjerenju, škola raspolaže sa 5 vozila i 5 instruktora, koji su do sada na naše drumove poslali više od 2000 odličnih vozača.
                                    </p>
                                </div>
                                <div className="about-style1-achivements">
                                    <div className="about-style1-logo">
                                        <img src="assets/images/resources/Screenshot 2025-07-04 190544.png" alt="logo"/>
                                    </div>
                                    <div className="about-style1-achivements-title">
                                        <h4>licencirana <br/>Auto Škola</h4>
                                        <h5>2013</h5>
                                    </div>
                                    <div className="about-style1-trophy">
                                        <img src="assets/images/about/about-v1-trophy.png" alt="Trophy"/>
                                    </div>
                                </div>
                                <div className="about-style1-authorized">
                                    <div className="about-style1-signature">
                                        <img src="assets/images/about/about-v1-signature.png" alt="Signature"/>
                                    </div>
                                    <div className="about-style1-authorized-title">
                                        <h4>Mirjana Mira Vešović,</h4>
                                        <span>Osnivač</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
