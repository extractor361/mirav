import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>

            <section className="breadcrumb-style1">
                <div className="breadcrumb-style1-bg" style={{ backgroundImage: "url(assets/images/resources/breadcrumb-main.jpg)" }}>
                    <div className="breadcrumb-style1-bg__overlay"></div>
                </div>
                <div className="container">
                    <div className="inner-content">
                        <div className="title">
                            <h2>{breadcrumbTitle}</h2>
                        </div>
                        <div className="breadcrumb-menu">
                            <ul className="clearfix">
                                <li><Link href="/">Naslovna</Link></li>
                                <li><span className="icon-next"></span></li>
                                <li className="active">{breadcrumbTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
