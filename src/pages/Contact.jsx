import { useState } from "react";

const FORM_TYPES = [
  { id: "submit", label: "Submit an Event", icon: "🎪" },
  { id: "sponsor", label: "Sponsor Inquiry", icon: "🤝" },
  { id: "speaker", label: "Speaker Application", icon: "🎤" },
  { id: "general", label: "General Enquiry", icon: "✉️" },
];

export default function Contact() {
  const [formType, setFormType] = useState("submit");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "", date: "", budget: "" });

  const set = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 max-w-lg mx-auto px-6 text-center animate-scale-in">
        <div className="text-7xl mb-6 animate-float">📬</div>
        <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Message Received!</h2>
        <p className="text-gray-500 mb-8">
          Thank you for reaching out. Our team will get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", org: "", message: "", date: "", budget: "" }); }}
          className="px-8 py-3 rounded-full font-semibold text-white btn-press"
          style={{ backgroundColor: "#A28089" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <span className="tag-pill bg-rose-100 text-rose-700 mb-4 inline-block">Get In Touch</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
          Let's Build Something Great
        </h1>
        <p className="text-gray-500 max-w-md mx-auto">
          Whether you're planning an event, looking to sponsor, or want to speak — we'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form type selector */}
        <div className="lg:col-span-2 space-y-3 animate-slide-left">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">I want to...</h3>
          {FORM_TYPES.map((ft, i) => (
            <button
              key={ft.id}
              onClick={() => setFormType(ft.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold border-2 text-left btn-press transition-all duration-200 animate-fade-in-up`}
              style={{
                animationDelay: `${i * 80}ms`,
                borderColor: formType === ft.id ? "#A28089" : "#f3e8e9",
                backgroundColor: formType === ft.id ? "#fdf4f5" : "white",
                color: formType === ft.id ? "#A28089" : "#374151",
              }}
            >
              <span className="text-xl">{ft.icon}</span>
              {ft.label}
              {formType === ft.id && <span className="ml-auto">✓</span>}
            </button>
          ))}

          {/* Contact info */}
          <div className="mt-8 pt-6 border-t border-rose-100 space-y-3 text-sm text-gray-500">
            {[["📧", "hello@eventflow.in"], ["📞", "+91 98765 43210"], ["📍", "Bengaluru, Karnataka"]].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-2">{icon} {text}</div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 animate-fade-in-up delay-200">
          <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-7">
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              {FORM_TYPES.find((f) => f.id === formType)?.icon}{" "}
              {FORM_TYPES.find((f) => f.id === formType)?.label}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Full Name *</label>
                  <input className="input-field" placeholder="Your name" required value={form.name} onChange={set("name")} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Email *</label>
                  <input className="input-field" type="email" placeholder="you@example.com" required value={form.email} onChange={set("email")} />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
                  {formType === "sponsor" ? "Company / Brand" : formType === "submit" ? "Event / Organisation" : "Organisation"}
                </label>
                <input className="input-field" placeholder="Organisation name" value={form.org} onChange={set("org")} />
              </div>

              {formType === "submit" && (
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Proposed Event Date</label>
                  <input className="input-field" type="date" value={form.date} onChange={set("date")} />
                </div>
              )}

              {formType === "sponsor" && (
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Budget Range</label>
                  <select className="input-field cursor-pointer" value={form.budget} onChange={set("budget")}>
                    <option value="">Select a range</option>
                    <option>Under ₹1 Lakh</option>
                    <option>₹1–5 Lakh</option>
                    <option>₹5–20 Lakh</option>
                    <option>₹20 Lakh+</option>
                  </select>
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Message *</label>
                <textarea
                  className="input-field resize-none"
                  rows={4}
                  placeholder={
                    formType === "submit" ? "Tell us about your event — theme, expected attendance, venue ideas..."
                    : formType === "sponsor" ? "Tell us about your brand and sponsorship goals..."
                    : formType === "speaker" ? "Your talk topic, background, and why you'd like to speak..."
                    : "How can we help you?"
                  }
                  required
                  value={form.message}
                  onChange={set("message")}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-white btn-press transition-all duration-200 hover:scale-[1.02] hover:shadow-lg text-sm"
                style={{ backgroundColor: "#A28089" }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}