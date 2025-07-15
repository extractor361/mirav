import Link from "next/link"

export default function SidebarPopup({ isPopup, handlePopup }) {
    return (
        <>

            <div className={`xs-sidebar-group info-group info-sidebar ${isPopup ? "popup-visible" : ""}`}>
                <div className="xs-overlay xs-bg-black"></div>
                <div className="xs-sidebar-widget">
                    <div className="sidebar-widget-container">
                        <div className="widget-heading">
                            <Link href="#" className="close-side-widget"onClick={handlePopup}>X</Link>
                        </div>
                        <div className="sidebar-textwidget">
                            <div className="sidebar-info-contents">
                                <div className="content-inner">
                                    <div className="logo">
                                        <Link href="/">
                                            <img src="assets/images/resources/mirav_horizontal_tamno plavi.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="content-box">
                                        <h3>Vozite Sigurno & Pametno sa Nama</h3>
                                        <div className="inner-text">
                                            <p>
                                                Svaka neprijatnost se može izbeći, ali u određenim okolnostima i zbog zahteva dužnosti ili poslovnih obaveza često se dešava da se zadovoljstva odbace, a neprijatnosti prihvate — pametnim izborom odbacujemo trenutna zadovoljstva da bismo obezbedili sigurnu budućnost.


                                            </p>
                                        </div>
                                    </div>
                                    <div className="sidebar-contact-info">
                                        <h3>Kontaktirajte nas</h3>
                                        <ul>
                                            <li>
                                                <div className="inner">
                                                    <div className="text">
                                                        <p>Vojina Katnića br. 21/1 <br/>Podgorica, Crna Gora</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="text">
                                                        <p><Link href="mailto:info@example.com">office@mirav.me</Link></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="text">
                                                        <p><Link href="tel:+38268877949">+382 68877949</Link></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="text">
                                                        <p>Radno vrijeme 08:00 – 20:00</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="side-content-newsletter-box">
                                        <h3>Pretplati se</h3>
                                        <form action="/" method="post">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Unesite vašu adresu ovdje" required=""/>
                                                <button className="btn-one" type="submit">
                                                    <span className="txt">
                                                        Prijavi se sada
                                                        <i className="icon-right"></i>
                                                    </span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="thm-social-link">
                                        <ul className="clearfix">
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-facebook"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-instagram-logo"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-youtube"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
