'use client'
import React from 'react'
import Link from "next/link"
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import Location from '@/components/sections/home2/Location'
export default function Contact_Page() {
    return (
        <div className="page-wrapper boxed_wrapper course-details-page">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Kontaktiraj Nas">
                <section className="contact-info-style3">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h4>Kontakt</h4>
                            </div>
                            <h2>Treba vam pomoć? Kontaktiraj nas!</h2>
                        </div>
                        <div className="row">
                            
                            <div className="col-xl-6 col-lg-6">
                                <div className="single-contact-info-style3">
                                    <div className="icon">
                                        <span className="icon-call-center"><span className="path1"></span><span
                                                className="path2"></span></span>
                                    </div>
                                    <div className="text">
                                        <h4>Kontakt</h4>
                                    </div>
                                    <div className="content-box">
                                        <div className="phone-email">
                                            <p>
                                                <span>KOntakt telefon:</span>
                                                <Link href="tel:+382  068444101 "> +382  068444101 </Link>
                                            </p>
                                            <p>
                                                <span>Email:</span>
                                                <Link href="mailto:office@mirav.me"> office@mirav.me</Link>
                                            </p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="tel:6612000456"><i className=" icon-next"></i>Pošaljite upit</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-6 col-lg-6">
                                <div className="single-contact-info-style3">
                                    <div className="icon">
                                        <span className="icon-location"><span className="path1"></span><span className="path2"></span><span
                                                className="path3"></span><span className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span><span className="path8"></span><span
                                                className="path9"></span></span>
                                    </div>
                                    <div className="text">
                                        <h4>Adresa</h4>
                                    </div>
                                    <div className="content-box">
                                        <div className="phone-email">
                                            <p>
                                                21/1 Vojina Katnića, <br/>
                                                Podgorica 81000
                                            </p>
                                        </div>
                                        <div className="btn-box btn-box--2">
                                            <Link
                                                href="https://www.google.com/maps/search/Drive+Master,+54+Thurston+Avenue,%3Cbr%3E+Ithaca,+NY+10001./@42.4542057,-76.4913903,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">
                                                <i className="icon-next"></i>
                                                Google Mapa
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-6 col-lg-6">
                                <div className="single-contact-info-style3">
                                    <div className="icon">
                                        <span className="icon-time"><span className="path1"></span><span className="path2"></span><span
                                                className="path3"></span><span className="path4"></span><span
                                                className="path5"></span></span>
                                    </div>
                                    <div className="text">
                                        <h4>Radni Sati</h4>
                                    </div>
                                    <div className="content-box">
                                        <div className="phone-email">
                                            <p><span> Pon - Pet:</span>08:00 do 20:00</p>
                                            <p><span>Sub:</span> 08:00 do 16:00</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/about"><i className="icon-next"></i>Zakazivanje</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-6 col-lg-6">
                                <div className="single-contact-info-style3">
                                    <div className="icon">
                                        <span className="icon-faq"><span className="path1"></span><span className="path2"></span><span
                                                className="path3"></span><span className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span></span>
                                    </div>
                                    <div className="text">
                                        <h4>Faq</h4>
                                    </div>
                                    <div className="content-box">
                                        <div className="phone-email">
                                            <p>Brzo pronađite rješenja u našoj često postavljanoj temi za korisničku podršku.</p>
                                        </div>
                                        <div className="btn-box btn-box--2">
                                            <Link href="/faq"><i className="icon-next"></i>Pročitaj više </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="contact-info-style3-social-links text-center">
                            <div className="title">
                                <h3>Društvene mreže</h3>
                            </div>
                            <ul className="clearfix">
                                <li>
                                    <Link href="https://www.facebook.com/">
                                        <span className="icon-facebook"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://x.com/i/flow/login">
                                        <i className="icon-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                        <span className="icon-instagram-logo"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/">
                                        <span className="icon-youtube"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.whatsapp.com/">
                                        <span className="icon-whatsapp"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
                
                <Location/>
                <section id='main' className="main-contact-form">
                    <div className="container">

                        <div className="sec-title withtext text-center">
                            <div className="sub-title">
                                <h4>Pošalji poruku</h4>
                            </div>
                            <h2>Pošaljite nam poruku odmah</h2>
                            <div className="text">
                                <p>Naši posvećeni stručnjaci spremni su vam pomoći u svakom koraku</p>
                            </div>
                        </div>

                        <div className="main-contact-form__inner">
                            <div className="contact-form">
                                <form id="contact-form" name="contact_form" className="default-form2"
                                    action="assets/inc/sendmail.php" method="post">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="form-group">
                                                <div className="label-box">
                                                    <label for="formName">Ime</label>
                                                </div>
                                                <div className="input-box">
                                                    <input type="text" name="form_name" id="formName"
                                                        placeholder="Unesite vaše ime" required=""/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="label-box">
                                                    <label for="formPhone">Telefon</label>
                                                </div>
                                                <div className="input-box">
                                                    <input type="text" name="form_phone" id="formPhone"
                                                        placeholder="Unesite kontakt telefon"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="label-box">
                                                    <label for="formEmail">Email</label>
                                                </div>
                                                <div className="input-box">
                                                    <input type="email" name="form_email" id="formEmail"
                                                        placeholder="Email adresa" required=""/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="label-box">
                                                    <label for="formSubject">Predmet</label>
                                                </div>
                                                <div className="input-box">
                                                    <input type="text" name="form_subject" id="formSubject"
                                                        placeholder="Unesite predmet"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="form-group">
                                                <div className="label-box">
                                                    <label for="formMessage">Poruka</label>
                                                </div>
                                                <div className="input-box">
                                                    <textarea name="form_message" id="formMessage" placeholder="Pišite ovdje..."
                                                        required=""></textarea>
                                                </div>
                                            </div>

                                            <div className="button-box">
                                                <input id="form_botcheck" name="form_botcheck" className="form-control"
                                                    type="hidden"/>
                                                <button className="btn-one" type="submit" data-loading-text="Please wait...">
                                                    <span className="txt">
                                                        Pošaljite vaš upit
                                                    </span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}