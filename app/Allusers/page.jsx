"use client";

import { useState } from "react";

export default function AllUsers() {
  const [users, setUsers] = useState([
    {
      userID: "nuhash1188",
      name: "Nuhash",
      email: "nuhash3218@gmail.com",
      password: "123456",
      type: "admin",
    },
    {
      userID: "nobin2233",
      name: "Nobin",
      email: "nabz9988@gmail.com",
      password: "123456",
      type: "user",
    },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.userID !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit user: ${id} (এখানে modal বা form বসাতে পারবেন)`);
  };

  return (
    // <div className="min-h-screen bg-gray-50 p-6">
    //   <div className="bg-white rounded-2xl shadow-lg p-6">
    //     {/* Header */}
    //     <div className="flex items-center justify-between mb-6">
    //       <h1 className="text-2xl font-bold text-gray-800">All Users</h1>
    //       <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
    //         + Add User
    //       </button>
    //     </div>

    //     {/* User Table */}
    //     <div className="overflow-x-auto">
    //       <table className="w-full text-sm text-left text-gray-600">
    //         <thead className="text-xs uppercase bg-gray-100 text-gray-500">
    //           <tr>
    //             <th className="px-6 py-3">User ID</th>
    //             <th className="px-6 py-3">Name</th>
    //             <th className="px-6 py-3">Email</th>
    //             <th className="px-6 py-3">Type</th>
    //             <th className="px-6 py-3 text-right">Actions</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {users.map((u, index) => (
    //             <tr
    //               key={u.userID}
    //               className={`border-b ${
    //                 index % 2 === 0 ? "bg-white" : "bg-gray-50"
    //               } hover:bg-indigo-50 transition`}
    //             >
    //               <td className="px-6 py-4 font-mono text-gray-800">
    //                 {u.userID}
    //               </td>
    //               <td className="px-6 py-4">{u.name}</td>
    //               <td className="px-6 py-4">{u.email}</td>
    //               <td className="px-6 py-4">
    //                 <span
    //                   className={`px-3 py-1 text-xs font-medium rounded-full ${
    //                     u.type === "admin"
    //                       ? "bg-indigo-100 text-indigo-700"
    //                       : "bg-green-100 text-green-700"
    //                   }`}
    //                 >
    //                   {u.type}
    //                 </span>
    //               </td>
    //               <td className="px-6 py-4 flex justify-end gap-2">
    //                 <button
    //                   onClick={() => handleEdit(u.userID)}
    //                   className="px-3 py-1 text-xs font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition"
    //                 >
    //                   Edit
    //                 </button>
    //                 <button
    //                   onClick={() => handleDelete(u.userID)}
    //                   className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
    //                 >
    //                   Delete
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>

    //       {users.length === 0 && (
    //         <p className="text-center text-gray-500 py-6">No users found</p>
    //       )}
    //     </div>
    //   </div>
    // </div>
     
    <div className="max-w-3xl mx-auto bg-white p-10 font-serif text-black leading-relaxed">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Demo For Web</h1>
      <p className="text-center mb-10">
        You to explore our exclusive Umrah packages, each thoughtfully crafted to make your pilgrimage a truly blessed experience
      </p>

      {/* Flights */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold underline mb-4">Flights Itinerary</h2>
        <div className="space-y-1">
          <p className="font-bold">Baggage Information:</p>
          <p className="pl-8">Hold Luggage: 20 KG Per Person</p>
          <p className="pl-8">Cabin Luggage: 7 KG Per Person</p>
        </div>
      </section>

      {/* Hotels */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold underline mb-6">HOTELS OPTION 1</h2>

        {/* Madinah Hotel */}
        <div className="mb-6">
          <h3 className="font-bold uppercase">MADINAH HOTEL</h3>
          <p>or Similar Zowar International Hotel 4*</p>
          <p>📍 Madinah (3-4 min walking distance to haram)</p>
          <p className="pl-8">Check-in: 17 Nov 2025</p>
          <p className="pl-8">Check-out: 21 Nov 2025</p>
          <p className="pl-8">Room: 1 x Double</p>
          <p className="pl-8">Board: Breakfast</p>
        </div>

        <p className="text-center text-gray-700 mb-6">
          --------------------------------- oOo ---------------------------------
        </p>

        {/* Makkah Hotel */}
        <div>
          <h3 className="font-bold uppercase">MAKKAH HOTEL</h3>
          <p>or Similar Anjum Hotel Makkah 5*</p>
          <p>📍 Makkah (5 min walking distance to haram)</p>
          <p className="pl-8">Check-in: 11 Aug 2025</p>
          <p className="pl-8">Check-out: 16 Aug 2025</p>
          <p className="pl-8">Room: 1 x Triple</p>
          <p className="pl-8">Board: Breakfast</p>
          <p className="mt-3 text-sm">
            Triple and Quad rooms will have additional extra beds which are not
            standard bedding and extra bed sizes smaller than standard beds.  
            Saudi Hotel check-in/out: 17:00 / 12:00
          </p>
        </div>
      </section>

      {/* Transfers */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold underline mb-4">TRANSFERS</h2>
        <p>Private Transfers - 1 x Car</p>
        <p className="pl-8">Madinah Airport → Madinah Hotel</p>
        <p className="pl-8">Madinah Hotel → Makkah Hotel</p>
        <p className="pl-8">Makkah Hotel → Jeddah Airport</p>
        <p className="mt-3 text-sm">
          Complementary Local Umrah guide and ground assistance. Ziyarah included
          in Makkah & Madinah with guide. Haramain Bullet Train Makkah to Madinah
          Included. Dedicated Umrah Manager. Complimentary e-sim for One Person In
          Saudi.
        </p>
      </section>

      {/* Visa */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold underline mb-4">VISA</h2>
        <p className="pl-8">● 3 x Saudi Umrah Visa</p>
        <p className="mt-2 text-sm">
          Supplementary fee of £100 applies for Umrah visas and £70 for Saudi
          tourist visas for non-British passport holders. Additional documentation
          may be required.
        </p>
      </section>

      {/* Pricing */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold underline mb-4">
          Pricing Information
        </h2>
        <p className="pl-8">Adult: BDT 1,90,500 PP x 3</p>
        <p className="pl-8 font-bold mt-2">Total Quote Value: £0</p>
      </section>

      {/* Transfer Instructions */}
      <section className="border border-black p-4">
        <h2 className="text-xl font-bold mb-2">
          Transfer Instruction: (Must read)
        </h2>
        <p className="text-sm">
          To ensure a seamless transfer experience, purchase a local SIM card
          (STC, Zain, Mobily) upon landing in Saudi. After baggage claim, contact
          Muhib Al Helal (+966 56 437 3190), our Alsama Saudi Operation Manager,
          for driver details. Drivers wait max 30 minutes while picking up from
          Makkah & Madinah Hotel.
        </p>
      </section>
    </div>
  );
}
