// "use client";

// import { useState } from "react";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";

// export default function UmrahCalculator() {
//   // States
//   const [hotelMakkah, setHotelMakkah] = useState(0);
//   const [hotelMadinah, setHotelMadinah] = useState(0);
//   const [transfer, setTransfer] = useState(0);
//   const [visa, setVisa] = useState(0);
//   const [pax, setPax] = useState(1);
//   const [markup, setMarkup] = useState(0);

//   // Calculation
//   const total = hotelMakkah + hotelMadinah + transfer + visa;
//   const perPerson = pax > 0 ? total / pax : 0;
//   const grossPerPerson = perPerson + markup;

//   const categories = ["Adult", "Youth", "Child", "Infant"];

//   // PDF Generate
//   const generatePDF = () => {
//     const doc = new jsPDF();

//     // Header
//     doc.setFontSize(18);
//     doc.text("AL-SAMA UMRAH", 80, 15);
//     doc.setFontSize(14);
//     doc.text("UMRAH COST CALCULATION", 65, 25);

//     // Main Table
//     autoTable(doc, {
//       startY: 35,
//       head: [["Section", "Details", "Per Person (£)", "Total (£)"]],
//       body: [
//         ["Flights", "Adult / Youth / Child / Infant", "-", "-"],
//         ["Hotel - Makkah", "Anjum Hotel Makkah", `£${hotelMakkah}`, `£${hotelMakkah}`],
//         ["Hotel - Madinah", "Worth Peninsula Madinah", `£${hotelMadinah}`, `£${hotelMadinah}`],
//         ["Transfer", "Saudi (1 Car)", "-", `£${transfer}`],
//         ["Visa", "Umrah Visa", "-", `£${visa}`],
//       ],
//     });

//     // Summary
//     const summaryStart = doc.lastAutoTable.finalY + 10;
//     doc.setFontSize(12);
//     doc.text(`Hotel + Transfer + Visa: £${total}`, 20, summaryStart);
//     doc.text(`Pax: ${pax}`, 20, summaryStart + 10);
//     doc.text(`(H+T+V) Per Person: £${perPerson.toFixed(2)}`, 20, summaryStart + 20);
//     doc.text(`Markup Per Person: £${markup}`, 20, summaryStart + 30);
//     doc.text(`Gross Per Person: £${grossPerPerson.toFixed(2)}`, 20, summaryStart + 40);

//     // Final Gross Table
//     autoTable(doc, {
//       startY: summaryStart + 50,
//       head: [["Category", "Gross Per Person (£)"]],
//       body: categories.map((cat) => [cat, `£${grossPerPerson.toFixed(2)}`]),
//     });

//     doc.save("Umrah_Quotation.pdf");
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
//       {/* Header */}
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold">AL-SAMA UMRAH</h1>
//         <h2 className="text-xl font-semibold text-gray-700">
//           UMRAH COST CALCULATION
//         </h2>
//       </div>

//       {/* Inputs */}
//       <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow mb-6">
//         <label>
//           Makkah Hotel (£):
//           <input
//             type="number"
//             value={hotelMakkah}
//             onChange={(e) => setHotelMakkah(Number(e.target.value) || 0)}
//             className="w-full p-2 border rounded"
//           />
//         </label>
//         <label>
//           Madinah Hotel (£):
//           <input
//             type="number"
//             value={hotelMadinah}
//             onChange={(e) => setHotelMadinah(Number(e.target.value) || 0)}
//             className="w-full p-2 border rounded"
//           />
//         </label>
//         <label>
//           Transfer (£):
//           <input
//             type="number"
//             value={transfer}
//             onChange={(e) => setTransfer(Number(e.target.value) || 0)}
//             className="w-full p-2 border rounded"
//           />
//         </label>
//         <label>
//           Visa (£):
//           <input
//             type="number"
//             value={visa}
//             onChange={(e) => setVisa(Number(e.target.value) || 0)}
//             className="w-full p-2 border rounded"
//           />
//         </label>
//         <label>
//           Pax:
//           <input
//             type="number"
//             value={pax}
//             onChange={(e) => setPax(Number(e.target.value) || 1)}
//             className="w-full p-2 border rounded"
//           />
//         </label>
//         <label>
//           Markup (£):
//           <input
//             type="number"
//             value={markup}
//             onChange={(e) => setMarkup(Number(e.target.value) || 0)}
//             className="w-full p-2 border rounded"
//           />
//         </label>
//       </div>

