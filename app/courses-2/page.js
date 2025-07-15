'use client'
import React from 'react'
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import Package from '@/components/sections/home3/Package'
import Partner from '@/components/sections/home2/Partner'
export default function Courses_Page_Two() {

    return (
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Courses Future">
                <Package/>
                <section className="slogan-style1 slogan-style1--1">
                    <div className="slogan-style1__bg" style={{ backgroundImage: "url(assets/images/backgrounds/slogan-v1-bg2.jpg)" }}>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="slogan-style1__content">
                                    <div className="sub-title">
                                        <h3>Drive Success</h3>
                                    </div>
                                    <div className="big-title">
                                        <h2>Pass Your Test</h2>
                                    </div>
                                    <div className="title">
                                        <h3>on the First Attempt!</h3>
                                    </div>
                                    <div className="text">
                                        <p>Check out which of our courses would be most suitable for you.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="appointment-form-style1">
                                    <form id="appointment-form-style1" name="appointment_form" action="#" method="post">
                                        <ul className="row">
                                            <li className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input type="text" name="form_name" placeholder="Name"
                                                            required=""/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input type="text" name="form_phone" placeholder="Ph Num"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-box">
                                                        <input type="text" name="form_Address"
                                                            placeholder="Address"/>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="select-box clearfix">
                                                        <select className="wide">
                                                            <option data-display="Service">Service</option>
                                                            <option value="1">Driving Courses</option>
                                                            <option value="2">Driving Licence</option>
                                                            <option value="3">Vehicle Insurance</option>
                                                            <option value="4">Road Safty Guide</option>
                                                            <option value="5">Instructor Training</option>
                                                            <option value="6">Online Training</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="col-xl-12">
                                                <div className="button-box">
                                                    <input id="form_botcheck" name="form_botcheck" className="form-control"
                                                        type="hidden" value=""/>
                                                    <button className="btn-one" type="submit" data-loading-text="Please wait...">
                                                        <span className="txt">
                                                            Make an Appointment
                                                        </span>
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Partner/>
            </Layout>
        </div>
    )
}