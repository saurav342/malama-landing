import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import DriveWithUs from './pages/DriveWithUs';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/become-a-driver" element={<DriveWithUs />} />
          <Route path="/your-next-ride" element={<DriveWithUs />} />
          {/* <Route path="/careers" element={<Careers />} /> */}

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
