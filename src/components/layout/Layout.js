import Footer from './Footer';
import Header from './Header';
import WhatsAppFloat from '../common/WhatsAppFloat';
const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      {/* <Navbar /> */}
      <main className="main-content">
        {children}
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Layout; 