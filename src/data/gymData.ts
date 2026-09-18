import heroAthleteImg from '../assets/images/hero_gym_athlete_1789748406354.jpg';
import strengthAreaImg from '../assets/images/gym_strength_area_1789748418231.jpg';
import cardioCyclingImg from '../assets/images/gym_cardio_cycling_1789748430150.jpg';
import personalTrainingImg from '../assets/images/gym_personal_training_1789748441716.jpg';
import dumbbellsRackImg from '../assets/images/gym_dumbbells_rack_1789748455667.jpg';
import { ServiceItem, ProgramItem, FacilityItem, GalleryItem } from '../types';

export const GYM_DETAILS = {
  name: 'Physique Freak GYM',
  tagline: 'Train Hard. Become Unstoppable.',
  category: 'Gym / Fitness Center',
  phoneDisplay: '0321 4265565',
  phoneTel: '+923214265565',
  whatsappUrl: 'https://wa.me/923214265565',
  rating: 4.2,
  maxRating: 5.0,
  reviewsCount: 176,
  status: 'Open · Closes 12 AM',
  address: {
    street: 'Shop, Walton Rd, Shahtaj Colony, Gate Street Number 1, Milk, near Hahvery',
    locality: 'Shah Taj Colony, Lahore',
    postalCode: '54000',
    country: 'Pakistan',
    fullFormatted: 'Shop, Walton Rd, Shahtaj Colony, Gate Street Number 1, Milk, near Hahvery, Shah Taj Colony, Lahore, 54000, Pakistan',
  },
  openingHours: [
    { days: 'Monday – Saturday', hours: '6:00 AM – 12:00 AM (Midnight)' },
    { days: 'Sunday', hours: 'Special Sessions / Rest Day' },
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Physique+Freak+GYM+Walton+Road+Shahtaj+Colony+Lahore',
  images: {
    hero: heroAthleteImg,
    strength: strengthAreaImg,
    cycling: cardioCyclingImg,
    personalTraining: personalTrainingImg,
    dumbbells: dumbbellsRackImg,
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'personal-training',
    title: 'Personal Training',
    shortDesc: 'One-on-one coaching designed around your biomechanics, power output, and goals.',
    fullDesc: 'Dedicated customized programming, posture correction, progression tracking, and intensive session management.',
    features: ['Customized routine', 'Technique & form correction', 'Progress measurement', 'Accountability coach'],
    icon: 'Dumbbell',
    badge: 'Most Popular',
  },
  {
    id: 'aerobics',
    title: 'Aerobics',
    shortDesc: 'High-energy cardiovascular conditioning, core endurance, and full-body rhythm.',
    fullDesc: 'Dynamic cardio conditioning sessions focused on calorie expenditure, lung capacity, and athletic agility.',
    features: ['High-calorie burn', 'Agility & stamina', 'Group motivation', 'Dynamic tempo'],
    icon: 'Flame',
  },
  {
    id: 'cycling',
    title: 'Cycling & Cardio',
    shortDesc: 'High-intensity interval spin training to build explosive lower body power and endurance.',
    fullDesc: 'Targeted cardiovascular workouts using precision indoor cycling gear with heart-rate zone management.',
    features: ['HIIT spin sessions', 'Low-impact joint safety', 'Vascular conditioning', 'Lower body endurance'],
    icon: 'Activity',
  },
  {
    id: 'nutrition-consulting',
    title: 'Nutrition Consulting',
    shortDesc: 'Evidence-based dietary roadmaps tailored to muscle hypertrophy, fat loss, and recovery.',
    fullDesc: 'Practical, sustainable nutrition strategies tailored for local dietary habits without restrictive fads.',
    features: ['Caloric & macro targets', 'Muscle recovery plans', 'Digestive health tips', 'Weekly dietary review'],
    icon: 'Apple',
  },
  {
    id: 'youth-classes',
    title: 'Youth Classes',
    shortDesc: 'Safe, age-appropriate athletic foundations, coordination, and disciplined physical habits.',
    fullDesc: 'Guided fundamental strength, balance, and athletic agility workouts for young athletes under watchful eyes.',
    features: ['Fundamental movement patterns', 'Injury prevention focus', 'Disciplined habits', 'Youth athletic coaching'],
    icon: 'Users',
  },
  {
    id: 'online-classes',
    title: 'Online Classes',
    shortDesc: 'Real-time guided workouts and virtual training support wherever you travel.',
    fullDesc: 'Remote coaching protocols, digital check-ins, home conditioning routines, and direct WhatsApp fitness feedback.',
    features: ['Virtual session guidance', 'Home workout plans', 'WhatsApp progress checks', 'Travel-friendly routines'],
    icon: 'Video',
    badge: 'Flexible',
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'prog-1',
    number: '01',
    title: 'Strength Training',
    tagline: 'Hypertrophy & Heavy Resistance',
    description: 'Master compound lifts, barbell mechanics, and progressive overload in an equipped lifting floor.',
    targetFocus: 'Power, muscle density, bone density, and structural integrity.',
    image: strengthAreaImg,
  },
  {
    id: 'prog-2',
    number: '02',
    title: 'Cardio & Conditioning',
    tagline: 'High Output Stamina & Heart Health',
    description: 'Systematic interval training and steady-state cardiovascular conditioning to maximize metabolic rate.',
    targetFocus: 'Endurance, lung capacity, and metabolic resilience.',
    image: cardioCyclingImg,
  },
  {
    id: 'prog-3',
    number: '03',
    title: 'Personal Training',
    tagline: 'Private One-on-One Protocol',
    description: 'Focused biomechanical supervision with customized progression curves for accelerated breakthroughs.',
    targetFocus: 'Individual goals, form mastery, and disciplined accountability.',
    image: personalTrainingImg,
  },
  {
    id: 'prog-4',
    number: '04',
    title: 'Aerobics',
    tagline: 'Rhythm, Agility & Core Burn',
    description: 'Fast-paced rhythmic cardio movements designed to elevate energy levels and tone full-body musculature.',
    targetFocus: 'Agility, coordination, stamina, and explosive energy.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'prog-5',
    number: '05',
    title: 'Cycling',
    tagline: 'Precision RPM Spin Training',
    description: 'Rhythm and torque intervals that challenge lower-body endurance without unnecessary joint impact.',
    targetFocus: 'Leg power, anaerobic capacity, and athletic performance.',
    image: cardioCyclingImg,
  },
  {
    id: 'prog-6',
    number: '06',
    title: 'Online Classes',
    tagline: 'Connected Coaching Across Borders',
    description: 'Structured remote workouts, exercise video breakdowns, and virtual check-ins for busy schedules.',
    targetFocus: 'Flexibility, remote accountability, and habit consistency.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'fac-1',
    title: 'Heavy Strength & Free Weights Zone',
    description: 'Equipped with heavy Olympic barbells, full dumbbell racks, power cages, cable stations, and heavy lifting platforms.',
    image: dumbbellsRackImg,
    highlights: ['Full range of dumbbells', 'Olympic bars & plates', 'Power racks & benches', 'Cable crossover towers'],
  },
  {
    id: 'fac-2',
    title: 'Dedicated Cardio & Cycling Studio',
    description: 'High-performance stationary spin cycles and cardiovascular machines for aerobic conditioning and endurance training.',
    image: cardioCyclingImg,
    highlights: ['Indoor spin bikes', 'Treadmills & ellipticals', 'Targeted cardio zones', 'High-ventilation airflow'],
  },
  {
    id: 'fac-3',
    title: 'Functional Conditioning Floor',
    description: 'Open workout floor dedicated to bodyweight exercises, plyometrics, kettlebell circuits, and dynamic agility drills.',
    image: strengthAreaImg,
    highlights: ['Kettlebell stations', 'Core & plyometric space', 'Stretching & warm-up zone', 'Shock-absorbing flooring'],
  },
  {
    id: 'fac-4',
    title: 'Clean Washroom & Facility Care',
    description: 'Hygienic, maintained washroom and toilet facilities for member comfort before and after intense sessions.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Sanitized daily', 'Fresh water & essentials', 'Member convenience', 'Clean changing space'],
  },
  {
    id: 'fac-5',
    title: 'Online Training Support Hub',
    description: 'Digital connectivity and structured remote workout programs enabling members to train consistently even when traveling.',
    image: personalTrainingImg,
    highlights: ['Virtual session guides', 'WhatsApp direct communication', 'Weekly workout logs', 'Progress tracking'],
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Athletic Conditioning Area',
    category: 'Training',
    image: heroAthleteImg,
    aspect: 'landscape',
  },
  {
    id: 'gal-2',
    title: 'Precision Barbells & Plate Stacks',
    category: 'Equipment',
    image: strengthAreaImg,
    aspect: 'landscape',
  },
  {
    id: 'gal-3',
    title: 'Spinning & Cardio Fleet',
    category: 'Atmosphere',
    image: cardioCyclingImg,
    aspect: 'square',
  },
  {
    id: 'gal-4',
    title: 'Heavy Dumbbell Racks',
    category: 'Strength',
    image: dumbbellsRackImg,
    aspect: 'portrait',
  },
  {
    id: 'gal-5',
    title: 'Personal Coaching Station',
    category: 'Training',
    image: personalTrainingImg,
    aspect: 'square',
  },
  {
    id: 'gal-6',
    title: 'Olympic Lifting Bay',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    aspect: 'landscape',
  },
  {
    id: 'gal-7',
    title: 'High-Energy Conditioning Floor',
    category: 'Atmosphere',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    aspect: 'portrait',
  },
  {
    id: 'gal-8',
    title: 'Functional Free Weight Station',
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    aspect: 'landscape',
  },
];

export const REVIEWS_HIGHLIGHTS = [
  {
    theme: 'Atmosphere & Intensity',
    quote: 'Great focused environment for serious lifting. The equipment is solid, and the atmosphere keeps you motivated every minute.',
    verified: 'Google Review Verified Member'
  },
  {
    theme: 'Personal Guidance',
    quote: 'Trainers pay attention to your form and push you safely. Best gym experience on Walton Road Lahore.',
    verified: 'Google Review Verified Member'
  },
  {
    theme: 'Extended Hours & Convenience',
    quote: 'Staying open until midnight (12 AM) is a lifesaver for people with demanding work schedules. Clean facility and welcoming vibe.',
    verified: 'Google Review Verified Member'
  }
];
