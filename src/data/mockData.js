// 20 Unsplash images (all free-to-use)
export const IMAGES = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",  // 0 crowd concert
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",  // 1 conference hall
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",  // 2 event setup
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",  // 3 festival lights
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",  // 4 speaker on stage
  "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=800&q=80",  // 5 tech talk
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",  // 6 DJ party
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",  // 7 networking
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",  // 8 stage lights
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",  // 9 gala dinner
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",  // 10 happy crowd
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",  // 11 workshop
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",  // 12 meeting
  "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",  // 13 team work
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",  // 14 business
  "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800&q=80",  // 15 woman speaker
  "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80",  // 16 art gallery
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",  // 17 food fest
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",  // 18 startup
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",  // 19 remote work
];

export const CATEGORIES = [
  { id: "music",      label: "Music",       icon: "🎵", color: "#f9a8d4" },
  { id: "tech",       label: "Tech",        icon: "💻", color: "#93c5fd" },
  { id: "food",       label: "Food",        icon: "🍽️", color: "#86efac" },
  { id: "art",        label: "Art",         icon: "🎨", color: "#fde68a" },
  { id: "business",   label: "Business",    icon: "💼", color: "#c4b5fd" },
  { id: "sports",     label: "Sports",      icon: "⚽", color: "#fdba74" },
  { id: "wellness",   label: "Wellness",    icon: "🧘", color: "#6ee7b7" },
  { id: "networking", label: "Networking",  icon: "🤝", color: "#f9a8d4" },
];

export const EVENTS = [
  {
    id: "1",
    title: "Neon Horizon Music Festival",
    category: "music",
    date: "May 15, 2025",
    time: "6:00 PM",
    location: "Bengaluru Palace Grounds",
    price: 1500,
    image: IMAGES[0],
    featured: true,
    description: "Three stages, 40+ artists, and an unforgettable night under the stars. Neon Horizon brings together the best of indie, electronic, and world music.",
    organizer: "1",
    agenda: [
      { time: "6:00 PM", title: "Gates Open", desc: "Entry & welcome drinks" },
      { time: "7:00 PM", title: "Opening Act", desc: "Local indie bands warm up the crowd" },
      { time: "9:00 PM", title: "Headliner Set", desc: "Main stage performance begins" },
      { time: "11:30 PM", title: "After Party", desc: "VIP lounge & DJ sets till midnight" },
    ],
    speakers: ["1","2"],
    venue: { name: "Palace Grounds", lat: 12.9716, lng: 77.5946, address: "Jayamahal Rd, Bengaluru" },
  },
  {
    id: "2",
    title: "Future Tech Summit 2025",
    category: "tech",
    date: "June 3, 2025",
    time: "9:00 AM",
    location: "KTPO Convention Centre",
    price: 3000,
    image: IMAGES[1],
    featured: false,
    description: "India's premier AI & emerging technology conference. 60+ speakers, workshops, and startup showcases.",
    organizer: "2",
    agenda: [
      { time: "9:00 AM", title: "Registration & Keynote", desc: "Welcome address" },
      { time: "10:30 AM", title: "AI Panel", desc: "The future of generative AI in enterprise" },
      { time: "12:00 PM", title: "Lunch & Expo", desc: "Startup exhibition floor open" },
      { time: "2:00 PM", title: "Workshops", desc: "Hands-on ML & cloud sessions" },
    ],
    speakers: ["3","4"],
    venue: { name: "KTPO Centre", lat: 12.9279, lng: 77.6271, address: "Whitefield, Bengaluru" },
  },
  {
    id: "3",
    title: "Bengaluru Food & Wine Fest",
    category: "food",
    date: "May 28, 2025",
    time: "12:00 PM",
    location: "UB City Mall",
    price: 800,
    image: IMAGES[17],
    featured: false,
    description: "A curated celebration of flavours from 80+ restaurants, artisan producers, and celebrity chefs.",
    organizer: "1",
    agenda: [],
    speakers: [],
    venue: { name: "UB City", lat: 12.9719, lng: 77.5937, address: "Vittal Mallya Rd, Bengaluru" },
  },
  {
    id: "4",
    title: "Startup Launchpad",
    category: "business",
    date: "June 12, 2025",
    time: "10:00 AM",
    location: "91Springboard, Koramangala",
    price: 500,
    image: IMAGES[18],
    featured: false,
    description: "Pitch competitions, VC networking, and product showcases for early-stage startups.",
    organizer: "2",
    agenda: [],
    speakers: ["3","4"],
    venue: { name: "91Springboard", lat: 12.9352, lng: 77.6245, address: "Koramangala, Bengaluru" },
  },
  {
    id: "5",
    title: "Modern Art Gala",
    category: "art",
    date: "July 5, 2025",
    time: "7:00 PM",
    location: "National Gallery of Modern Art",
    price: 1200,
    image: IMAGES[16],
    featured: false,
    description: "An exclusive evening with India's top contemporary artists, live installations and auction.",
    organizer: "1",
    agenda: [],
    speakers: ["5"],
    venue: { name: "NGMA Bengaluru", lat: 12.9754, lng: 77.5904, address: "Palace Road, Bengaluru" },
  },
  {
    id: "6",
    title: "Wellness & Mindfulness Retreat",
    category: "wellness",
    date: "June 20, 2025",
    time: "7:00 AM",
    location: "Nandi Hills Resort",
    price: 4500,
    image: IMAGES[7],
    featured: false,
    description: "A weekend of yoga, meditation, breathwork, and holistic healing with world-class instructors.",
    organizer: "2",
    agenda: [],
    speakers: ["5"],
    venue: { name: "Nandi Hills", lat: 13.3702, lng: 77.6835, address: "Nandi Hills, Karnataka" },
  },
];

