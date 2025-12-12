import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogIn } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignupClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-blue-500/30 transition-all">
              C
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800 tracking-tight">CGRS</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Grievance Redressal</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/') ? 'text-blue-600' : 'text-slate-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/submit" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/submit') ? 'text-blue-600' : 'text-slate-600'}`}
            >
              Submit Complaint
            </Link>
            <Link 
              to="/track" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive('/track') ? 'text-blue-600' : 'text-slate-600'}`}
            >
              Track Application
            </Link>
            
            {/* More Dropdown */}
            <div className="relative group cursor-pointer">
              <span className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2">
                More <ChevronDown size={14} />
              </span>
              <div className="absolute top-full right-0 w-48 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 p-2">
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg">FAQ</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg">Help Center</a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg">Contact Us</a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onLoginClick}
              className="text-slate-600 hover:text-blue-700 font-medium text-sm px-4 py-2 transition-colors"
            >
              Log In
            </button>
            <button 
              onClick={onSignupClick}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className={`block text-base font-medium ${isActive('/') ? 'text-blue-600' : 'text-slate-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/submit" 
              className={`block text-base font-medium ${isActive('/submit') ? 'text-blue-600' : 'text-slate-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Submit Complaint
            </Link>
            <Link 
              to="/track" 
              className={`block text-base font-medium ${isActive('/track') ? 'text-blue-600' : 'text-slate-600'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Track Application
            </Link>
            <div className="border-t border-slate-100 pt-4 mt-4 flex flex-col gap-3">
              <button 
                onClick={() => { onLoginClick(); setIsMobileMenuOpen(false); }}
                className="w-full text-center text-slate-600 font-medium py-2 border border-slate-200 rounded-lg hover:bg-slate-50"
              >
                Log In
              </button>
              <button 
                onClick={() => { onSignupClick(); setIsMobileMenuOpen(false); }}
                className="w-full text-center bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 shadow-md"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;