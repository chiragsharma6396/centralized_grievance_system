import React, { useState } from 'react';
import { Search, Loader2, CheckCircle, Clock, FileText } from 'lucide-react';

const TrackApplication: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setIsSearching(true);
    setShowResult(false);

    // Simulate API delay
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Track Your Application</h2>
        <p className="text-slate-600 mt-2">Enter your Complaint or Tracking ID below to check the current status.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-slate-400" />
            </div>
            <input 
              type="text" 
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Ex: CGRS-2023-8902" 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-lg"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={isSearching}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 min-w-[140px]"
          >
            {isSearching ? <Loader2 className="animate-spin" /> : 'Track Status'}
          </button>
        </form>
      </div>

      {showResult && (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="bg-blue-50 border-b border-blue-100 p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Tracking ID</p>
                <p className="text-xl font-bold text-slate-800">{trackingId}</p>
              </div>
              <div className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold flex items-center gap-2">
                <Clock size={16} /> In Process
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="mt-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <FileText size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Application Received</h4>
                  <p className="text-slate-600">Your complaint details have been verified and forwarded to the concerned department.</p>
                </div>
              </div>

              <div className="relative pl-5 ml-5 border-l-2 border-slate-100 space-y-8 pb-2">
                {/* Timeline Item 1 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 ring-4 ring-green-50" />
                  <p className="text-xs text-slate-500 mb-1">Today, 10:30 AM</p>
                  <p className="text-slate-800 font-medium">Forwarded to Public Works Department (PWD)</p>
                </div>

                 {/* Timeline Item 2 */}
                 <div className="relative">
                  <div className="absolute -left-[29px] top-1 h-4 w-4 rounded-full border-2 border-white bg-slate-300" />
                  <p className="text-xs text-slate-500 mb-1">Expected: Tomorrow</p>
                  <p className="text-slate-800 font-medium">Officer Assignment</p>
                </div>
              </div>

              <div className="mt-8 bg-slate-50 rounded-xl p-4 text-center">
                <p className="text-slate-700 font-medium">
                  Your complaint is being processed. Expected update soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackApplication;