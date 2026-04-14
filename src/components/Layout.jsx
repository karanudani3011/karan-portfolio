import Navbar from './Navbar';
import Footer from './Footer';

// Use this to wrap the main application so Navbar and Footer are always present
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-darkBg transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-24">
                {/* pt-24 sets padding-top to account for the fixed navbar */}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