export const SPEAKERS = [
  {
    id: "1",
    name: "Arjun Kapoor",
    topic: "The Future of Live Music",
    company: "SoundWave Productions",
    image: IMAGES[4],
    bio: "Award-winning music producer with 15 years of festival curation experience across Asia.",
    twitter: "@arjunbeats",
  },
  {
    id: "2",
    name: "Meera Iyer",
    topic: "Community-Led Events",
    company: "ImpactHub Bengaluru",
    image: IMAGES[15],
    bio: "Social entrepreneur building inclusive event spaces for underrepresented communities.",
    twitter: "@meeraiyer",
  },
  {
    id: "3",
    name: "Rahul Sharma",
    topic: "AI at Scale",
    company: "DeepMind India",
    image: IMAGES[12],
    bio: "Research lead working on large language model deployment in resource-constrained environments.",
    twitter: "@rahul_ai",
  },
  {
    id: "4",
    name: "Priya Nair",
    topic: "Women in Deep Tech",
    company: "Google Research",
    image: IMAGES[13],
    bio: "Principal engineer advocating for diversity in STEM through open-source contributions.",
    twitter: "@priyanair",
  },
  {
    id: "5",
    name: "Vikram Joshi",
    topic: "Mindful Leadership",
    company: "Inner Work Institute",
    image: IMAGES[14],
    bio: "Executive coach helping Fortune 500 leaders integrate mindfulness into strategic decision-making.",
    twitter: "@vikramjoshi",
  },
];

export const ORGANIZERS = [
  {
    id: "1",
    name: "Vivid Events Co.",
    logo: IMAGES[11],
    tagline: "Crafting unforgettable moments since 2015",
    about: "Vivid Events Co. is Bengaluru's premier boutique event management agency specialising in music festivals, cultural galas, and immersive brand experiences.",
    pastEvents: ["1", "3", "5"],
    contact: "hello@vivid.events",
    website: "vivid.events",
    social: { ig: "@vividevents", tw: "@vividevents" },
  },
  {
    id: "2",
    name: "Nexus Summits",
    logo: IMAGES[19],
    tagline: "Where knowledge meets ambition",
    about: "Nexus Summits organises India's most influential technology and business conferences, connecting innovators with investors and decision-makers.",
    pastEvents: ["2", "4", "6"],
    contact: "info@nexussummits.in",
    website: "nexussummits.in",
    social: { ig: "@nexussummits", tw: "@nexussummits" },
  },
];

export const TICKET_TIERS = [
  {
    id: "early-bird",
    label: "Early Bird",
    icon: "🐦",
    multiplier: 0.7,
    perks: ["General admission", "Event program booklet", "Early entry (30 mins)"],
    limited: true,
    remaining: 48,
    color: "#86efac",
  },
  {
    id: "general",
    label: "General",
    icon: "🎟️",
    multiplier: 1,
    perks: ["General admission", "Event program booklet", "Standard entry"],
    limited: false,
    color: "#93c5fd",
  },
  {
    id: "vip",
    label: "VIP",
    icon: "⭐",
    multiplier: 2.5,
    perks: ["Priority entry", "VIP lounge access", "Meet & greet with speakers", "Complimentary drinks", "Exclusive merch kit"],
    limited: true,
    remaining: 12,
    color: "#f9a8d4",
  },
];