'use client'
import React from 'react'
import Link from "next/link"
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
export default function Blog_Page_Two() {
    return (
        <div className="page-wrapper boxed_wrapper course-details-page">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
                <section className="blog-style1">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-style1">
                                <div className="single-blog-style1__img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-v1-1.jpg" alt="Awesome Image"/>
                                        <div className="single-blog-style1__overlay-icon">
                                            <Link className="lightbox-image" data-fancybox="gallery"
                                                href="#">
                                                <i className="icon-zoom"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-style1__overlay-content">
                                        <div className="date-box">
                                            <h6>07. jul, 2025.</h6>
                                        </div>
                                        <div className="category">
                                            <h5>Savjeti za vozače</h5>
                                        </div>
                                        <div className="meta-box">
                                            <ul className="meta-info clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Mirjana</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-stopwatch"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>3 Minuta čitanja</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-blog-style1__title">
                                    <h3><Link href="#">5 najčešćih grešaka koje 
                                            kandidati prave.</Link></h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn3" href="/">
                                            <i className="icon-next"></i>Pročitaj više
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-style1">
                                <div className="single-blog-style1__img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-v1-2.jpg" alt="Awesome Image"/>
                                        <div className="single-blog-style1__overlay-icon">
                                            <Link className="lightbox-image" data-fancybox="gallery"
                                                href="#">
                                                <i className="icon-zoom"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-style1__overlay-content">
                                        <div className="date-box">
                                            <h6>07. jul, 2025.</h6>
                                        </div>
                                        <div className="category">
                                            <h5>Savjeti za vozače</h5>
                                        </div>
                                        <div className="meta-box">
                                            <ul className="meta-info clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Mirjana</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-stopwatch"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>1 minut čitanja</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-blog-style1__title">
                                    <h3><Link href="#">Polaganje vozačkog u Crnoj Gori: </Link></h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn3" href="/">
                                            <i className="icon-next"></i>Pročitaj više
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-style1">
                                <div className="single-blog-style1__img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-v1-3.jpg" alt="Awesome Image"/>
                                        <div className="single-blog-style1__overlay-icon">
                                            <Link className="lightbox-image" data-fancybox="gallery"
                                                href="#">
                                                <i className="icon-zoom"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-style1__overlay-content">
                                        <div className="date-box">
                                            <h6>07 jul, 2025.</h6>
                                        </div>
                                        <div className="category">
                                            <h5>Savjeti za vozače</h5>
                                        </div>
                                        <div className="meta-box">
                                            <ul className="meta-info clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>miladin</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-stopwatch"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>4 minuta čitanja</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-blog-style1__title">
                                    <h3><Link href="#">Automatski ili manuelni mjenjač 
                                                    – šta je bolje za početnike?</Link></h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn3" href="#">
                                            <i className="icon-next"></i>Pročitaj više
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-style1">
                                <div className="single-blog-style1__img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-v1-1.jpg" alt="Awesome Image"/>
                                        <div className="single-blog-style1__overlay-icon">
                                            <Link className="lightbox-image" data-fancybox="gallery"
                                                href="assets/images/blog/blog-v1-1.jpg">
                                                <i className="icon-zoom"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-style1__overlay-content">
                                        <div className="date-box">
                                            <h6>07. jul, 2025.</h6>
                                        </div>
                                        <div className="category">
                                            <h5>Savjeti za vozače</h5>
                                        </div>
                                        <div className="meta-box">
                                            <ul className="meta-info clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Mirjana</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-stopwatch"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>3 Minuta čitanja</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-blog-style1__title">
                                    <h3><Link href="/">5 najčešćih grešaka koje 
                                            kandidati prave.</Link></h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn3" href="/">
                                            <i className="icon-next"></i>Pročitaj više
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-style1">
                                <div className="single-blog-style1__img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-v1-2.jpg" alt="Awesome Image"/>
                                        <div className="single-blog-style1__overlay-icon">
                                            <Link className="lightbox-image" data-fancybox="gallery"
                                                href="assets/images/blog/blog-v1-2.jpg">
                                                <i className="icon-zoom"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-style1__overlay-content">
                                        <div className="date-box">
                                            <h6>07. jul, 2025.</h6>
                                        </div>
                                        <div className="category">
                                            <h5>Savjeti za vozače</h5>
                                        </div>
                                        <div className="meta-box">
                                            <ul className="meta-info clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Mirjana</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-stopwatch"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>1 minut čitanja</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-blog-style1__title">
                                    <h3><Link href="/">Polaganje vozačkog u Crnoj Gori: </Link></h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn3" href="/">
                                            <i className="icon-next"></i>Pročitaj više
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-style1">
                                <div className="single-blog-style1__img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-v1-3.jpg" alt="Awesome Image"/>
                                        <div className="single-blog-style1__overlay-icon">
                                            <Link className="lightbox-image" data-fancybox="gallery"
                                                href="assets/images/blog/blog-v1-3.jpg">
                                                <i className="icon-zoom"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-style1__overlay-content">
                                        <div className="date-box">
                                            <h6>07 jul, 2025.</h6>
                                        </div>
                                        <div className="category">
                                            <h5>Savjeti za vozače</h5>
                                        </div>
                                        <div className="meta-box">
                                            <ul className="meta-info clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>miladin</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-stopwatch"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>4 minuta čitanja</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-blog-style1__title">
                                    <h3><Link href="/">Automatski ili manuelni mjenjač 
                                                    – šta je bolje za početnike?</Link></h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn3" href="/">
                                            <i className="icon-next"></i>Pročitaj više
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-style1">
                                <div className="single-blog-style1__img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-v1-1.jpg" alt="Awesome Image"/>
                                        <div className="single-blog-style1__overlay-icon">
                                            <Link className="lightbox-image" data-fancybox="gallery"
                                                href="assets/images/blog/blog-v1-1.jpg">
                                                <i className="icon-zoom"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-style1__overlay-content">
                                        <div className="date-box">
                                            <h6>07. jul, 2025.</h6>
                                        </div>
                                        <div className="category">
                                            <h5>Savjeti za vozače</h5>
                                        </div>
                                        <div className="meta-box">
                                            <ul className="meta-info clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Mirjana</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-stopwatch"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>3 Minuta čitanja</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-blog-style1__title">
                                    <h3><Link href="/">5 najčešćih grešaka koje 
                                            kandidati prave.</Link></h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn3" href="/">
                                            <i className="icon-next"></i>Pročitaj više
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-style1">
                                <div className="single-blog-style1__img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-v1-2.jpg" alt="Awesome Image"/>
                                        <div className="single-blog-style1__overlay-icon">
                                            <Link className="lightbox-image" data-fancybox="gallery"
                                                href="assets/images/blog/blog-v1-2.jpg">
                                                <i className="icon-zoom"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-style1__overlay-content">
                                        <div className="date-box">
                                            <h6>07. jul, 2025.</h6>
                                        </div>
                                        <div className="category">
                                            <h5>Savjeti za vozače</h5>
                                        </div>
                                        <div className="meta-box">
                                            <ul className="meta-info clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>Mirjana</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-stopwatch"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>1 minut čitanja</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-blog-style1__title">
                                    <h3><Link href="/">Polaganje vozačkog u Crnoj Gori: </Link></h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn3" href="/">
                                            <i className="icon-next"></i>Pročitaj više
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-style1">
                                <div className="single-blog-style1__img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-v1-3.jpg" alt="Awesome Image"/>
                                        <div className="single-blog-style1__overlay-icon">
                                            <Link className="lightbox-image" data-fancybox="gallery"
                                                href="assets/images/blog/blog-v1-3.jpg">
                                                <i className="icon-zoom"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-style1__overlay-content">
                                        <div className="date-box">
                                            <h6>07 jul, 2025.</h6>
                                        </div>
                                        <div className="category">
                                            <h5>Savjeti za vozače</h5>
                                        </div>
                                        <div className="meta-box">
                                            <ul className="meta-info clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-user"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>miladin</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-stopwatch"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p>4 minuta čitanja</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-blog-style1__title">
                                    <h3><Link href="/">Automatski ili manuelni mjenjač 
                                                    – šta je bolje za početnike?</Link></h3>
                                    <div className="btn-box">
                                        <Link className="thm-btn3" href="/">
                                            <i className="icon-next"></i>Pročitaj više
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                            <div className="col-xl-12">
                                <ul className="styled-pagination pdtop30 clearfix text-center">
                                    <li className="arrow prev">
                                        <Link href="#"><span className="icon-next left"></span></Link>
                                    </li>
                                    <li className="active"><Link href="#">1</Link></li>
                                    <li><Link href="#">2</Link></li>
                                    <li><Link href="#">3</Link></li>
                                    <li className="arrow next">
                                        <Link href="#"><span className="icon-next right"></span></Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}