"use client";

import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="mb-4 text-lg font-semibold">Loading...</p>
      <Image
        src="/loading.png"
        alt="Loading..."
        width={150}
        height={150}
        priority
      />
    </div>
  );
}
