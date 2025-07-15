'use client'
import React from 'react'
import Link from "next/link"

export default function Blog() {
    return (
        <> 

            <section className="blog-style2">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-4">
                            <div className="blog-style2__title">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>Blog Post</h4>
                                    </div>
                                    <h2>Latest from Blog Post</h2>
                                </div>
                                <div className="text-box">
                                    <p>Don't stop here, More blog posts ahead.</p>
                                </div>
                                <div className="btn-box1">
                                    <Link href="#"><i className="icon-next"></i>View All Post</Link>
                                </div>
                                <div className="shape1">
                                    <img src="assets/images/shapes/blog-v2-1.png" alt="shape"/>
                                </div>
                                <div className="newsletter-box">
                                    <h3>Newsletter</h3>
                                    <p>Stay connected for future updates.</p>
                                </div>
                                <div className="blog-style2__form">
                                    <form action="#" method="post">
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email Address" required=""/>
                                        </div>
                                        <div className="checked-box1">
                                            <input type="checkbox" name="skipper1" id="skipper"/>
                                            <label for="skipper">
                                                <span></span>I agree the terms & conditions
                                            </label>
                                        </div>
                                        <div className="btn-box">
                                            <button className="submit btn-one">
                                                <span className="txt">Subscribe Us</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <ul className="blog-style2__inner">

                                <li className="blog-style2__single">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="blog-style2__single-img">
                                                <img src="assets/images/blog/blog-v2-1.jpg" alt="image"/>
                                                <div className="date-box">
                                                    <p>05 Apr, 24</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="blog-style2__single-content">
                                                <div className="blog-style2__single-content-top">
                                                    <div className="category">
                                                        <h6>Driving Tips</h6>
                                                    </div>
                                                    <div className="meta-box">
                                                        <ul className="meta-info clearfix">
                                                            <li>
                                                                <div className="icon">
                                                                    <i className="icon-user"></i>
                                                                </div>
                                                                <div className="text">
                                                                    <p>D.Ebenezer</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <i className="icon-stopwatch"></i>
                                                                </div>
                                                                <div className="text">
                                                                    <p>3 Mins Read</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/blog-4">Top 10 Tips for Passing Your Road Test.</Link>
                                                    </h3>
                                                </div>
                                                <div className="text-box">
                                                    <p>Business will frequently occur that pleasures have to be
                                                        repudiated...</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link className="thm-btn3" href="/blog-single">
                                                        <i className="icon-next"></i>Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="blog-style2__single">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="blog-style2__single-img">
                                                <img src="assets/images/blog/blog-v2-2.jpg" alt="image"/>
                                                <div className="date-box">
                                                    <p>22 Mar, 24</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="blog-style2__single-content">
                                                <div className="blog-style2__single-content-top">
                                                    <div className="category">
                                                        <h6>Safety Tips</h6>
                                                    </div>
                                                    <div className="meta-box">
                                                        <ul className="meta-info clearfix">
                                                            <li>
                                                                <div className="icon">
                                                                    <i className="icon-user"></i>
                                                                </div>
                                                                <div className="text">
                                                                    <p>K.Milton</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <i className="icon-stopwatch"></i>
                                                                </div>
                                                                <div className="text">
                                                                    <p>2 Mins Read</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/blog-4">Navigating Roundabouts: A Beginner's
                                                            Guide.</Link></h3>
                                                </div>
                                                <div className="text-box">
                                                    <p>Matters to this principle of selection rejects pleasures secure other
                                                        greater....</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link className="thm-btn3" href="/blog-single">
                                                        <i className="icon-next"></i>Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
