
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white" onClick={() => alert('Live chat would open here')}>Live Chat</a></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Documentation</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">System Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Video Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">User Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">API Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Best Practices</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/students" className="text-gray-300 hover:text-white">Student Management</Link></li>
              <li><Link to="/teachers" className="text-gray-300 hover:text-white">Teacher Portal</Link></li>
              <li><Link to="/reports" className="text-gray-300 hover:text-white">Reports</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Settings</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">support@edusystem.com</li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
              <li className="text-gray-300">Mon-Fri 9AM-6PM EST</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 EduSystem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
