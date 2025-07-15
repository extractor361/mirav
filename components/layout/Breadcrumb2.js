import Link from "next/link"

export default function Breadcrumb2({ breadcrumbTitle2 }) {
    return (
        <>

            <section className="breadcrumb-style1">
                <div className="breadcrumb-style1-bg" style={{ backgroundImage: "url(assets/images/breadcrumb/breadcrumb-2.jpg)" }}>
                    <div className="breadcrumb-style1-bg__overlay"></div>
                </div>
                <div className="container">
                    <div className="inner-content">
                        <div className="title">
                            <h2>{breadcrumbTitle2}</h2>
                        </div>
                        <div className="breadcrumb-menu">
                            <ul className="clearfix">
                                <li><Link href="/">Home</Link></li>
                                <li><span className="icon-next"></span></li>
                                <li className="active">{breadcrumbTitle2}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
