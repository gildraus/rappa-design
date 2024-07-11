import Footer from "../ui/footer";
import Navbar from "../ui/navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="header-homepage">
                <Navbar />
            </div>
            <div className="body-homepage">
                {children}
            </div>
            <div className="footer-homepage">
                <Footer />
            </div>
        </div>
    );
}
