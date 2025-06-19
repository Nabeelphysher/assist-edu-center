
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">EduSystem Support</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/students" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Students</Link>
            <Link to="/teachers" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Teachers</Link>
            <Link to="/reports" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Reports</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