//       {/* Summary */}
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-3">Summary</h3>
//           <p><strong>Hotel + Transfer + Visa:</strong> £{total}</p>
//           <p><strong>Pax:</strong> {pax}</p>
//           <p><strong>(H+T+V) Per Person:</strong> £{perPerson.toFixed(2)}</p>
//           <p><strong>Markup Per Person:</strong> £{markup}</p>
//           <p><strong>Gross Per Person:</strong> £{grossPerPerson.toFixed(2)}</p>
//         </div>

//         {/* Final Gross Table */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-3">Gross Per Person</h3>
//           <table className="w-full border text-center">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Category</th>
//                 <th className="border p-2">Cost (£)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {categories.map((cat) => (
//                 <tr key={cat}>
//                   <td className="border p-2">{cat}</td>
//                   <td className="border p-2">£{grossPerPerson.toFixed(2)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* PDF Button */}
//       <div className="text-center">
//         <button
//           onClick={generatePDF}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
//         >
//           Generate & Download PDF
//         </button>
//       </div>
//     </div>
//   );
// }
// ------------------------------------------------------------------

// "use client";

// import { useState } from "react";

// export default function UmrahCalculator() {
//   // Per Person Price (default empty)
//   const [priceAdult, setPriceAdult] = useState("");
//   const [priceYouth, setPriceYouth] = useState("");
//   const [priceChild, setPriceChild] = useState("");
//   const [priceInfant, setPriceInfant] = useState("");

//   // Grand Total (সবগুলোর যোগফল)
//   const grandTotal =
//     (Number(priceAdult) || 0) +
//     (Number(priceYouth) || 0) +
//     (Number(priceChild) || 0) +
//     (Number(priceInfant) || 0);

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {/* Header */}
//       <div className="bg-gray-800 text-white text-center py-4 rounded-t-xl shadow">
//         <h1 className="text-3xl font-bold tracking-widest">AL-SAMA UMRAH</h1>
//       </div>

//       {/* Flights Table */}
//       <div className="border border-gray-700">
//         <div className="bg-gray-900 text-white text-center py-2 font-semibold">
//           Flights Cost Calculation
//         </div>

//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-800 text-white">
//               <th className="p-2 border border-gray-700">Category</th>
//               <th className="p-2 border border-gray-700">Per Person (£)</th>
//             </tr>
//           </thead>

//           <tbody>
//             {/* Adult */}
//             <tr>
//               <td className="border border-gray-700 p-2">Adult</td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={priceAdult}
//                   onChange={(e) => setPriceAdult(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>

//             {/* Youth */}
//             <tr>
//               <td className="border border-gray-700 p-2">Youth</td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={priceYouth}
//                   onChange={(e) => setPriceYouth(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>

//             {/* Child */}
//             <tr>
//               <td className="border border-gray-700 p-2">Child</td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={priceChild}
//                   onChange={(e) => setPriceChild(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>

//             {/* Infant */}
//             <tr>
//               <td className="border border-gray-700 p-2">Infant</td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={priceInfant}
//                   onChange={(e) => setPriceInfant(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>
//           </tbody>

//           {/* Grand Total */}
//           <tfoot>
//             <tr className="bg-gray-200 font-bold">
//               <td className="text-right border border-gray-700 p-2">
//                 Grand Total
//               </td>
//               <td className="border border-gray-700 p-2 text-right">
//                 £ {grandTotal.toFixed(2)}
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     </div>
//   );
// }


// ---------------------------------------------------
// "use client";

// import { useState } from "react";

// export default function UmrahCalculator() {
//   // Flights Prices
//   const [priceAdult, setPriceAdult] = useState("");
//   const [priceYouth, setPriceYouth] = useState("");
//   const [priceChild, setPriceChild] = useState("");
//   const [priceInfant, setPriceInfant] = useState("");

//   const flightTotal =
//     (Number(priceAdult) || 0) +
//     (Number(priceYouth) || 0) +
//     (Number(priceChild) || 0) +
//     (Number(priceInfant) || 0);

//   // Hotel Section
//   const [makkaHotel, setMakkaHotel] = useState("");
//   const [makkaPrice, setMakkaPrice] = useState("");

//   const [madinaHotel, setMadinaHotel] = useState("");
//   const [madinaPrice, setMadinaPrice] = useState("");

//   const [holidayPackage, setHolidayPackage] = useState("");
//   const [holidayPrice, setHolidayPrice] = useState("");

