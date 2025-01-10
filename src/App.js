import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import BecomeADriver from './pages/BecomeADriver';
import YourNextRide from './pages/YourNextRide';
import ReactGA from 'react-ga';
import './styles/App.css';

const TRACKING_ID = "G-93Q8JNK534";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/become-a-driver" element={<BecomeADriver />} />
          <Route path="/your-next-ride" element={<YourNextRide />} />
          {/* <Route path="/careers" element={<Careers />} /> */}

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
