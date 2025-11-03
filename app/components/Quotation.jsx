import React from "react";

export default function Quotation() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Demo For Web - Umrah Packages
        </h1>
        <p className="text-gray-600 mt-2">
          Explore our exclusive Umrah packages, thoughtfully crafted to make your
          pilgrimage a truly blessed experience.
        </p>
      </header>

      {/* Flights */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">
          Flights Itinerary
        </h2>
        <div className="space-y-1 text-gray-700">
          <p>
            <span className="font-medium">Hold Luggage:</span> 20 KG per person
          </p>
          <p>
            <span className="font-medium">Cabin Luggage:</span> 7 KG per person
          </p>
        </div>
      </section>

      {/* Hotels */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Hotels</h2>

        {/* Madinah Hotel */}
        <div className="bg-white rounded-2xl shadow p-4 mb-4">
          <h3 className="text-lg font-bold">Madinah Hotel</h3>
          <p className="text-sm text-gray-600">Zowar International Hotel 4*</p>
          <p className="mt-1">📍 Madinah (3-4 min walk to haram)</p>
          <ul className="text-sm text-gray-700 mt-2 space-y-1">
            <li>Check-in: 17 Nov 2025</li>
            <li>Check-out: 21 Nov 2025</li>
            <li>Room: 1 x Double</li>
            <li>Board: Breakfast</li>
          </ul>
        </div>

        {/* Makkah Hotel */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="text-lg font-bold">Makkah Hotel</h3>
          <p className="text-sm text-gray-600">Anjum Hotel Makkah 5*</p>
          <p className="mt-1">📍 Makkah (5 min walk to haram)</p>
          <ul className="text-sm text-gray-700 mt-2 space-y-1">
            <li>Check-in: 11 Aug 2025</li>
            <li>Check-out: 16 Aug 2025</li>
            <li>Room: 1 x Triple</li>
            <li>Board: Breakfast</li>
          </ul>
          <p className="mt-2 text-xs text-gray-500">
            Triple/Quad rooms have extra beds smaller than standard. Check-in:
            17:00 | Check-out: 12:00
          </p>
        </div>
      </section>

      {/* Transfers */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">
          Transfers
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Private Transfers - 1 x Car</li>
          <li>Madinah Airport → Madinah Hotel</li>
          <li>Madinah Hotel → Makkah Hotel</li>
          <li>Makkah Hotel → Jeddah Airport</li>
        </ul>
        <p className="mt-3 text-sm text-gray-600">
          Includes local Umrah guide, Ziyarah, Haramain Bullet Train, dedicated
          Umrah Manager, and complimentary e-SIM for 1 person.
        </p>
      </section>

      {/* Visa */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Visa</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>3 x Saudi Umrah Visa</li>
        </ul>
        <p className="text-sm text-gray-600 mt-2">
          Supplementary fee: £100 (Umrah visa), £70 (Tourist visa) for
          non-British passport holders. Additional documents may be required.
        </p>
      </section>

      {/* Pricing */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">
          Pricing Information
        </h2>
        <p className="text-gray-700">Adult: BDT 1,90,500 PP x 3</p>
        <p className="font-bold text-lg">Total Quote Value: £0</p>
      </section>

      {/* Transfer Instructions */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h2 className="text-xl font-semibold text-yellow-700 mb-2">
          Transfer Instructions (Must Read)
        </h2>
        <p className="text-gray-700 text-sm">
          Upon arrival in Saudi, purchase a local SIM (STC, Zain, Mobily). After
          baggage claim, contact Muhib Al Helal (+966 56 437 3190) for driver
          details. Drivers wait max 30 minutes at Makkah & Madinah hotels.
        </p>
      </section>
    </div>
  );
}
