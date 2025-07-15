'use client'
import React from 'react'
import CounterUp from "@/components/elements/CounterUp"

export default function Fact() {
    return (
        <> 

            <section className="fact-counter-style1">
                <div className="fact-counter-style1__bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/facts-counter-v1-1.jpg)" }}>
                </div>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-counter-style1">
                                <div className="single-fact-counter-style1__category">
                                    <h6>Iskustvo</h6>
                                </div>
                                <div className="single-fact-counter-style1__content">
                                    <div className="count-outer count-box">
                                        <span className="count-text"><CounterUp end={15} /></span>
                                        <i className="icon-plus-sign"></i>
                                    </div>
                                    <div className="text">
                                        <p>Godina u edukaciji</p>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-steering-wheel-1"><span className="path1"></span><span
                                                className="path2"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-counter-style1">
                                <div className="single-fact-counter-style1__category">
                                    <h6>Obuka</h6>
                                </div>
                                <div className="single-fact-counter-style1__content">
                                    <div className="count-outer count-box">
                                        <span className="count-text"><CounterUp end={2} /></span>
                                        <i className="k">k</i>
                                    </div>
                                    <div className="text">
                                        <p>Obučenih vozača</p>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-celebrity"><span className="path1"></span><span className="path2"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-counter-style1">
                                <div className="single-fact-counter-style1__category">
                                    <h6>Poligoni</h6>
                                </div>
                                <div className="single-fact-counter-style1__content">
                                    <div className="count-outer count-box">
                                        <span className="count-text"><CounterUp end={5} /></span>
                                    </div>
                                    <div className="text">
                                        <p>Dostupnih poligona</p>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-map"><span className="path1"></span><span className="path2"></span><span
                                                className="path3"></span><span className="path4"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-counter-style1">
                                <div className="single-fact-counter-style1__category">
                                    <h6>Instruktori</h6>
                                </div>
                                <div className="single-fact-counter-style1__content">
                                    <div className="count-outer count-box">
                                        <span className="count-text"><CounterUp end={5} /></span>
                                    </div>
                                    <div className="text">
                                        <p>Profesionalnih i licenciranih instruktora</p>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-taxi-driver"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span>
                                        </span>
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
