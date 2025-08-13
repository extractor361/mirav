'use client'
import React from 'react'

export default function Slogan() {
    return (
        <> 
            <section className="slogan-style1">
                <div 
                    className="slogan-style1__bg" 
                    style={{ backgroundImage: "url(assets/images/backgrounds/slogan-v1-bg.jpg)" }}
                ></div>
                <div className="container">
                    <div className="row">
                        {/* Lijeva strana - tekst */}
                        <div className="col-xl-6">
                            <div className="slogan-style1__content">
                                <div className="sub-title">
                                    <h3>Provjeri svoje znanje</h3>
                                </div>
                                <div className="big-title">
                                    <h2>Online testovi</h2>
                                </div>
                                <div className="title">
                                    <h3>Pripremi se i ostvari najbolji rezultat!</h3>
                                </div>
                                <div className="text">
                                    <p>Riješi naš besplatni online test i provjeri spremnost za polaganje.</p>
                                </div>
                            </div>
                        </div>

                        {/* Desna strana - slika sa linkom */}
                        <div className="col-xl-6">
                            <div className="test-link-box" style={{ textAlign: "center" }}>
                                <a href="/test" style={{ display: "inline-block" }}>
                                    <img 
                                        src="assets/images/resources/teorija7.jpeg" 
                                        alt="Online test" 
                                        style={{ maxWidth: "100%", borderRadius: "10px" }}
                                    />
                                </a>
                                <div style={{ marginTop: "15px" }}>
                                    <a href="/test" className="btn-one">
                                        Započni test
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
