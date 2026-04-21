import { useState } from "react";
import { Link } from "react-router-dom";
import { EVENTS, CATEGORIES, IMAGES } from "../data/mockData";
import EventCard from "../components/EventCard";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);
  const featured = EVENTS.find((e) => e.featured);
  const filtered = activeCategory
    ? EVENTS.filter((e) => e.category === activeCategory)
    : EVENTS;

  return (
    <div className="pt-16">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden noise">
        <img
          src={featured.image}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-white mb-6 animate-fade-in"
              style={{ backgroundColor: "#A28089" }}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
              Featured Event
            </span>

            <h1
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {featured.title}
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-8 animate-fade-in-up delay-100">
              {featured.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up delay-200">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                📅 {featured.date}
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                📍 {featured.location}
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                🎟️ From ₹{featured.price.toLocaleString()}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-300">
              <Link
                to={`/events/${featured.id}`}
                className="px-7 py-3 rounded-full font-semibold text-white btn-press transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#A28089" }}
              >
                Get Tickets
              </Link>
              <Link
                to="/events"
                className="px-7 py-3 rounded-full font-semibold border-2 border-white/60 text-white backdrop-blur-sm hover:bg-white/15 transition-all duration-200 btn-press"
              >
                Browse All →
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 animate-fade-in-up" style={{ fontFamily: "Playfair Display, serif" }}>
            Explore by Category
          </h2>
          <p className="text-gray-500 animate-fade-in-up delay-100">Find experiences that match your vibe</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveCategory(null)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 btn-press hover:scale-105
              ${!activeCategory ? "text-white border-transparent" : "border-gray-200 text-gray-600 hover:border-[#A28089]"}`}
            style={!activeCategory ? { backgroundColor: "#A28089" } : {}}
          >
            🌟 All Events
          </button>
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 btn-press hover:scale-105 animate-fade-in delay-${i * 50}`}
              style={
                activeCategory === cat.id
                  ? { backgroundColor: cat.color, borderColor: cat.color, color: "#1a1a2e" }
                  : { borderColor: "#e5e7eb", color: "#374151", backgroundColor: "white" }
              }
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── UPCOMING EVENTS GRID ── */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
            {activeCategory
              ? `${CATEGORIES.find((c) => c.id === activeCategory)?.label} Events`
              : "Upcoming Events"}
          </h2>
          <Link to="/events" className="text-sm font-medium hover:underline" style={{ color: "#A28089" }}>
            View all →
          </Link>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-4">🎭</div>
            <p>No events in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ev, i) => (
              <EventCard key={ev.id} event={ev} delay={i * 80} />
            ))}
          </div>
        )}
      </section>

      {/* ── STATS BAND ── */}
      <section className="py-16" style={{ backgroundColor: "#A28089" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[["500+","Events Hosted"],["12K+","Happy Attendees"],["80+","Top Speakers"],["30+","Cities"]].map(([num, label]) => (
              <div key={label} className="animate-fade-in-up">
                <div className="text-4xl font-black mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{num}</div>
                <div className="text-rose-200 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO MOSAIC ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: "Playfair Display, serif" }}>
          Moments from Past Events
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[IMAGES[2], IMAGES[8], IMAGES[9], IMAGES[10], IMAGES[3], IMAGES[6], IMAGES[7], IMAGES[11]].map((src, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden card-hover animate-fade-in-up ${i === 0 || i === 5 ? "md:row-span-2" : ""}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img src={src} alt="" className="w-full h-full object-cover min-h-[140px]" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}