

export default function Search({ isSidebar, handleSidebar }) {
    return (
        <>
            

            <div id="search-popup" className={`search-popup ${isSidebar ? "popup-visible" : ""}`}>
                <div className="search-popup__overlay search-toggler">
                    <div className="search-popup__close-btn" onClick={handleSidebar}>
                        <span className="fa fa-times"></span>
                    </div>
                </div>
                <div className="search-popup__content">
                    <form action="/">
                        <label for="search" className="sr-only">Pretraži ovdje</label>
                        <input type="text" id="search" placeholder="Pretraži ovdje..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <i className="icon-search"></i>
                        </button>
                    </form>
                </div>
            </div>




        </>
    )
}
