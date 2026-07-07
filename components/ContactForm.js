"use client";

import { useState } from "react";

const ARRANGEMENTS = [
    { label: "Bridal Bouquet", value: "bridal-bouquet" },
    { label: "Bridesmaids Bouquets", value: "bridesmaids" },
    { label: "Boutonnieres / Corsages", value: "boutonnieres" },
    { label: "Ceremony Arch / Backdrop", value: "arch" },
    { label: "Table Centerpieces", value: "centerpieces" },
    { label: "Aisle Decor", value: "aisle" },
    { label: "Other: please specify", value: "other" },
];

export default function ContactForm() {
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();

            if (res.ok && data.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="mt-8 rounded-lg bg-piona-green/5 border border-piona-green/20 px-6 py-8 text-center">
                <h3 className="text-lg font-semibold text-neutral-900">Thank you! 🌿</h3>
                <p className="mt-2 text-sm text-neutral-600">
                    Your inquiry has been sent. We'll get back to you shortly with a custom floral proposal.
                </p>
                <button
                    className="btn mt-6 bg-neutral-900 text-white px-6 py-2.5 rounded-lg hover:bg-neutral-800 transition"
                    onClick={() => setStatus("idle")}
                >
                    Send another inquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 grid gap-6 md:grid-cols-2">
            {/* 1. Client Name */}
            <div className="md:col-span-1">
                <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Your Name *</label>
                <input
                    id="contact-name"
                    name="name"
                    required
                    placeholder="First and last name"
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                />
            </div>

            {/* 2. Email Address */}
            <div className="md:col-span-1">
                <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Email Address *</label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="hello@example.com"
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                />
            </div>

            {/* 3. Event Type */}
            <div className="md:col-span-1">
                <label htmlFor="contact-event-type" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Event Type *</label>
                <select
                    id="contact-event-type"
                    name="eventType"
                    required
                    defaultValue=""
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400 invalid:text-neutral-400"
                >
                    <option value="" disabled hidden>Select an option</option>
                    <option value="wedding">Wedding</option>
                    <option value="private">Private Gathering</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="other">Other Celebration</option>
                </select>
            </div>

            {/* 4. Event Date */}
            <div className="md:col-span-1">
                <label htmlFor="contact-date" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Event Date *</label>
                <input
                    id="contact-date"
                    name="eventDate"
                    type="date"
                    required
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                />
            </div>

            {/* 5. Venue Details */}
            <div className="md:col-span-1">
                <label htmlFor="contact-venue" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Venue / Location *</label>
                <input
                    id="contact-venue"
                    name="venue"
                    required
                    placeholder="e.g., Fairmont Banff Springs, Calgary home"
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                />
            </div>

            {/* 6. Event Size (Guest Count) */}
            <div className="md:col-span-1">
                <label htmlFor="contact-size" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Estimated Guest Count</label>
                <select
                    id="contact-size"
                    name="guestCount"
                    defaultValue=""
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                >
                    <option value="" disabled hidden>Select headcount range</option>
                    <option value="intimate">Intimate (Under 20 guests)</option>
                    <option value="small">Small (20 - 50 guests)</option>
                    <option value="medium">Medium (50 - 150 guests)</option>
                    <option value="large">Large (150+ guests)</option>
                </select>
            </div>

            {/* 7. Rough Budget Range */}
            <div className="md:col-span-1">
                <label htmlFor="contact-budget" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Rough Floral Budget (CAD)</label>
                <select
                    id="contact-budget"
                    name="budget"
                    defaultValue=""
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                >
                    <option value="" disabled hidden>Select budget tier</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-3k">$1,000 – $3,000</option>
                    <option value="3k-6k">$3,000 – $6,000</option>
                    <option value="6k-plus">$6,000+</option>
                </select>
            </div>

            {/* 8. Colour & Aesthetic Theme */}
            <div className="md:col-span-1">
                <label htmlFor="contact-theme" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Colour Scheme & Theme</label>
                <input
                    id="contact-theme"
                    name="theme"
                    placeholder="e.g., Blush & Sage, modern minimalist, moody romantic"
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                />
            </div>

            {/* 9. Needed Arrangements */}
            <div className="md:col-span-2">
                <span className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-3">Arrangements You Need</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {ARRANGEMENTS.map((item) => (
                        <label key={item.value} className="flex items-center gap-3 px-3 py-2 border border-neutral-100 rounded-lg cursor-pointer hover:bg-neutral-50 text-neutral-800 text-sm transition">
                            <input
                                type="checkbox"
                                name="arrangements"
                                value={item.value}
                                className="w-4 h-4 rounded text-neutral-900 focus:ring-neutral-400 border-neutral-300"
                            />
                            <span>{item.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* 10. Additional Event Notes */}
            <div className="md:col-span-2">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">Additional Event Notes & Vision</label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    placeholder="Tell us any specific flower requests, installations, or stylistic preferences..."
                    className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-base md:text-sm bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                />
            </div>

            {status === "error" && (
                <div className="md:col-span-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                    Something went wrong sending your inquiry. Please try again, or reach out to us directly on Instagram.
                </div>
            )}

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end mt-2">
                <button
                    className="btn bg-neutral-900 text-white font-medium px-8 py-3 rounded-lg hover:bg-neutral-800 transition shadow-sm w-full md:w-auto disabled:opacity-50"
                    type="submit"
                    disabled={status === "submitting"}
                >
                    {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                </button>
            </div>
        </form>
    );
}