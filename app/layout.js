import "@/node_modules/react-modal-video/css/modal-video.css";
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import "/assets/css/style.css";
import "/assets/css/responsive.css";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* CSS fajlovi iz public foldera */}
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/responsive.css" />
            </head>
            <body className="body-bg-1">{children}</body>
        </html>
    )
}
