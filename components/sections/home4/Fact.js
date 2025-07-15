'use client'
import React from 'react'
import CounterUp from "@/components/elements/CounterUp"

export default function Fact() {
    return (
        <> 

            <section className="fact-counter-style1 fact-counter-style2">
                <div className="fact-counter-style1__bg fact-counter-style2__bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/facts-counter-v1-1.jpg)" }}>
                </div>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-fact-counter-style1">
                                <div className="single-fact-counter-style1__category">
                                    <h6>Experience</h6>
                                </div>
                                <div className="single-fact-counter-style1__content single-fact-counter-style2__content">
                                    <div className="count-outer count-box">
                                        <span className="count-text"><CounterUp end={16} /></span>
                                        <i className="icon-plus-sign"></i>
                                    </div>
                                    <div className="text">
                                        <p>Years of Driving Education</p>
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
                                    <h6>Leaners</h6>
                                </div>
                                <div className="single-fact-counter-style1__content single-fact-counter-style2__content">
                                    <div className="count-outer count-box">
                                        <span className="count-text"><CounterUp end={18} /></span>
                                        <i className="k">k</i>
                                    </div>
                                    <div className="text">
                                        <p>Poeples Trained by our Institute</p>
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
                                    <h6>Service Areas</h6>
                                </div>
                                <div className="single-fact-counter-style1__content single-fact-counter-style2__content">
                                    <div className="count-outer count-box">
                                        <span className="count-text"><CounterUp end={34} /></span>
                                    </div>
                                    <div className="text">
                                        <p>Accessible Locations Nationwide</p>
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
                                    <h6>Instructors</h6>
                                </div>
                                <div className="single-fact-counter-style1__content single-fact-counter-style2__content">
                                    <div className="count-outer count-box">
                                        <span className="count-text"><CounterUp end={290} /></span>
                                    </div>
                                    <div className="text">
                                        <p>Skilled and Certified Instructors</p>
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
