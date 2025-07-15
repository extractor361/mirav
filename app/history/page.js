'use client'
import React from 'react'
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
export default function History_Page() {

    return (
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="History">
                <section className="history-style1">
                    <div className="container">
                        <div className="history-style1__content">
                            <div className="history-style1__content-border-line"></div>
                            <div className="row">

                                <div className="col-xl-6 col-lg-6">
                                    <div className="history-style1__content-inner">
                                        <ul>
                                            <li className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1000ms">
                                                <div className="single-history-style1-round-box"></div>
                                                <div className="single-history-style1">
                                                    <div className="year">2008</div>
                                                    <div className="date-box">
                                                        <div className="inner">
                                                            <h3>10</h3>
                                                            <h4>Jan</h4>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h2>Founded</h2>
                                                        <p>Nor again is there anyone who loves pursues or desire to obtain pain
                                                            itself, because it is pain.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                                <div className="single-history-style1-round-box"></div>
                                                <div className="single-history-style1">
                                                    <div className="year">2012</div>
                                                    <div className="date-box">
                                                        <div className="inner">
                                                            <h3>21</h3>
                                                            <h4>Sep</h4>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h2>Expanded Curriculum</h2>
                                                        <p>Our power of choice is untrammelled when nothing prevents our being
                                                            able to like best.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1000ms">
                                                <div className="single-history-style1-round-box"></div>
                                                <div className="single-history-style1">
                                                    <div className="year">2015</div>
                                                    <div className="date-box">
                                                        <div className="inner">
                                                            <h3>08</h3>
                                                            <h4>May</h4>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h2>5,000th Graduate</h2>
                                                        <p>Take a trivial example, which of us ever undertakes laborious
                                                            physical exercises to obtain some advantages.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6">
                                    <div className="history-style1__content-inner right">
                                        <ul>
                                            <li className="wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                                                <div className="single-history-style1-round-box right"></div>
                                                <div className="single-history-style1 single-history-style1--right">
                                                    <div className="year">2009</div>
                                                    <div className="date-box">
                                                        <div className="inner">
                                                            <h3>15</h3>
                                                            <h4>Mar</h4>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h2>First Milestone</h2>
                                                        <p>Take a trivial example, which of us ever undertakes laborious
                                                            physical exercises to obtain some advantages.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1000ms">
                                                <div className="single-history-style1-round-box right"></div>
                                                <div className="single-history-style1 single-history-style1--right">
                                                    <div className="year">2015</div>
                                                    <div className="date-box">
                                                        <div className="inner">
                                                            <h3>06</h3>
                                                            <h4>Jan</h4>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h2>Technology Integration</h2>
                                                        <p>Every pain avoided. But in certainowing to the claims of duty or the
                                                            obligations of business it will frequently.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="wow fadeInRight" data-wow-delay="500ms" data-wow-duration="1000ms">
                                                <div className="single-history-style1-round-box right"></div>
                                                <div className="single-history-style1 single-history-style1--right">
                                                    <div className="year">2025</div>
                                                    <div className="date-box">
                                                        <div className="inner">
                                                            <h3>21</h3>
                                                            <h4>Mar</h4>
                                                        </div>
                                                    </div>
                                                    <div className="content-box">
                                                        <h2>Today</h2>
                                                        <p>Nor again is there anyone who loves pursues or desire to obtain pain
                                                            itself, because it is pain.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}