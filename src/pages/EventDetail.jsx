import { useParams, Link } from "react-router-dom";
import { EVENTS, SPEAKERS, CATEGORIES } from "../data/mockData";

export default function EventDetail() {
  const { id } = useParams();
  const event = EVENTS.find((e) => e.id === id);

  if (!event) return (
    <div className="pt-32 text-center">
      <h2 className="text-2xl font-bold mb-4">Event not found</h2>
      <Link to="/events" className="text-[#A28089] hover:underline">← Back to events</Link>
    </div>
  );

  const cat = CATEGORIES.find((c) => c.id === event.category);
  const speakers = SPEAKERS.filter((s) => event.speakers?.includes(s.id));

  return (
    <div className="pt-16">
      {/* Banner */}
      <div className="relative h-72 md:h-[420px] overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover animate-scale-in" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-6">
          <span className="tag-pill mb-3 inline-block" style={{ backgroundColor: cat?.color, color: "#1a1a2e" }}>
            {cat?.icon} {cat?.label}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "Playfair Display, serif" }}>
            {event.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: Main info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Meta pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up">
              {[["📅", `${event.date} · ${event.time}`], ["📍", event.location], ["🎟️", `From ₹${event.price.toLocaleString()}`]].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-2 bg-white border border-rose-100 rounded-full px-4 py-2 text-sm shadow-sm">
                  <span>{icon}</span><span className="font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="animate-fade-in-up delay-100">
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif" }}>About This Event</h2>
              <p className="text-gray-600 leading-relaxed text-base">{event.description}</p>
            </div>

            {/* Agenda */}
            {event.agenda?.length > 0 && (
              <div className="animate-fade-in-up delay-200">
                <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "Playfair Display, serif" }}>Schedule</h2>
                <div className="relative pl-6 border-l-2 space-y-6" style={{ borderColor: "#A28089" }}>
                  {event.agenda.map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[29px] w-3 h-3 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: "#A28089" }} />
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-rose-50 card-hover">
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#A28089" }}>{item.time}</span>
                        <h4 className="font-bold text-gray-900 mt-0.5">{item.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Speakers */}
            {speakers.length > 0 && (
              <div className="animate-fade-in-up delay-300">
                <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "Playfair Display, serif" }}>Speakers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {speakers.map((sp) => (
                    <Link to="/speakers" key={sp.id} className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-rose-50 card-hover">
                      <img src={sp.image} alt={sp.name} className="w-14 h-14 rounded-full object-cover ring-2" style={{ ringColor: "#A28089" }} />
                      <div>
                        <div className="font-bold text-sm text-gray-900">{sp.name}</div>
                        <div className="text-xs text-gray-500">{sp.topic}</div>
                        <div className="text-xs mt-1 font-medium" style={{ color: "#A28089" }}>{sp.company}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Venue map placeholder */}
            {event.venue && (
              <div className="animate-fade-in-up delay-400">
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>Venue</h2>
                <div className="rounded-2xl overflow-hidden border border-rose-100 shadow-sm">
                  <div className="bg-gradient-to-br from-rose-50 to-emerald-50 h-48 flex flex-col items-center justify-center gap-2">
                    <span className="text-4xl animate-float">📍</span>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{event.venue.name}</div>
                      <div className="text-sm text-gray-500">{event.venue.address}</div>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${event.venue.lat},${event.venue.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white btn-press"
                      style={{ backgroundColor: "#A28089" }}
                    >
                      Open in Maps →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Sticky ticket CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-rose-100 p-6 animate-slide-left">
              <div className="text-center mb-5">
                <div className="text-3xl font-black mb-1" style={{ color: "#A28089", fontFamily: "Playfair Display, serif" }}>
                  ₹{event.price.toLocaleString()}
                </div>
                <div className="text-xs text-gray-400">Starting price per ticket</div>
              </div>

              <div className="space-y-3 mb-6">
                {["🎟️ Multiple ticket tiers available", "✅ Instant confirmation", "🔒 Secure checkout", "🔄 Refundable within 48h"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-gray-600">{item}</div>
                ))}
              </div>

              <Link
                to={`/tickets/${event.id}`}
                className="block w-full text-center py-3.5 rounded-xl font-bold text-white btn-press transition-all duration-200 hover:shadow-lg hover:scale-105 text-sm"
                style={{ backgroundColor: "#A28089" }}
              >
                Select Tickets
              </Link>

              <button className="block w-full text-center py-3 rounded-xl font-medium text-sm mt-3 border-2 border-rose-200 btn-press hover:bg-rose-50 transition-colors">
                ♡ Save to Wishlist
              </button>

              <div className="mt-5 pt-5 border-t border-rose-50 text-center">
                <p className="text-xs text-gray-400 mb-2">Organised by</p>
                <Link to={`/organizer/${event.organizer}`} className="text-sm font-semibold hover:underline" style={{ color: "#A28089" }}>
                  View Organizer →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}