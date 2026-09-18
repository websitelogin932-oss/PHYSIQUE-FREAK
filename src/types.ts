export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
  badge?: string;
}

export interface ProgramItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  targetFocus: string;
  image: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Equipment' | 'Atmosphere' | 'Training' | 'Strength';
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  goal: string;
}
