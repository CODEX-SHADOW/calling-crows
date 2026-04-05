/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  Target, 
  TrendingUp, 
  Users, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Facebook
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
              <Target className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">CALLING CROWS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#services" className="hover:text-brand-accent transition-colors">Services</a>
            <a href="#about" className="hover:text-brand-accent transition-colors">Why Us</a>
            <a href="#results" className="hover:text-brand-accent transition-colors">Results</a>
            <a href="#contact" className="bg-brand-accent text-white px-5 py-2.5 rounded-full hover:bg-orange-600 transition-all">Get a Proposal</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
                Meta Ads Specialists for Real Estate
              </span>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
                Turning <span className="text-gradient">Scrolls</span> into <span className="italic">Sales.</span>
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
                We help high-performing real estate brands dominate Instagram and Facebook with hyper-targeted Meta ad campaigns that deliver qualified leads, not just likes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all group">
                  Scale Your Brand <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                  View Our Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Ad Spend Managed", value: "$2M+" },
            { label: "Leads Generated", value: "45k+" },
            { label: "Average CPL", value: "$4.20" },
            { label: "Client Retention", value: "94%" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl font-display font-bold text-brand-accent mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Digital Marketing Ecosystem</h2>
            <p className="text-white/50 text-lg">We provide a full-stack lead generation machine designed specifically for the modern real estate landscape.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                category: "Meta Ads Mastery",
                icon: <Target className="w-8 h-8" />,
                services: [
                  { title: "Instagram & Facebook Ads", desc: "Hyper-targeted campaigns reaching active buyers and sellers in your specific zip codes." },
                  { title: "Dynamic Retargeting", desc: "Stay top-of-mind by showing tailored ads to people who have already interacted with your listings." }
                ],
                benefit: "Expect a 3x increase in brand visibility and a consistent flow of high-intent inquiries."
              },
              {
                category: "Conversion Architecture",
                icon: <TrendingUp className="w-8 h-8" />,
                services: [
                  { title: "High-Converting Funnels", desc: "Custom landing pages optimized for mobile speed and maximum lead capture rates." },
                  { title: "Automated Lead Nurturing", desc: "Instant SMS and email follow-ups that qualify leads before they ever reach your desk." }
                ],
                benefit: "Reduce your manual follow-up time by 70% while increasing appointment set rates."
              },
              {
                category: "Creative Excellence",
                icon: <BarChart3 className="w-8 h-8" />,
                services: [
                  { title: "Scroll-Stopping Video", desc: "Cinematic property tours and agent branding videos engineered for social media performance." },
                  { title: "Persuasive Ad Copy", desc: "Direct-response messaging that speaks to the specific pain points of local buyers and sellers." }
                ],
                benefit: "Stand out from the 'boring' competition with a brand identity that commands premium attention."
              }
            ].map((cat, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-8">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 text-brand-accent uppercase tracking-wider">{cat.category}</h3>
                <div className="space-y-8 flex-grow">
                  {cat.services.map((s, j) => (
                    <div key={j}>
                      <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                        {s.title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-white/[0.03] rounded-xl border border-white/5">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2">The Benefit</div>
                  <p className="text-xs text-white/70 italic leading-relaxed">{cat.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Focus Section */}
      <section id="about" className="py-32 bg-brand-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Real Estate" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-8 max-w-xs hidden lg:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="font-bold">Verified Results</div>
              </div>
              <p className="text-sm text-white/60 italic">"Calling Crows doubled our listing inquiries within the first 30 days of our partnership."</p>
              <div className="mt-4 text-xs font-bold text-brand-accent uppercase tracking-widest">— Premier Realty Group</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Why Real Estate Brands Trust Us</h2>
            <div className="space-y-8">
              {[
                { title: "No Fluff Metrics", desc: "We don't report on 'impressions'. We report on appointments booked and deals closed." },
                { title: "Exclusive Territories", desc: "We only work with one agency per territory to ensure zero conflict of interest." },
                { title: "Automated Nurturing", desc: "Our systems automatically follow up with leads via SMS and Email to keep them warm." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 text-brand-accent">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="results" className="py-32 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Portfolio & Proof</h2>
              <p className="text-white/50 text-lg">We let our results speak for themselves. Explore our latest wins and the creatives that drove them.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 glass-card text-sm font-bold">ROI Focused</div>
              <div className="px-6 py-3 glass-card text-sm font-bold">Data Driven</div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass-card p-12 flex flex-col justify-between border-l-4 border-l-brand-accent">
              <div>
                <div className="text-brand-accent font-bold mb-4 flex items-center gap-2">
                  <Building2 className="w-4 h-4" /> LUXURY DEVELOPMENT
                </div>
                <h3 className="text-3xl font-display font-bold mb-6">The Skyline Residences</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Faced with a slow pre-launch, we deployed a high-intent Meta campaign targeting international investors. We achieved a complete sell-out of Phase 1 in record time.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" /> 400+ High-Intent Leads Generated
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" /> $12.50 Average Cost Per Lead
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" /> 100% Units Sold in 4 Months
                  </li>
                </ul>
              </div>
              <div className="bg-white/[0.03] p-6 rounded-xl flex justify-around text-center">
                <div>
                  <div className="text-2xl font-display font-bold">12x</div>
                  <div className="text-[10px] text-white/40 uppercase font-bold">Return on Spend</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-2xl font-display font-bold">22%</div>
                  <div className="text-[10px] text-white/40 uppercase font-bold">Lead-to-Tour Rate</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-12 flex flex-col justify-between border-l-4 border-l-orange-400">
              <div>
                <div className="text-orange-400 font-bold mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4" /> BOUTIQUE AGENCY
                </div>
                <h3 className="text-3xl font-display font-bold mb-6">Oak & Anchor Realty</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  A local agency wanted to pivot from buyer leads to high-value seller listings. Our 'Home Valuation' funnel delivered a consistent stream of listing appointments.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> 150+ Seller Inquiries Monthly
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> 4.5x ROAS on Listing Commissions
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> Market Share Increased by 15%
                  </li>
                </ul>
              </div>
              <div className="bg-white/[0.03] p-6 rounded-xl flex justify-around text-center">
                <div>
                  <div className="text-2xl font-display font-bold">$45</div>
                  <div className="text-[10px] text-white/40 uppercase font-bold">Cost Per Seller Lead</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-2xl font-display font-bold">18</div>
                  <div className="text-[10px] text-white/40 uppercase font-bold">New Listings/Mo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Ad Creatives */}
          <div className="mb-32">
            <h3 className="text-2xl font-display font-bold mb-10 flex items-center gap-4">
              Featured Ad Creatives <div className="h-px flex-grow bg-white/10" />
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500",
                "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=500",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=500",
                "https://images.unsplash.com/photo-1600585154526-990dcea4d4d9?auto=format&fit=crop&q=80&w=500"
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer"
                >
                  <img src={img} alt="Ad Creative" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-1">High Performance</div>
                    <div className="text-sm font-bold">Listing Showcase Ad</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Broker Owner", text: "Calling Crows transformed our digital presence. We went from chasing cold leads to having a calendar full of qualified appointments." },
              { name: "Marcus Thorne", role: "Luxury Agent", text: "The quality of leads from their Meta campaigns is unmatched. These aren't just lookers; they are serious buyers with pre-approvals." },
              { name: "Elena Rodriguez", role: "Marketing Director", text: "Their automated nurturing systems saved our team hours of manual work. The ROI was evident within the first 45 days." }
            ].map((t, i) => (
              <div key={i} className="glass-card p-8 relative">
                <div className="text-brand-accent mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/60 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center font-bold text-brand-accent">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card overflow-hidden grid md:grid-cols-2">
            <div className="p-12 md:p-20 bg-brand-accent text-white">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to Scale?</h2>
              <p className="text-white/80 text-lg mb-12">Book a free strategy call and we'll show you exactly how we can help you dominate your market.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <span>hello@callingcrows.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <span>New York, NY</span>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/20">
                <div className="flex gap-6">
                  <Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                  <Facebook className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                  <Users className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
            
            <div className="p-12 md:p-20">
              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Inquiry Received!</h3>
                  <p className="text-white/50">Our strategy team will review your details and reach out within 24 hours to schedule your free consultation.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-brand-accent font-bold hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                      <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="john@agency.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                      <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Real Estate Business Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Premier Realty Group" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Monthly Ad Budget</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                      <option className="bg-brand-dark">$1,000 - $3,000</option>
                      <option className="bg-brand-dark">$3,000 - $10,000</option>
                      <option className="bg-brand-dark">$10,000+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Brief Description of Your Needs</label>
                    <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Tell us about your current challenges and what you're looking to achieve..."></textarea>
                  </div>
                  <button 
                    disabled={formStatus === "submitting"}
                    className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Request Free Strategy Call"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
              <Target className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-display font-bold tracking-tight">CALLING CROWS</span>
          </div>
          <div className="text-white/40 text-sm">
            © 2026 Calling Crows Digital. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
