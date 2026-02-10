import "@/node_modules/react-modal-video/css/modal-video.css";
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import "@/styles/style.css";
import "@/styles/responsive.css";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
           
            <body className="body-bg-1">{children}</body>
        </html>
    )
}
