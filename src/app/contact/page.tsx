/**
 * ============================================================
 * LEVEL UP - CONTACT PAGE
 * ============================================================
 * 
 * A brutalist, high-contrast contact form with direct leadership info.
 * 
 * 🎨 FEATURES:
 * - "Terminal" style aesthetic
 * - Direct contact info side-panel
 * - High-visibility form fields
 * 
 * ============================================================
 */

import { useState } from 'react';
import { ArrowLeft, Send, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

// === LEADERSHIP CONTACT INFO (From Audit) ===
const TEAM = [
    { name: "John Cook", role: "Owner", email: "johncook@levelupinstalling.com", phone: "385-335-5542" },
    { name: "Trista Cook", role: "Owner", email: "tristacook@levelupinstalling.com", phone: "808-856-6746" },
    { name: "Quentin Peterson", role: "Workforce & Ops", email: "quentin@levelupinstalling.com", phone: "385-347-1648" },
    { name: "Avery Peterson", role: "Project Manager", email: "avery@levelupinstalling.com", phone: "801-400-3600" },
];

export default function ContactPage() {
    // --- FORM STATE ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'New Installation Project',
        message: ''
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle submission - Opens Email Client
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Level Up Inquiry: ${formData.subject}`;
        const body = `
NEW PROJECT INQUIRY
--------------------------------
ID: ${formData.name}
CONTACT: ${formData.email}
TARGET: ${formData.subject}

BRIEFING:
${formData.message}
    `.trim();

        // Open email client
        window.location.href = `mailto:johncook@levelupinstalling.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="min-h-screen bg-[--color-bg-primary] text-[--color-text-primary] font-sans selection:bg-[--color-accent] selection:text-white">

            {/* Background Grid Lines */}
            <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-20">
                <div className="w-px h-full bg-white/10"></div>
                <div className="w-px h-full bg-white/10"></div>
                <div className="w-px h-full bg-white/10 hidden md:block"></div>
                <div className="w-px h-full bg-white/10 hidden md:block"></div>
                <div className="w-px h-full bg-white/10"></div>
            </div>

            {/* Nav / Back Button */}
            <nav className="fixed w-full z-50 py-8 px-6 md:px-12">
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-[--color-accent] transition-colors">
                    <ArrowLeft size={16} /> Back to Base
                </Link>
            </nav>

            {/* Main Content Grid */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20 min-h-screen grid md:grid-cols-12 gap-12">

                {/* Left Col: Headline & Info */}
                <div className="md:col-span-4 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-[--color-accent]"></div>
                            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                                Secure Channel
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-12 text-white">
                            Initiate<br />
                            <span className="text-zinc-600">Protocol</span>
                        </h1>

                        <div className="space-y-8">
                            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                                <h3 className="font-mono text-xs text-[--color-accent] uppercase mb-4">HQ Coordinates</h3>
                                <div className="flex items-start gap-4 text-sm text-zinc-300">
                                    <MapPin className="shrink-0 mt-1" size={16} />
                                    <span>Salt Lake City, UT<br />Deploying Nationwide</span>
                                </div>
                            </div>

                            {/* Leadership List */}
                            <div className="space-y-4">
                                <h3 className="font-mono text-xs text-zinc-500 uppercase">Direct Lines</h3>
                                {TEAM.map((member, i) => (
                                    <div key={i} className="group border-l-2 border-transparent hover:border-[--color-accent] pl-4 transition-all pb-2">
                                        <div className="text-xs font-mono text-[--color-accent] mb-1">{member.role}</div>
                                        <div className="font-bold text-white leading-none mb-1">{member.name}</div>
                                        <div className="text-xs text-zinc-500 flex gap-4 mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                            <a href={`mailto:${member.email}`} className="hover:text-white flex items-center gap-1"><Mail size={12} /> Email</a>
                                            <a href={`tel:${member.phone}`} className="hover:text-white flex items-center gap-1"><Phone size={12} /> {member.phone}</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Col: The Form */}
                <div className="md:col-span-7 md:col-start-6">
                    <form onSubmit={handleSubmit} className="bg-zinc-900/50 border border-white/10 p-8 md:p-12 backdrop-blur-md">
                        <h3 className="font-mono text-xs text-[--color-accent] uppercase mb-8 tracking-widest">
              // Project Parameters
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-zinc-500">Identity / Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[--color-accent] transition-colors"
                                    placeholder="ENTER NAME"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-zinc-500">Contact / Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[--color-accent] transition-colors"
                                    placeholder="ENTER EMAIL"
                                />
                            </div>
                        </div>

                        <div className="mb-8 space-y-2">
                            <label className="text-xs font-bold uppercase text-zinc-500">Target / Subject</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[--color-accent] transition-colors appearance-none rounded-none cursor-pointer"
                            >
                                <option className="bg-zinc-900" value="New Installation Project">New Installation Project</option>
                                <option className="bg-zinc-900" value="Retrofit / Upgrade">Retrofit / Upgrade</option>
                                <option className="bg-zinc-900" value="Partnership Inquiry">Partnership Inquiry</option>
                                <option className="bg-zinc-900" value="Other">Other</option>
                            </select>
                        </div>

                        <div className="mb-12 space-y-2">
                            <label className="text-xs font-bold uppercase text-zinc-500">Briefing / Message</label>
                            <textarea
                                rows={6}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[--color-accent] transition-colors resize-none"
                                placeholder="ENTER PROJECT DETAILS..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[--color-accent] hover:bg-white hover:text-black transition-colors text-white text-sm font-bold uppercase py-6 tracking-widest flex items-center justify-center gap-2 group"
                        >
                            Transmit Data <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}
```
