'use client'
import React from 'react'
import Link from "next/link"

export default function Error() {

    return (
        <>
            <section className="error-page full-height">
                <div className="error-page__bg" style={{ backgroundImage: "url(assets/images/backgrounds/error-page-bg.jpg)" }}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-content text-center">
                                <div className="big-title wow fadeInDown animated" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <h2 data-hover="404">404</h2>
                                </div>
                                <div className="title wow fadeInDown animated" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <h2>Page not found</h2>
                                </div>
                                <div className="text">
                                    <p>Try refining your search or use the navigation below to return
                                        <br/>to the main home page..</p>
                                </div>
                                <div className="btns-box wow slideInUp animated" data-wow-delay="200ms"
                                    data-wow-duration="1500ms">
                                    <Link className="btn-one" href="/">
                                        <span className="txt">Back to Home Page</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
