'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Location from '@/components/sections/home2/Location'

export default function Contact_Page() {
    const [formData, setFormData] = useState({
        ime: '',
        kontakt: '',
        email: '',
        subject: '',
        message: ''
    })
    const [statusMessage, setStatusMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatusMessage('')

        try {
            const res = await fetch('https://miravapibackend.online/api/kontaktForma', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                setStatusMessage('✅ Poruka je uspješno poslata!')
                setFormData({
                    ime: '',
                    kontakt: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            } else {
                setStatusMessage('❌ Došlo je do greške prilikom slanja.')
            }
        } catch (error) {
            setStatusMessage('❌ Server nije dostupan. Pokušajte ponovo.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Head>
                <title>Kontakt – Auto škola Mirav Podgorica | Prijava za obuku</title>

                <meta
                    name="description"
                    content="Kontaktirajte Auto školu Mirav u Podgorici – prijava za B kategoriju, informacije o obuci, cijene i termini. Pozovite nas ili pošaljite poruku online."
                />

                <meta
                    name="keywords"
                    content="kontakt auto škola Podgorica, auto škola Mirav kontakt, škola vožnje Podgorica, prijava za vožnju"
                />

                <meta property="og:title" content="Kontakt – Auto škola Mirav Podgorica" />
                <meta
                    property="og:description"
                    content="Kontaktirajte Auto školu Mirav – prijava za obuku, informacije o terminima i polaganju vozačkog ispita."
                />
                <meta property="og:url" content="https://mirav.me/kontakt" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://mirav.me/assets/images/resources/Mirav-2096_compressed.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kontakt – Auto škola Mirav Podgorica" />
                <meta
                    name="twitter:description"
                    content="Prijavite se za obuku u Auto školi Mirav. Kontaktirajte nas za informacije i termine."
                />
                <meta
                    name="twitter:image"
                    content="https://mirav.me/assets/images/resources/Mirav-2096_compressed.webp"
                />
            </Head>

            <div className="page-wrapper boxed_wrapper course-details-page">
                <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Kontaktiraj Nas">

                    <section className="contact-info-style3">
                        <div className="container">
                            <div className="sec-title text-center">
                                <div className="sub-title">
                                    <h4>Kontakt</h4>
                                </div>

                                <h1>Kontaktirajte Auto školu Mirav u Podgorici</h1>
                            </div>

                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="single-contact-info-style3">
                                        <div className="icon">
                                            <span className="icon-call-center"></span>
                                        </div>
                                        <div className="text">
                                            <h4>Kontakt</h4>
                                        </div>
                                        <div className="content-box">
                                            <div className="phone-email">
                                                <p>
                                                    <span>Kontakt telefon:</span>
                                                    <Link href="tel:+382068444101"> +382 068 444 101 </Link>
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
                                            <span className="icon-location"></span>
                                        </div>
                                        <div className="text">
                                            <h4>Adresa</h4>
                                        </div>
                                        <div className="content-box">
                                            <div className="phone-email">
                                                <p>
                                                    21/1 Vojina Katnića, <br />
                                                    Podgorica 81000
                                                </p>
                                            </div>
                                            <div className="btn-box btn-box--2">
                                                <Link href="https://www.google.com/maps">
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
                                            <span className="icon-time"></span>
                                        </div>
                                        <div className="text">
                                            <h4>Radni Sati</h4>
                                        </div>
                                        <div className="content-box">
                                            <div className="phone-email">
                                                <p><span>Pon - Pet:</span> 08:00 do 15:00</p>
                                                <p><span>Subotom i nedeljom:</span> Ne radimo </p>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="/kontakt"><i className="icon-next"></i>Zakazivanje</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6">
                                    <div className="single-contact-info-style3">
                                        <div className="icon">
                                            <span className="icon-faq"></span>
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
                                    <li><Link href="https://www.facebook.com/as.mirav/"><span className="icon-facebook"></span></Link></li>
                                    <li><Link href="https://www.instagram.com/auto_skola_mirav_/?hl=en"><span className="icon-instagram-logo"></span></Link></li>
                                    <li><Link href="https://wa.me/38268444101"><span className="icon-whatsapp"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <Location />

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
                                    <form onSubmit={handleSubmit} className="default-form2">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="form-group">
                                                    <div className="label-box">
                                                        <label htmlFor="ime">Ime</label>
                                                    </div>
                                                    <div className="input-box">
                                                        <input type="text" name="ime" id="ime" placeholder="Unesite vaše ime" value={formData.ime} onChange={handleChange} required />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="label-box">
                                                        <label htmlFor="kontakt">Telefon</label>
                                                    </div>
                                                    <div className="input-box">
                                                        <input type="text" name="kontakt" id="kontakt" placeholder="Unesite kontakt telefon" value={formData.kontakt} onChange={handleChange} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="label-box">
                                                        <label htmlFor="email">Email</label>
                                                    </div>
                                                    <div className="input-box">
                                                        <input type="email" name="email" id="email" placeholder="Email adresa" value={formData.email} onChange={handleChange} required />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="label-box">
                                                        <label htmlFor="subject">Predmet</label>
                                                    </div>
                                                    <div className="input-box">
                                                        <input type="text" name="subject" id="subject" placeholder="Unesite predmet" value={formData.subject} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6">
                                                <div className="form-group">
                                                    <div className="label-box">
                                                        <label htmlFor="message">Poruka</label>
                                                    </div>
                                                    <div className="input-box">
                                                        <textarea name="message" id="message" placeholder="Pišite ovdje..." value={formData.message} onChange={handleChange} required></textarea>
                                                    </div>
                                                </div>

                                                <div className="button-box">
                                                    <button className="btn-one" type="submit" disabled={loading}>
                                                        <span className="txt">{loading ? 'Slanje...' : 'Pošaljite vaš upit'}</span>
                                                    </button>
                                                </div>

                                                {statusMessage && (
                                                    <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{statusMessage}</p>
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </Layout>
            </div>
        </>
    )
}
