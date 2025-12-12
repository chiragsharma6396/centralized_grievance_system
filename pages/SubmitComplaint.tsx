import React, { useState } from 'react';
import { Send, Upload, Info } from 'lucide-react';
import { DEPARTMENTS, SERVICES } from '../types';

const SubmitComplaint: React.FC = () => {
  const [department, setDepartment] = useState<string>('');
  const [service, setService] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Complaint Submitted Successfully! \n\nYour grievance has been routed to the respective department.");
    // Reset form logic would go here
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartment(e.target.value);
    setService(''); // Reset service when department changes
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Send className="text-blue-400" />
            File a New Complaint
          </h2>
          <p className="text-slate-400 mt-2 text-sm">Fill out the details below accurately for faster processing.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          
          {/* Section 1: Personal Details */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2 mb-6">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="email@address.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+91 98765 43210" />
              </div>
            </div>
          </div>

          {/* Section 2: Complaint Classification */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2 mb-6">Grievance Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Department</label>
                <select 
                  value={department} 
                  onChange={handleDepartmentChange}
                  required 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Department</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Service Type</label>
                <select 
                  value={service} 
                  onChange={(e) => setService(e.target.value)}
                  required 
                  disabled={!department}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer disabled:bg-slate-100 disabled:text-slate-400"
                >
                  <option value="">Select Service</option>
                  {department && SERVICES[department as keyof typeof SERVICES].map((srv) => (
                    <option key={srv} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Complaint Details */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2 mb-6">Complaint Details</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Complaint Title</label>
                <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Brief subject of your complaint" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Detailed Description</label>
                <textarea required rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Describe your grievance in detail..." />
              </div>
              
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Supporting Documents</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group relative">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <div className="flex text-sm text-slate-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-500">PNG, JPG, PDF up to 10MB</p>
                    {file && <p className="text-sm text-green-600 font-semibold mt-2">Selected: {file.name}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex items-center justify-end gap-4">
            <button type="button" className="px-6 py-3 text-slate-600 font-medium hover:bg-slate-100 rounded-lg transition-colors">Cancel</button>
            <button 
              type="submit" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all transform active:scale-[0.98]"
            >
              Submit Complaint
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SubmitComplaint;