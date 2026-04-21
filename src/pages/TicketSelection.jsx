import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { EVENTS, TICKET_TIERS } from "../data/mockData";

export default function TicketSelection() {
  const { id } = useParams();
  const event = EVENTS.find((e) => e.id === id);
  const [selected, setSelected] = useState(null);
  const [qty, setQty] = useState(1);
  const [success, setSuccess] = useState(false);

  if (!event) return (
    <div className="pt-32 text-center">
      <Link to="/events" className="text-[#A28089] hover:underline">← Back to events</Link>
    </div>
  );

  const tier = TICKET_TIERS.find((t) => t.id === selected);
  const total = tier ? Math.round(event.price * tier.multiplier) * qty : 0;

  const handleCheckout = () => {
    if (!selected) return;
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="pt-32 pb-20 max-w-lg mx-auto px-6 text-center animate-scale-in">
        <div className="text-7xl mb-6 animate-float">🎉</div>
        <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif" }}>You're In!</h2>
        <p className="text-gray-500 mb-6">
          Your {tier?.label} ticket{qty > 1 ? "s" : ""} for <strong>{event.title}</strong> have been booked.
          A confirmation will be sent to your email.
        </p>
        <div className="bg-white rounded-2xl p-5 border border-rose-100 shadow-sm mb-8 text-left">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Ticket type</span>
            <span className="font-semibold">{tier?.label}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Quantity</span>
            <span className="font-semibold">{qty}</span>
          </div>
          <div className="flex justify-between text-sm font-bold border-t border-rose-50 pt-2 mt-2">
            <span>Total Paid</span>
            <span style={{ color: "#A28089" }}>₹{total.toLocaleString()}</span>
          </div>
        </div>
        <Link to="/events" className="inline-block px-8 py-3 rounded-full font-semibold text-white btn-press" style={{ backgroundColor: "#A28089" }}>
          Discover More Events
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-6">
      {/* Breadcrumb */}
      <Link to={`/events/${event.id}`} className="text-sm text-gray-400 hover:text-[#A28089] transition-colors mb-6 inline-block">
        ← {event.title}
      </Link>

      <h1 className="text-3xl font-bold mb-2 animate-fade-in-up" style={{ fontFamily: "Playfair Display, serif" }}>
        Select Your Tickets
      </h1>
      <p className="text-gray-500 mb-10 animate-fade-in-up delay-100">{event.date} · {event.location}</p>

      {/* Tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {TICKET_TIERS.map((tier, i) => {
          const price = Math.round(event.price * tier.multiplier);
          const isSelected = selected === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => setSelected(tier.id)}
              className={`text-left rounded-2xl p-6 border-2 transition-all duration-250 btn-press card-hover animate-fade-in-up relative overflow-hidden
                ${isSelected ? "shadow-xl scale-[1.02]" : "bg-white hover:border-[#A28089]"}`}
              style={{
                animationDelay: `${i * 100}ms`,
                borderColor: isSelected ? "#A28089" : "#f3e8e9",
                backgroundColor: isSelected ? "#fdf4f5" : "white",
              }}
            >
              {/* Selection ring */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ backgroundColor: "#A28089" }}>✓</div>
              )}

              {tier.limited && (
                <div className="mb-3">
                  <span className="tag-pill text-white text-[10px]" style={{ backgroundColor: "#A28089" }}>
                    🔥 Only {tier.remaining} left
                  </span>
                </div>
              )}

              <div className="text-3xl mb-2">{tier.icon}</div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{tier.label}</h3>
              <div className="text-2xl font-black mb-4" style={{ color: "#A28089" }}>₹{price.toLocaleString()}</div>

              <ul className="space-y-2">
                {tier.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white flex-shrink-0"
                      style={{ backgroundColor: tier.color }}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      {/* Quantity & Summary */}
      {selected && (
        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 animate-scale-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Qty selector */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-9 h-9 rounded-full border-2 border-rose-200 font-bold text-lg flex items-center justify-center btn-press hover:bg-rose-50 transition-colors"
                >−</button>
                <span className="text-xl font-bold w-8 text-center">{qty}</span>
                <button
                  onClick={() => setQty(Math.min(10, qty + 1))}
                  className="w-9 h-9 rounded-full border-2 border-rose-200 font-bold text-lg flex items-center justify-center btn-press hover:bg-rose-50 transition-colors"
                >+</button>
              </div>
            </div>

            {/* Total */}
            <div className="text-right">
              <div className="text-xs text-gray-400 mb-1">Total ({qty} ticket{qty > 1 ? "s" : ""})</div>
              <div className="text-3xl font-black" style={{ color: "#A28089", fontFamily: "Playfair Display, serif" }}>
                ₹{total.toLocaleString()}
              </div>
            </div>

            {/* Checkout */}
            <button
              onClick={handleCheckout}
              className="px-8 py-3.5 rounded-xl font-bold text-white btn-press transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#A28089" }}
            >
              Confirm & Pay →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}