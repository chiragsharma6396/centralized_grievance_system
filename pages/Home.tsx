import React from 'react';
import { ArrowRight, Activity, FileText, Send, CheckCircle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onNavigateToSubmit: () => void;
  onNavigateToTrack: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateToSubmit, onNavigateToTrack }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-24 md:pt-32 md:pb-40 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Live: Citizen Grievance Portal 2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Centralized Grievance <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Redressal System
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            A unified online platform where citizens can file complaints for any government service. 
            The system automatically redirects complaints to the correct official government portal, 
            so you don't need to remember where to complain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link
              to="/submit"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Submit New Complaint
            </Link>
            <Link
              to="/track"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 font-bold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Track Application
            </Link>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We've simplified the process. Your complaint reaches the right desk in 5 simple steps.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              
              <StepCard 
                number="01"
                title="Select Service"
                description="Choose the department and service related to your grievance."
                icon={<Activity className="text-blue-600" size={28} />}
              />
              
              <StepCard 
                number="02"
                title="Fill Details"
                description="Provide necessary details and attach supporting documents."
                icon={<FileText className="text-blue-600" size={28} />}
              />
              
              <StepCard 
                number="03"
                title="Auto-Redirect"
                description="System routes it to the specific government official portal."
                icon={<Send className="text-blue-600" size={28} />}
              />
              
              <StepCard 
                number="04"
                title="Get ID"
                description="Receive a unique Tracking ID via SMS and Email instantly."
                icon={<Search className="text-blue-600" size={28} />}
              />
              
              <StepCard 
                number="05"
                title="Track Status"
                description="Monitor the real-time status of your complaint resolution."
                icon={<CheckCircle className="text-blue-600" size={28} />}
              />

            </div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="p-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">1.2M+</div>
                    <div className="text-slate-600 font-medium">Complaints Resolved</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
                    <div className="text-slate-600 font-medium">Government Departments</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-slate-600 font-medium">Support & Monitoring</div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

const StepCard: React.FC<{ number: string; title: string; description: string; icon: React.ReactNode }> = ({ number, title, description, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      <div className="group-hover:text-white transition-colors duration-300">
        {React.cloneElement(icon as React.ReactElement<any>, { className: "group-hover:text-white text-blue-600 transition-colors" })}
      </div>
    </div>
    <div className="absolute top-6 right-6 text-4xl font-black text-slate-100 -z-10 group-hover:text-blue-50 transition-colors">{number}</div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </div>
);

export default Home;