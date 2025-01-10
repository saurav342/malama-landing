import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import BecomeADriver from './pages/BecomeADriver';
import YourNextRide from './pages/YourNextRide';
import ReactGA from 'react-ga4';
import './styles/App.css';
import { useEffect } from 'react';

const TRACKING_ID = "G-93Q8JNK534";
ReactGA.initialize(TRACKING_ID);

// Create a component to handle route changes
function RouteTracker() {
  const location = useLocation();
  
  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search,
      title: document.title
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/become-a-driver" element={<BecomeADriver />} />
          <Route path="/your-next-ride" element={<YourNextRide />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
