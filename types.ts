export interface NavItem {
  label: string;
  path: string;
}

export const DEPARTMENTS = [
  "Municipal Corporation",
  "Public Works Department (PWD)",
  "Electricity Board",
  "Water Supply & Sewerage",
  "Police / Cyber Crime",
  "Health & Sanitation",
  "Transport Department",
  "Education Department"
];

export const SERVICES = {
  "Municipal Corporation": ["Garbage Collection", "Street Light Issue", "Property Tax", "Birth/Death Certificate"],
  "Public Works Department (PWD)": ["Road Repair", "Bridge Maintenance", "Government Building Issue"],
  "Electricity Board": ["Power Failure", "Billing Issue", "New Connection Request"],
  "Water Supply & Sewerage": ["No Water Supply", "Contaminated Water", "Blocked Sewerage"],
  "Police / Cyber Crime": ["Theft Reporting", "Cyber Fraud", "Noise Pollution", "Traffic Violation"],
  "Health & Sanitation": ["Public Hospital Issue", "Food Safety", "Vector Control"],
  "Transport Department": ["Bus Service", "Driving License", "Vehicle Registration"],
  "Education Department": ["School Admission", "Scholarship Issue", "Teacher Attendance"]
};