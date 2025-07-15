import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
import "public/assets/css/responsive.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
export const metadata = {
    title: 'Auto Škola Mirav',
    description: 'Veb platforma auto škole MIrav',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="body-bg-1">{children}</body>
        </html>
    )
}
