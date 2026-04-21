import { SPEAKERS } from "../data/mockData";

export default function Speakers() {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-14 animate-fade-in-up">
        <span className="tag-pill bg-rose-100 text-rose-700 mb-4 inline-block">Our Speakers</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
          Voices That Inspire
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Industry pioneers, creative visionaries, and thought leaders sharing their expertise across all our events.
        </p>
      </div>

      {/* Speaker grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SPEAKERS.map((sp, i) => (
          <div
            key={sp.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-rose-50 card-hover animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Image */}
            <div className="relative overflow-hidden h-56">
              <img
                src={sp.image}
                alt={sp.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Twitter */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-600">
                {sp.twitter}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                {sp.name}
              </h3>
              <div className="text-sm font-semibold mb-0.5" style={{ color: "#A28089" }}>{sp.topic}</div>
              <div className="text-xs text-gray-400 mb-3">{sp.company}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{sp.bio}</p>

              {/* Social row */}
              <div className="mt-4 pt-4 border-t border-rose-50 flex items-center justify-between">
                <span className="text-xs text-gray-400">{sp.company}</span>
                <button
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-white btn-press transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: "#A28089" }}
                >
                  Follow →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA band */}
      <div
        className="mt-20 rounded-3xl p-10 text-center text-white relative overflow-hidden noise"
        style={{ backgroundColor: "#A28089" }}
      >
        <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
          Want to Speak at an Event?
        </h2>
        <p className="text-rose-100 mb-6 max-w-md mx-auto">
          We're always looking for inspiring voices. Submit your speaker profile and we'll be in touch.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white px-8 py-3 rounded-full font-semibold btn-press hover:scale-105 transition-all duration-200"
          style={{ color: "#A28089" }}
        >
          Apply to Speak
        </a>
      </div>
    </div>
  );
}