//   const hotelTotal =
//     (Number(makkaPrice) || 0) +
//     (Number(madinaPrice) || 0) +
//     (Number(holidayPrice) || 0);

//   return (
//     <div className="max-w-3xl mx-auto p-4 space-y-6">
//       {/* Header */}
//       <div className="bg-gray-800 text-white text-center py-4 rounded-t-xl shadow">
//         <h1 className="text-3xl font-bold tracking-widest">AL-SAMA UMRAH</h1>
//       </div>

//       {/* Flights Table */}
//       <div className="border border-gray-700 rounded">
//         <div className="bg-gray-900 text-white text-center py-2 font-semibold">
//           Flights Cost Calculation
//         </div>

//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-800 text-white">
//               <th className="p-2 border border-gray-700">Category</th>
//               <th className="p-2 border border-gray-700">Per Person (£)</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td className="border border-gray-700 p-2">Adult</td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={priceAdult}
//                   onChange={(e) => setPriceAdult(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td className="border border-gray-700 p-2">Youth</td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={priceYouth}
//                   onChange={(e) => setPriceYouth(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td className="border border-gray-700 p-2">Child</td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={priceChild}
//                   onChange={(e) => setPriceChild(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td className="border border-gray-700 p-2">Infant</td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={priceInfant}
//                   onChange={(e) => setPriceInfant(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>
//           </tbody>

//           <tfoot>
//             <tr className="bg-gray-200 font-bold">
//               <td className="text-right border border-gray-700 p-2">Total</td>
//               <td className="border border-gray-700 p-2 text-right">
//                 £ {flightTotal.toFixed(2)}
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>

//       {/* Hotel Table */}
//       <div className="border border-gray-700 rounded">
//         <div className="bg-gray-900 text-white text-center py-2 font-semibold">
//           Hotel Cost Calculation
//         </div>

//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-800 text-white">
//               <th className="p-2 border border-gray-700">Category</th>
//               <th className="p-2 border border-gray-700">Hotel</th>
//               <th className="p-2 border border-gray-700">Price (£)</th>
//             </tr>
//           </thead>

//           <tbody>
//             {/* Makkah */}
//             <tr>
//               <td className="border border-gray-700 p-2">Makkah</td>
//               <td className="border border-gray-700 p-2 text-center">
//                 <select
//                   value={makkaHotel}
//                   onChange={(e) => setMakkaHotel(e.target.value)}
//                   className="w-full border px-2 py-1"
//                 >
//                   <option value="">Select Hotel</option>
//                   <option value="Swissotel Makkah">Swissotel Makkah</option>
//                   <option value="Pullman ZamZam">Pullman ZamZam</option>
//                   <option value="Hilton Makkah">Hilton Makkah</option>
//                 </select>
//               </td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={makkaPrice}
//                   onChange={(e) => setMakkaPrice(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>

//             {/* Madinah */}
//             <tr>
//               <td className="border border-gray-700 p-2">Madinah</td>
//               <td className="border border-gray-700 p-2 text-center">
//                 <select
//                   value={madinaHotel}
//                   onChange={(e) => setMadinaHotel(e.target.value)}
//                   className="w-full border px-2 py-1"
//                 >
//                   <option value="">Select Hotel</option>
//                   <option value="Anwar Al Madinah Mövenpick">Anwar Al Madinah Mövenpick</option>
//                   <option value="Pullman ZamZam Madinah">Pullman ZamZam Madinah</option>
//                   <option value="Dar Al Taqwa">Dar Al Taqwa</option>
//                 </select>
//               </td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={madinaPrice}
//                   onChange={(e) => setMadinaPrice(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>

//             {/* Holiday */}
//             <tr>
//               <td className="border border-gray-700 p-2">Holiday</td>
//               <td className="border border-gray-700 p-2 text-center">
//                 <select
//                   value={holidayPackage}
//                   onChange={(e) => setHolidayPackage(e.target.value)}
//                   className="w-full border px-2 py-1"
//                 >
//                   <option value="">Select Package</option>
//                   <option value="Economy Package">Economy Package</option>
//                   <option value="Standard Package">Standard Package</option>
//                   <option value="Luxury Package">Luxury Package</option>
//                 </select>
//               </td>
//               <td className="border border-gray-700 p-2 text-right">
//                 <input
//                   type="number"
//                   value={holidayPrice}
//                   onChange={(e) => setHolidayPrice(e.target.value)}
//                   className="w-32 border px-2 py-1 text-right"
//                   placeholder="Enter price"
//                 />
//               </td>
//             </tr>
//           </tbody>

