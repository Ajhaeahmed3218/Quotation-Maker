"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";

// এয়ারপোর্ট নাম (তুমি চাইলে বাড়াতে পারো)
const airportNames = {
  // London Airports
  LHR: "London Heathrow Airport",
  LGW: "London Gatwick Airport",
  LCY: "London City Airport",
  LTN: "London Luton Airport",
  STN: "London Stansted Airport",
  SEN: "London Southend Airport",

  // USA Airports
  JFK: "New York John F. Kennedy Intl Airport",
  EWR: "Newark Liberty Intl Airport",
  LGA: "New York LaGuardia Airport",
  ORD: "Chicago O'Hare Intl Airport",
  LAX: "Los Angeles Intl Airport",
  SFO: "San Francisco Intl Airport",
  MIA: "Miami Intl Airport",
  DFW: "Dallas/Fort Worth Intl Airport",
  ATL: "Hartsfield–Jackson Atlanta Intl Airport",
  IAD: "Washington Dulles Intl Airport",

  // UAE / Dubai Airports
  DXB: "Dubai Intl Airport",
  DWC: "Dubai Al Maktoum Intl (Dubai World Central)",
  AUH: "Abu Dhabi Intl Airport",
  SHJ: "Sharjah Intl Airport",
  RKT: "Ras Al Khaimah Intl Airport",
  FJR: "Fujairah Intl Airport",

  // Saudi Arabia Airports
  JED: "Jeddah King Abdulaziz Intl Airport",
  MED: "Madinah Prince Mohammad bin Abdulaziz Airport",
  RUH: "Riyadh King Khalid Intl Airport",
  DMM: "Dammam King Fahd Intl Airport",
  TIF: "Taif Intl Airport",
  ELQ: "Gassim Prince Nayef bin Abdulaziz Airport",
  HOF: "Al-Ahsa Intl Airport",

  // Qatar Airports
  DOH: "Doha Hamad Intl Airport",
  // Jordan Airports
  AMM: "Amman Queen Alia Intl Airport",
  OMF: "Amman Marka Intl Airport",
};


export default function Home() {
  const [input, setInput] = useState("");
  const [flights, setFlights] = useState([]);
  const parseFlights = () => {
    const lines = input.split("\n").filter((l) => l.trim() !== "");
    const parsed = [];

    // উদাহরণ ফরম্যাট: 
    // 1  BG 202 L 12DEC 5 LHRZYL DK1  1815 0955  13DEC  E  0 789 M
    const regex =
      /\s*([A-Z]{2})\s*(\d+).*?(\d{2}[A-Z]{3})\s.*?([A-Z]{3})([A-Z]{3}).*?(\d{4})\s+(\d{4})/;

    for (let line of lines) {
      const match = line.match(regex);
      if (match) {
        const [, airlineCode, flightNumber, date, dep, arr, depTime, arrTime] =
          match;

        parsed.push({
          airline:
            airlineCode === "BG"
              ? "Biman Bangladesh Airlines"
              : airlineCode === "W9"
              ? "WizzAir"
              : airlineCode,
          flightNumber: airlineCode + " " + flightNumber,
          date,
          depAirport: airportNames[dep] || dep,
          arrAirport: airportNames[arr] || arr,
          depTime,
          arrTime,
        });
      }
    }

    setFlights(parsed);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">Flights Itinerary</h1>

      <textarea
        className="w-full border rounded p-2 mb-4"
        rows={4}
        placeholder="Paste flight segments here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={parseFlights}
        className="mb-4 px-4 py-2 bg-indigo-500 text-white rounded"
      >
        Generate Flights
      </button>

      {flights.length > 0 && (
        <table className="w-full border border-gray-400 text-center">
          <thead>
            <tr className="bg-teal-900 text-white">
              <th className="p-2 border border-gray-400">Flight</th>
              <th className="p-2 border border-gray-400">Date</th>
              <th className="p-2 border border-gray-400">Dep. Airport</th>
              <th className="p-2 border border-gray-400">Arri. Airport</th>
              <th className="p-2 border border-gray-400">Dep. Time</th>
              <th className="p-2 border border-gray-400">Arri. Time</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((f, idx) => (
              <tr key={idx} className="bg-white">
                <td className="border border-gray-400 p-2">
                  <div className="flex flex-col items-center">
                    <span>{f.airline}</span>
                    <span className="text-red-600 font-semibold">
                      {f.flightNumber}
                    </span>
                  </div>
                </td>
                <td className="border border-gray-400 p-2">{f.date}</td>
                <td className="border border-gray-400 p-2">{f.depAirport}</td>
                <td className="border border-gray-400 p-2">{f.arrAirport}</td>
                <td className="border border-gray-400 p-2">{f.depTime}</td>
                <td className="border border-gray-400 p-2">{f.arrTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
