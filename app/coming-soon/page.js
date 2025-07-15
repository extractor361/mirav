'use client'
import React from 'react'
import CountdownTimer from '@/components/elements/CountdownTimer';
import "app/favicon.ico"
export default function CommingSoon_Page() {

    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 2000);

    return (
        <div className="page-wrapper boxed_wrapper">
            <section className="coming-soon-page-style1 full-height">
                <div className="coming-soon-page-style1__bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/coming-soon-page-style1-bg.jpg)" }}></div>
                <div className="coming-soon-page-style1__content">
                    <div className="inner">
                        <div className="big-title">We're Coming Soon...</div>
                        <div className="timer-box clearfix">
                            <div className="countdown-timer">
                                <div className="default-coundown">
                                    <div className="box">
                                        <div className="countdown time-countdown-two"><CountdownTimer targetDate={targetDate.toISOString()} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <p>
                                Website is under construction. We'll be here soon with new<br/>
                                awesome site, Subscribe to be notified.
                            </p>
                        </div>
                        <div className="subscribe-box-style1">
                            <form className="subscribe-form" action="#">
                                <input placeholder="Enter your email address" type="email"/>
                                <button type="submit">
                                    Submit now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}