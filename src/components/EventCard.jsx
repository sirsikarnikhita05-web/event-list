import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/mockData";

export default function EventCard({ event, delay = 0 }) {
  const cat = CATEGORIES.find((c) => c.id === event.category);

  return (
    <Link
      to={`/events/${event.id}`}
      className="block group card-hover animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-2xl overflow-hidden bg-white border border-rose-100 shadow-sm">
        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {/* Category tag */}
          <div className="absolute top-3 left-3">
            <span
              className="tag-pill text-gray-800"
              style={{ backgroundColor: cat?.color || "#f9a8d4" }}
            >
              {cat?.icon} {cat?.label}
            </span>
          </div>
          {/* Price */}
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold" style={{ color: "#A28089" }}>
            ₹{event.price.toLocaleString()}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#A28089] transition-colors duration-200" style={{ fontFamily: "Playfair Display, serif" }}>
            {event.title}
          </h3>
          <div className="flex flex-col gap-1 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <span>📅</span> {event.date} · {event.time}
            </div>
            <div className="flex items-center gap-1.5">
              <span>📍</span> {event.location}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-gray-400">View details →</span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs transition-transform duration-200 group-hover:scale-110 btn-press"
              style={{ backgroundColor: "#A28089" }}
            >
              →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}