import { useState, useMemo } from "react";
import { EVENTS, CATEGORIES } from "../data/mockData";
import EventCard from "../components/EventCard";

const PRICE_RANGES = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under ₹1,000", min: 0, max: 1000 },
  { label: "₹1,000–₹3,000", min: 1000, max: 3000 },
  { label: "₹3,000+", min: 3000, max: Infinity },
];

export default function EventListings() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [priceIdx, setPriceIdx] = useState(0);
  const [sortBy, setSortBy] = useState("date");

  const filtered = useMemo(() => {
    let list = [...EVENTS];
    if (search) list = list.filter((e) => e.title.toLowerCase().includes(search.toLowerCase()) || e.location.toLowerCase().includes(search.toLowerCase()));
    if (category !== "all") list = list.filter((e) => e.category === category);
    const { min, max } = PRICE_RANGES[priceIdx];
    list = list.filter((e) => e.price >= min && e.price <= max);
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [search, category, priceIdx, sortBy]);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="mb-10 animate-fade-in-up">
        <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
          Discover Events
        </h1>
        <p className="text-gray-500">Find your next unforgettable experience</p>
      </div>

      {/* Filter bar */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-rose-50 mb-10 animate-fade-in-up delay-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Search</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input
                className="input-field pl-9"
                placeholder="Event or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Category</label>
            <select className="input-field cursor-pointer" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All Categories</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>{c.icon} {c.label}</option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Price Range</label>
            <select className="input-field cursor-pointer" value={priceIdx} onChange={(e) => setPriceIdx(Number(e.target.value))}>
              {PRICE_RANGES.map((p, i) => (
                <option key={i} value={i}>{p.label}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Sort By</label>
            <select className="input-field cursor-pointer" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date">Date (Soonest)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold text-gray-800">{filtered.length}</span> events
        </p>
        <div className="flex gap-2">
          {category !== "all" && (
            <span className="tag-pill bg-rose-100 text-rose-700">
              {CATEGORIES.find(c => c.id === category)?.label}
              <button onClick={() => setCategory("all")} className="ml-1 hover:text-rose-900">×</button>
            </span>
          )}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 animate-fade-in">
          <div className="text-6xl mb-4">🎭</div>
          <h3 className="text-xl font-semibold mb-2">No events found</h3>
          <p className="text-gray-400 text-sm">Try adjusting your filters</p>
          <button
            onClick={() => { setSearch(""); setCategory("all"); setPriceIdx(0); }}
            className="mt-4 px-5 py-2 rounded-full text-sm font-semibold text-white btn-press"
            style={{ backgroundColor: "#A28089" }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ev, i) => (
            <EventCard key={ev.id} event={ev} delay={i * 70} />
          ))}
        </div>
      )}
    </div>
  );
}