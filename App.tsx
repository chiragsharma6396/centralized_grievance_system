import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubmitComplaint from './pages/SubmitComplaint';
import TrackApplication from './pages/TrackApplication';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Footer from './components/Footer';

const AppContent: React.FC<{
  openLogin: () => void;
  openSignup: () => void;
}> = ({ openLogin, openSignup }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLoginClick={openLogin} onSignupClick={openSignup} />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home onNavigateToSubmit={() => window.location.hash = '#/submit'} onNavigateToTrack={() => window.location.hash = '#/track'} />} />
          <Route path="/submit" element={<SubmitComplaint />} />
          <Route path="/track" element={<TrackApplication />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <Router>
      <AppContent 
        openLogin={() => setIsLoginOpen(true)} 
        openSignup={() => setIsSignupOpen(true)} 
      />
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSwitchToSignup={() => {
          setIsLoginOpen(false);
          setIsSignupOpen(true);
        }}
      />
      
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </Router>
  );
};

export default App;