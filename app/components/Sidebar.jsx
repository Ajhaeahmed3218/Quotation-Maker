"use client";
import { FaCalculator } from "react-icons/fa6";
import React, { useState } from "react";
import { IoFileTrayStacked, IoFileTraySharp } from "react-icons/io5";
import { FaHome, FaThLarge, FaUserFriends, FaCog, FaSignOutAlt, FaBars, FaTimes, FaChevronLeft, } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { MdFlight } from "react-icons/md";

const navItems = [
    { id: "dashboard", icon: FaThLarge, label: "Dashboard", path: "/" },
    { id: "calculator", icon: FaCalculator, label: "Calculator", path: "Calculator" },
    { id: "flight maker", icon: MdFlight, label: "Flight Maker", path: "FlightMaker" },
    { id: "all users", icon: FaUserFriends, label: "All Users", path: "Allusers" },
    { id: "all quotations", icon: IoFileTrayStacked, label: "All Quotation" },
    { id: "my quotations", icon: IoFileTraySharp, label: "My Quotation" },
    { id: "settings", icon: FaCog, label: "Settings" },
];

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState("dashboard");

    const handleSelect = (id) => {
        setActive(id);
        setMobileOpen(false);
    };
    const session = useSession();
    console.log(session?.data?.user);
    return (
        <div className="flex">
            {/* Mobile Topbar */}
            <div className="md:hidden flex items-center justify-between w-full p-3 bg-white border-b">
                <button
                    className="p-2 rounded-md hover:bg-gray-100"
                    onClick={() => setMobileOpen(true)}
                >
                    <FaBars />
                </button>
                <div className="text-lg font-semibold">Flight Maker</div>
                <div className="w-8" />
            </div>

            {/* Sidebar (Desktop) */}
            <aside
                className={`hidden md:flex flex-col h-screen sticky top-0 bg-white border-r transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
                    }`}
            >
                {/* Brand + Collapse */}
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-500 text-white rounded-md w-10 h-10 flex items-center justify-center font-bold">
                            A
                        </div>
                        {!isCollapsed && (
                            <div>
                                <span className="font-semibold">Al-Sama</span>
                                <p className="text-xs text-gray-500">Dashboard</p>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setIsCollapsed((s) => !s)}
                        className="p-2 rounded-md hover:bg-gray-100"
                    >
                        <FaChevronLeft
                            className={`transition-transform ${isCollapsed ? "-rotate-180" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 mt-4">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = active === item.id;
                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.path || "#"}
                                        onClick={() => handleSelect(item.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50 relative ${isActive ? "font-semibold text-indigo-600" : "text-gray-700"
                                            }`}
                                    >
                                        <Icon size={18} />
                                        <AnimatePresence>
                                            {!isCollapsed && (
                                                <motion.span
                                                    initial={{ opacity: 0, x: -6 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -6 }}
                                                >
                                                    {item.label}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>

                                        {isActive && (
                                            <motion.span
                                                layoutId="activeIndicator"
                                                className="absolute right-2 h-6 w-1 rounded-full bg-indigo-500"
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer */}
                {session?.data?.user ? (
                    // ইউজার লগইন করা আছে → Logout দেখাবে
                    <button className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50">
                        <FaSignOutAlt size={18} />
                        <span>Logout</span>
                    </button>
                ) : (
                    // ইউজার লগইন করা নাই → Login দেখাবে
                    <Link href={"/api/auth/signin"} className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50">
                        <FaSignOutAlt size={18} />
                        <span>Login</span>
                    </Link>
                )}
            </aside>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black opacity-40"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-72 h-full bg-white shadow-xl"
                        >
                            <div className="flex items-center justify-between p-4 border-b">
                                <div className="flex items-center gap-3">
                                    <div className="bg-indigo-500 text-white rounded-md w-10 h-10 flex items-center justify-center font-bold">
                                        F
                                    </div>
                                    <div>
                                        <span className="font-semibold">Flight Maker</span>
                                        <p className="text-xs text-gray-500">Dashboard</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="p-2 rounded-md hover:bg-gray-100"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            <nav className="p-4 space-y-2">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = active === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => handleSelect(item.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50 ${isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-700"
                                                }`}
                                        >
                                            <Icon size={18} />
                                            <span>{item.label}</span>
                                        </button>
                                    );
                                })}
                            </nav>

                            <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
                                {session?.data?.user ? (
                                    // ইউজার লগইন করা আছে → Logout দেখাবে
                                    <button className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50">
                                        <FaSignOutAlt size={18} />
                                        <span>Logout</span>
                                    </button>
                                ) : (
                                    // ইউজার লগইন করা নাই → Login দেখাবে
                                    <button className="w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50">
                                        <FaSignOutAlt size={18} />
                                        <span>Login</span>
                                    </button>
                                )}
                            </div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            {/* <main className="flex-1 min-h-screen p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p className="text-gray-600">Sidebar is responsive & animated 🚀</p>
      </main> */}
        </div>
    );
};

export default Sidebar;
