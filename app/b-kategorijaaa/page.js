'use client'
import React from 'react'
import Link from "next/link"
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import Courses from '@/components/sections/home4/Courses';
export default function Courses_Page_One() {

    return (
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Courses Modern">
                <section className="overview-style1">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h4>Overview</h4>
                            </div>
                            <h2>Elevate Your Confidence <br/>on the Road</h2>
                        </div>
                        <div className="row">

                            <div className="col-xl-6 col-lg-6">
                                <div className="overview-style1__content">
                                    <div className="text">
                                        <p>
                                            Circumstances and owing to the claims of duty or the obligations of
                                            business it will frequently occur that pleasures.
                                        </p>
                                        <p>
                                            Every pain avoided but in certain circumstances and owing to the
                                            claims of duty or the obligations of business it will frequently occur
                                            that pleasures have to be repudiated and annoyances accepted
                                            selection he rejects pleasures to secure.
                                        </p>
                                    </div>
                                    <div className="recommended-course">
                                        <div className="icon">
                                            <i className="icon-double-chevron"></i>
                                        </div>
                                        <div className="content">
                                            <h3>Find the best course for you.</h3>
                                            <p>Courses to discover which one fits your needs perfectly.</p>
                                            <div className="btn-box">
                                                <Link href="/courses-details"><i className="icon-next"></i>Recommended Courses</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="overview-style1__right">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="single-overview-style1">
                                                <div className="single-overview-style1__inner text-center">
                                                    <div className="icon-box">
                                                        <span className="icon-automatic-transmission"><span
                                                                className="path1"></span><span className="path2"></span><span
                                                                className="path3"></span><span className="path4"></span>
                                                        </span>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3><Link href="/courses-details">Automatic</Link></h3>
                                                        <p>On the other hand, we denounce with righteous all indignation and
                                                            dislike.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="single-overview-style1">
                                                <div className="single-overview-style1__inner text-center">
                                                    <div className="icon-box">
                                                        <span className="icon-gear-shift"><span className="path1"></span><span
                                                                className="path2"></span>
                                                        </span>
                                                    </div>
                                                    <div className="content-box">
                                                        <h3><Link href="/courses-details">Manual</Link></h3>
                                                        <p>These cases are all perfectly simple and easy to distinguish.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Courses/>
            </Layout>
        </div>
    )
}