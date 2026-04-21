import { useParams, Link } from "react-router-dom";
import { ORGANIZERS, EVENTS } from "../data/mockData";
import EventCard from "../components/EventCard";

export default function OrganizerProfile() {
  const { id } = useParams();
  const org = ORGANIZERS.find((o) => o.id === id);

  if (!org) return (
    <div className="pt-32 text-center">
      <Link to="/" className="text-[#A28089] hover:underline">← Home</Link>
    </div>
  );

  const pastEvents = EVENTS.filter((e) => org.pastEvents.includes(e.id));

  return (
    <div className="pt-16 pb-20">
      {/* Hero banner */}
      <div className="relative h-56 overflow-hidden" style={{ backgroundColor: "#A28089" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="absolute inset-0 flex items-end px-6 pb-0 max-w-7xl mx-auto">
          {/* Org logo */}
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl translate-y-12 animate-scale-in">
            <img src={org.logo} alt={org.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16">
        {/* Name & meta */}
        <div className="mb-10 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{org.name}</h1>
          <p className="text-gray-500 italic mb-4">{org.tagline}</p>

          <div className="flex flex-wrap gap-3 text-sm">
            <a href={`mailto:${org.contact}`}
              className="flex items-center gap-2 bg-white border border-rose-100 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow card-hover">
              ✉️ {org.contact}
            </a>
            <a href={`https://${org.website}`} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-white border border-rose-100 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow card-hover">
              🌐 {org.website}
            </a>
            <span className="flex items-center gap-2 bg-white border border-rose-100 rounded-full px-4 py-2 shadow-sm">
              📸 {org.social.ig}
            </span>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-50 mb-12 animate-fade-in-up delay-100">
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif" }}>About</h2>
          <p className="text-gray-600 leading-relaxed">{org.about}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[["🎪", pastEvents.length + "+", "Events Hosted"], ["⭐", "4.9", "Avg Rating"], ["👥", "12K+", "Attendees"]].map(([icon, num, label]) => (
            <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-rose-50 card-hover animate-fade-in-up">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-2xl font-black mb-0.5" style={{ color: "#A28089", fontFamily: "Playfair Display, serif" }}>{num}</div>
              <div className="text-xs text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Past events */}
        <div className="animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>Events by {org.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((ev, i) => (
              <EventCard key={ev.id} event={ev} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}