import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="main-menu__list">
                <li><Link href="/">Naslovna</Link></li>

                <li><Link href="/o-nama">O nama</Link>
                    
                </li>
                <li className="dropdown"><Link href="/b-kategorija">B kategorija</Link>
                <ul>
                    <li><Link href="/cjenovnik">Cjenovnik</Link></li>
                </ul>
                    
                </li> 
                  
                
                <li className="dropdown"><Link href="#">Testovi</Link>
                <ul>
                    <li><Link href="/test">Teorijski test 1</Link></li>
                </ul>
                    
                </li> 
               
                <li ><Link href="/blog">Blog</Link>
                    
                </li> 
                <li ><Link href="/galerija">Galerija</Link>
                    
                </li> 
                <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
        </>
    )
}
