
export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">x</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="h" className="letters-loading">
                                h
                            </span>
                            <span data-text-preloader="i" className="letters-loading">
                                i
                            </span>
                            <span data-text-preloader="r" className="letters-loading">
                                r
                            </span>
                            <span data-text-preloader="i" className="letters-loading">
                                i
                            </span>
                            <span data-text-preloader="n" className="letters-loading">
                                n
                            </span>
                            <span data-text-preloader="g" className="letters-loading">
                                g
                            </span>
                            <span data-text-preloader="h" className="letters-loading">
                                h
                            </span>
                            <span data-text-preloader="u" className="letters-loading">
                                u
                            </span>
                            <span data-text-preloader="b" className="letters-loading">
                                b
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
