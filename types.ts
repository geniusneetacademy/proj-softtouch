export type Language = 'en' | 'mr';

export interface Certification {
  srNo: number;
  particulars: string;
  particularsMr: string;
  issuingAuthority: string;
  date: string;
  certificateNo: string;
  validUntil?: string;
  scope?: string;
  verificationLink?: string;
  category: 'Quality' | 'Legal' | 'Government' | 'Safety';
}

export interface EVehicleModel {
  id: string;
  name: string;
  nameMr: string;
  contactNumber: string;
  dimensions: string;
  loadCapacity: string;
  motor: string;
  battery: string;
  chargingTime: string;
  charger: string;
  material: string;
  range: string;
  speed: string;
  idealFor: string;
  idealForMr: string;
  badge?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  nameMr: string;
  category: 'hygiene' | 'waste' | 'weighbridge' | 'facility' | 'vehicle' | 'safety';
  categoryLabel: string;
  categoryLabelMr: string;
  shortDesc: string;
  shortDescMr: string;
  description: string;
  descriptionMr: string;
  features: string[];
  featuresMr: string[];
  modelsOrCapacities: string[];
  specifications?: Record<string, string>;
  imagePlaceholderCategory: string;
  popular?: boolean;
  governmentApproved?: boolean;
}

export interface BranchOffice {
  city: string;
  cityMr: string;
  type: 'Factory' | 'Branch Office' | 'Registered Office' | 'Commercial Office' | 'Service Network';
  address: string;
  phone?: string;
  highlight?: boolean;
}