//           <tfoot>
//             <tr className="bg-gray-200 font-bold">
//               <td colSpan="2" className="text-right border border-gray-700 p-2">
//                 Total
//               </td>
//               <td className="border border-gray-700 p-2 text-right">
//                 £ {hotelTotal.toFixed(2)}
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     </div>
//   );
// }

// ---------------------------------------------------

"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai";

export default function UmrahCalculator() {
  // Flights Prices
  const [priceAdult, setPriceAdult] = useState("");
  const [priceYouth, setPriceYouth] = useState("");
  const [priceChild, setPriceChild] = useState("");
  const [priceInfant, setPriceInfant] = useState("");

  const flightTotal =
    (Number(priceAdult) || 0) +
    (Number(priceYouth) || 0) +
    (Number(priceChild) || 0) +
    (Number(priceInfant) || 0);

  // Hotel Section
  const [makkaHotel, setMakkaHotel] = useState("");
  const [makkaPrice, setMakkaPrice] = useState("");

  const [madinaHotel, setMadinaHotel] = useState("");
  const [madinaPrice, setMadinaPrice] = useState("");

  const [holidayPackage, setHolidayPackage] = useState("");
  const [holidayPrice, setHolidayPrice] = useState("");

  const hotelTotal =
    (Number(makkaPrice) || 0) +
    (Number(madinaPrice) || 0) +
    (Number(holidayPrice) || 0);

  // Transfer Section
  const [holidayTransferType, setHolidayTransferType] = useState("");
  const [holidayTransferPrice, setHolidayTransferPrice] = useState("");

  const [saudiTransferType, setSaudiTransferType] = useState("");
  const [saudiTransferPrice, setSaudiTransferPrice] = useState("");

  const transferTotal =
    (Number(holidayTransferPrice) || 0) + (Number(saudiTransferPrice) || 0);

  // Visa Section
  const [evwPrice, setEvwPrice] = useState(0);
  const [umrahPrice, setUmrahPrice] = useState(0);

  const visaTotal = (Number(evwPrice) || 0) + (Number(umrahPrice) || 0);

  // Summary Section
  const htvTotal = hotelTotal + transferTotal + visaTotal; // Hotel+Transfer+Visa
  const [pax, setPax] = useState(1); // Number of people
  const htvPerPerson = pax > 0 ? htvTotal / pax : 0;

  const [markup, setMarkup] = useState(0); // Markup per person

  const grossAdult = htvPerPerson + Number(markup) + (Number(priceAdult) || 0);
  const grossYouth = htvPerPerson + Number(markup) + (Number(priceYouth) || 0);
  const grossChild = htvPerPerson + Number(markup) + (Number(priceChild) || 0);
  const grossInfant = htvPerPerson + Number(markup) + (Number(priceInfant) || 0);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-center py-5 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold tracking-wide">
          AL-SAMA UMRAH CALCULATOR
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Flights Card */}
        <div className="bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Flights Cost
          </h2>
          <div className="space-y-3">
            {["Adult", "Youth", "Child", "Infant"].map((cat, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="font-medium text-gray-700">{cat}</span>
                <input
                  type="number"
                  value={
                    cat === "Adult"
                      ? priceAdult
                      : cat === "Youth"
                      ? priceYouth
                      : cat === "Child"
                      ? priceChild
                      : priceInfant
                  }
                  onChange={(e) => {
                    if (cat === "Adult") setPriceAdult(e.target.value);
                    else if (cat === "Youth") setPriceYouth(e.target.value);
                    else if (cat === "Child") setPriceChild(e.target.value);
                    else setPriceInfant(e.target.value);
                  }}
                  placeholder="£"
                  className="w-24 border border-gray-300 rounded px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 text-right font-bold text-indigo-600 text-lg">
            Total: £{flightTotal.toFixed(2)}
          </div>
        </div>

        {/* Hotels Card */}
        <div className="bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Hotels Cost
          </h2>

          {[
            {
              label: "Makkah",
              hotel: makkaHotel,
              setHotel: setMakkaHotel,
              price: makkaPrice,
              setPrice: setMakkaPrice,
              options: ["Swissotel Makkah", "Pullman ZamZam", "Hilton Makkah"],
            },
            {
              label: "Madinah",
              hotel: madinaHotel,
              setHotel: setMadinaHotel,
              price: madinaPrice,
              setPrice: setMadinaPrice,
              options: [
                "Anwar Al Madinah Mövenpick",
                "Pullman ZamZam Madinah",
                "Dar Al Taqwa",
              ],
            },
            {
              label: "Holiday",
              hotel: holidayPackage,
              setHotel: setHolidayPackage,
              price: holidayPrice,
              setPrice: setHolidayPrice,
              options: ["Economy Package", "Standard Package", "Luxury Package"],
            },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center mb-3">
              <span className="font-medium text-gray-700 w-24">
                {item.label}
              </span>
              <select
                value={item.hotel}
                onChange={(e) => item.setHotel(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-2 py-1 mx-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select</option>
                {item.options.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={item.price}
                onChange={(e) => item.setPrice(e.target.value)}
                placeholder="£"
                className="w-24 border border-gray-300 rounded px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}
          <div className="mt-4 text-right font-bold text-indigo-600 text-lg">
            Total: £{hotelTotal.toFixed(2)}
          </div>
        </div>

        {/* Transfers Card */}
        <div className="bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Transfers Cost
          </h2>

          {[
            {
              label: "Holiday",
              type: holidayTransferType,
              setType: setHolidayTransferType,
              price: holidayTransferPrice,
              setPrice: setHolidayTransferPrice,
            },
            {
              label: "Saudi",
              type: saudiTransferType,
              setType: setSaudiTransferType,
              price: saudiTransferPrice,
              setPrice: setSaudiTransferPrice,
            },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center mb-3">
              <span className="font-medium text-gray-700 w-24">
                {item.label}
              </span>
              <select
                value={item.type}
                onChange={(e) => item.setType(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-2 py-1 mx-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Vehicle</option>
                <option value="Car">Car</option>
                <option value="Staria">Staria</option>
                <option value="Bus">Bus</option>
              </select>
              <input
                type="number"
                value={item.price}
                onChange={(e) => item.setPrice(e.target.value)}
                placeholder="£"
                className="w-24 border border-gray-300 rounded px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}
          <div className="mt-4 text-right font-bold text-indigo-600 text-lg">
            Total: £{transferTotal.toFixed(2)}
          </div>
        </div>

        {/* Visa Card */}
        <div className="bg-white shadow-lg rounded-xl p-5">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Visa Cost
          </h2>
          {["EVW", "Umrah"].map((v, idx) => (
            <div key={idx} className="flex justify-between items-center mb-3">
              <span className="font-medium text-gray-700 w-24">{v}</span>
              <input
                type="number"
                value={v === "EVW" ? evwPrice : umrahPrice}
                onChange={(e) =>
                  v === "EVW"
                    ? setEvwPrice(e.target.value)
                    : setUmrahPrice(e.target.value)
                }
                placeholder="£"
                className="w-24 border border-gray-300 rounded px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ))}
          <div className="mt-4 text-right font-bold text-indigo-600 text-lg">
            Total: £{visaTotal.toFixed(2)}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white shadow-lg rounded-xl p-5 col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Summary
            </h2>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-lg shadow">
                <AiOutlineEye size={18} /> Preview
              </button>
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg shadow">
                <AiOutlineDownload size={18} /> Download
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-3">
            <span className="font-medium text-gray-700">
              Hotel + Transfer + Visa
            </span>
            <span className="font-bold text-indigo-600">
              £{htvTotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center mb-3">
            <span className="font-medium text-gray-700">Pax</span>
            <input
              type="number"
              value={pax}
              onChange={(e) => setPax(Number(e.target.value))}
              className="w-24 border border-gray-300 rounded px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-between items-center mb-3">
            <span className="font-medium text-gray-700">(H+T+V) Per Person</span>
            <span className="font-bold text-indigo-600">
              £{htvPerPerson.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center mb-3">
            <span className="font-medium text-gray-700">Markup Per Person</span>
            <input
              type="number"
              value={markup}
              onChange={(e) => setMarkup(Number(e.target.value))}
              className="w-24 border border-gray-300 rounded px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 text-black font-extrabold rounded-xl p-4 shadow-md">
              <h3 className="text-lg font-semibold mb-3">Gross Per Person</h3>
              {[
                { label: "Adult", value: grossAdult },
                { label: "Youth", value: grossYouth },
                { label: "Child", value: grossChild },
                { label: "Infant", value: grossInfant },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between mb-2">
                  <span>{item.label}</span>
                  <span>£{item.value.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 rounded-xl p-4 shadow-inner">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Notes</h3>
              <textarea
                placeholder="Write your notes here..."
                className="w-full h-32 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
