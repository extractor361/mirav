
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (

                <div className="scroll-to-top">
                    <div>
                        <div className="scroll-top-inner">
                            <div className="scroll-bar-text">
                                <a className="scroll-to-target" href="#top">
                                    <span className="icon-down-arrow"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}