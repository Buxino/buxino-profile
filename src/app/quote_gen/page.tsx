"use client";

import React, { useState } from 'react';

/**
 * BUXRAMSEY QUOTE GENERATOR
 * Page: src/app/quote_gen/page.tsx
 */

const QuoteGeneratorPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    eventType: "",
    customEvent: "",
    menuTier: "premium",
    guests: 50,
    firstName: "",
    surname: "",
    phone: "",
    email: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    notes: "",
  });

  // Quote output state
  const [quote, setQuote] = useState<string | null>(null);

  // Show custom event field when "Other" is selected
  const showCustomEvent = formData.eventType === "other";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Base prices per tier (averaged from your menus)
    const basePrices: Record<string, number> = {
      standard: 450,
      premium: 650,
      deluxe: 950,
    };

    // Fixed extras (for ~50 people scale – you can make dynamic later)
    const extras = {
      staff: 3600,      // e.g. 4 staff × 5h × R180/h
      transport: 1200,  // Gauteng
      equipment: 2800,  // crockery, chafing, linen
    };

    const basePerHead = basePrices[formData.menuTier] || 0;
    const foodTotal = basePerHead * formData.guests;
    const extrasTotal = Object.values(extras).reduce((a, b) => a + b, 0);
    const grandTotal = foodTotal + extrasTotal;

    // Event name display
    let displayEvent = formData.eventType;
    if (formData.eventType === "other") {
      displayEvent = formData.customEvent || "Custom Event";
    } else {
      displayEvent = formData.eventType
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    // Format date
    const today = new Date().toLocaleDateString("en-ZA");

    // Build quote HTML
    const quoteHTML = `
      <div class="space-y-8">
        <div class="text-center border-b border-[#c5a059]/30 pb-6">
          <h3 class="text-3xl font-semibold text-[#001122] font-serif mb-2">BuxRamsey Quote</h3>
          <p class="text-lg text-[#c5a059]">${displayEvent.toUpperCase()} – ${formData.guests} Guests</p>
          <p class="text-sm text-gray-600 mt-1">Prepared on ${today}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-medium text-lg text-[#001122] mb-3">Client</h4>
            <p>${formData.firstName} ${formData.surname}</p>
            <p>${formData.phone}</p>
            <p>${formData.email}</p>
          </div>
          <div>
            <h4 class="font-medium text-lg text-[#001122] mb-3">Event</h4>
            <p><strong>Date:</strong> ${formData.eventDate || "TBC"}</p>
            <p><strong>Time:</strong> ${formData.eventTime || "TBC"}</p>
            <p><strong>Venue:</strong> ${formData.venue || "TBC"}</p>
          </div>
        </div>

        <div>
          <h4 class="font-medium text-lg text-[#001122] mb-3">Package</h4>
          <p class="capitalize">${formData.menuTier} Tier – R${basePerHead.toFixed(2)} per head</p>
        </div>

        ${formData.notes ? `
          <div>
            <h4 class="font-medium text-lg text-[#001122] mb-3">Special Notes</h4>
            <p class="text-gray-700 whitespace-pre-line">${formData.notes}</p>
          </div>
        ` : ""}

        <div class="bg-gray-50 p-6 rounded-lg">
          <h4 class="font-semibold text-xl text-[#001122] mb-4">Cost Summary</h4>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span>Food & Service (${formData.guests} × R${basePerHead.toFixed(2)})</span>
              <span>R${foodTotal.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}</span>
            </div>
            <div class="flex justify-between">
              <span>Staff & On-site Support</span>
              <span>R${extras.staff.toLocaleString("en-ZA")}</span>
            </div>
            <div class="flex justify-between">
              <span>Transport & Fuel (Gauteng)</span>
              <span>R${extras.transport.toLocaleString("en-ZA")}</span>
            </div>
            <div class="flex justify-between">
              <span>Crockery, Chafing & Linen Rental</span>
              <span>R${extras.equipment.toLocaleString("en-ZA")}</span>
            </div>
            <div class="flex justify-between pt-4 border-t font-bold text-lg">
              <span>Total (excl. VAT)</span>
              <span class="text-[#c5a059]">R${grandTotal.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}</span>
            </div>
            <div class="flex justify-between text-sm text-gray-600">
              <span>VAT (not applicable – BuxRamsey is not VAT registered)</span>
              <span>R0.00</span>
            </div>
            <div class="flex justify-between text-xl font-bold text-[#001122] mt-4">
              <span>Amount Due</span>
              <span>R${grandTotal.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        <div class="text-center pt-6">
          <p class="text-sm text-gray-600">
            This is an instant estimate only. Final quote may vary slightly after site visit / final confirmation.<br />
            50% deposit secures your date. Balance due 7 days before event.
          </p>
          <p class="mt-6 text-[#c5a059] font-medium">
            Thank you for choosing BuxRamsey.
          </p>
        </div>
      </div>
    `;

    setQuote(quoteHTML);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#001122] text-white py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <img
            src="/BuxRamsey logo.jpg"
            alt="BuxRamsey"
            className="h-20 mx-auto mb-6"
          />
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-[#c5a059]">
            BuxRamsey Quote Generator
          </h1>
          <p className="text-lg mt-3 opacity-90">Create your personalised quote in seconds</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#c5a059]/30">
            <h2 className="text-2xl font-semibold text-[#001122] mb-8">Your Event Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service / Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#c5a059] focus:border-[#c5a059]"
                >
                  <option value="">Select event</option>
                  <option value="boardroom">Boardroom / Corporate Lunch</option>
                  <option value="lobola">Lobola Celebration</option>
                  <option value="traditional_wedding">Traditional Wedding</option>
                  <option value="western_wedding">Western Wedding</option>
                  <option value="funeral">Funeral Service</option>
                  <option value="tombstone">Tombstone Unveiling</option>
                  <option value="baptism">Baptism / Confirmation</option>
                  <option value="graduation">Graduation Party</option>
                  <option value="milestone_birthday">Milestone Birthday (21st–60th+)</option>
                  <option value="corporate_gala">Corporate Gala / Year-end Function</option>
                  <option value="other">Other (please specify below)</option>
                </select>
              </div>

              {/* Custom Event */}
              {showCustomEvent && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Custom Event Name
                  </label>
                  <input
                    type="text"
                    name="customEvent"
                    value={formData.customEvent}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              )}

              {/* Menu Tier */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Menu Tier *
                </label>
                <select
                  name="menuTier"
                  value={formData.menuTier}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#c5a059] focus:border-[#c5a059]"
                >
                  <option value="">Select tier</option>
                  <option value="standard">Standard (from R350–R580 pp)</option>
                  <option value="premium">Premium (from R450–R820 pp)</option>
                  <option value="deluxe">Deluxe (from R580–R1,200 pp)</option>
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests *
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min={10}
                  max={500}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#c5a059] focus:border-[#c5a059]"
                />
              </div>

              {/* Client Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name(s) *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Surname *
                  </label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+27 ..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Event Date & Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Time (approx.)
                  </label>
                  <input
                    type="time"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Location / Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="e.g. Family home in Soweto, or cemetery grounds"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Notes / Requests / Dietary Requirements
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g. 10 vegan portions, Halal meat only, no pork, wheelchair access needed..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#c5a059] text-[#001122] py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors mt-6"
              >
                Generate Quote
              </button>
            </form>
          </div>

          {/* Quote Preview */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#c5a059]/30">
            <h2 className="text-2xl font-semibold text-[#001122] mb-6">Quote Preview</h2>
            <div
              className="min-h-[400px] border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: quote || `
                <p class="text-gray-500 text-center py-20">
                  Fill in the form on the left and click "Generate Quote" to see your personalised quote here.
                </p>
              ` }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#001122] text-white/80 py-8 text-center text-sm">
        <p>BuxRamsey — a division of Buxino Consulting</p>
        <p className="mt-1">Home cooking. Corporate soul. Since lockdown 2020.</p>
      </footer>
    </div>
  );
};

export default QuoteGeneratorPage;