'use client'
import React from 'react'

export default function Slogan() {
    return (
        <> 

            <section className="slogan-style1">
                <div className="slogan-style1__bg" style={{ backgroundImage: "url(assets/images/backgrounds/slogan-v1-bg.jpg)" }}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="slogan-style1__content">
                                <div className="sub-title">
                                    <h3>Ostvari uspjeh</h3>
                                </div>
                                <div className="big-title">
                                    <h2>Položi test </h2>
                                </div>
                                <div className="title">
                                    <h3>iz prvog puta!</h3>
                                </div>
                                <div className="text">
                                    <p>Saznaj koja obuka ti najviše odgovara i rezerviši svoj termin već danas.</p>
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
                                                    <input type="text" name="form_name" placeholder="Ime i Prezime"
                                                        required=""/>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="text" name="form_phone" placeholder="Broj telefona"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="text" name="form_Address"
                                                        placeholder="Adresa"/>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="select-box clearfix">
                                                    <select className="wide">
                                                        <option data-display="Service">Upit</option>
                                                       
                                                    </select>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="col-xl-12">
                                            <div className="button-box">
                                                <input id="form_botcheck" name="form_botcheck" className="form-control"
                                                    type="hidden" value=""/>
                                                <button disabled className="btn-one" type="submit" data-loading-text="Please wait...">
                                                    <span className="txt">
                                                        Zakaži termin
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

        </>
    )
}
