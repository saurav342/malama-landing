import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src="/images/logo.png" alt="Malama" className="h-12 mb-4" />
          <p className="text-gray-400">
            Authoritatively simplify open-source resources via backend visualize business e-markets.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary-green">Services</h3>
          <div className="space-y-2 text-gray-400">
            <p>25 Street, 145 City Road New Town</p>
            <p>DD14, USA</p>
            <p>+1234567789</p>
            <p>needhelp@company.com</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary-green">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Sign up for alerts, our latest blogs, thoughts, and insights.
          </p>
          <div className="space-y-3">
            <input 
              type="email" 
              placeholder="Your Email address" 
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary-green"
            />
            <button className="w-full bg-primary-green text-white py-2 rounded hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">© Copyright 2024 by kodesolution.com</p>
        <a href="/privacy-policy" className="text-primary-green hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer; 