'use client'
import React from 'react'
import Link from "next/link"

export default function Choose() {
    return (
        <> 

            <section className="why-choose-style1">
                <div className="container">
                    <div className="why-choose-style1__inner">
                        <div className="row">

                            <div className="col-xl-6">
                                <div className="why-choose-style1__content">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="title-box">
                                                <div className="icon">
                                                    <span className="icon-license"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span><span className="path7"></span><span
                                                            className="path8"></span><span className="path9"></span><span
                                                            className="path10"></span>
                                                    </span>
                                                </div>
                                                <div className="title">
                                                    <h3><Link href="#">Licencirana auto škola</Link></h3>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                            <div className="text-box">
                                                <p>Ponosno radimo kao zvanično licencirana škola, u skladu sa svim važećim zakonima i propisima. Povjerenje gradimo kroz profesionalnu obuku i visok standard rada.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="title-box">
                                                <div className="icon">
                                                    <span className="icon-taxi-driver"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span>
                                                    </span>
                                                </div>
                                                <div className="title">
                                                    <h3><Link href="#">Iskusni instruktori</Link></h3>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                            <div className="text-box">
                                                <p>Naš tim čine stručni i posvećeni instruktori sa višegodišnjim iskustvom u obuci vozača. Sa njima, svaki kandidat stiče sigurnost, znanje i samopouzdanje za volanom.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="title-box">
                                                <div className="icon">
                                                    <span className="icon-schedule"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span>
                                                    </span>
                                                </div>
                                                <div className="title">
                                                    <h3><Link href="#">Fleksibilno 
zakazivanje</Link></h3>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                            <div className="text-box">
                                                <p>Razumijemo vaš dinamičan raspored. Zato nudimo fleksibilne termine obuke koji se prilagođavaju vašim obavezama i tempu učenja.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="why-choose-style1__img clearfix">
                                    <div className="big-title">Naša Stručnost</div>
                                    <div className="why-choose-style1__img-shape">
                                        <img src="assets/images/shapes/oblik.png" alt="Shape"/>
                                    </div>
                                    <div className="why-choose-style1__img-box">
                                        <img className="float-bob-y" src="assets/images/resources/volan golfica.png"
                                            alt="image"/>
                                        <div className="logo-box rotatescale">
                                            <Link href="/services-details">
                                                <img src="assets/images/resources/mirav_simbol_bijeli.png" alt="logo"/>
                                            </Link>
                                        </div>
                                        <div className="overlay-text">
                                            <h5>Vožnja ka<br/> ostvarenju snova!</h5>
                                            <div className="shape1 float-bob-x">
                                                <img src="assets/images/shapes/why-choose-style1__shape1.png" alt=""/>
                                            </div>
                                            <div className="shape2 float-bob-x">
                                                <img src="assets/images/shapes/why-choose-style1__shape2.png" alt=""/>
                                            </div>
                                        </div>
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
