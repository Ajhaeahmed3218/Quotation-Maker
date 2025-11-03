"use client";
import React from 'react';

const error = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-red-600 text-center mt-10">
                Oops! Something went wrong.
            </h1>
            <p className="text-center mt-4 text-gray-600">
                Please try refreshing the page or come back later.
            </p>
        </div>
    );
};

export default error;