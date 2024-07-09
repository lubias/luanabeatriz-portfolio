'use client'
import React, { useState } from 'react'

const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="relative flex flex-col items-center group">
            <div
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="cursor-pointer"
            >
                {children}
            </div>
            {showTooltip && (
                <div className="absolute bottom-full mb-2 w-32 p-2 bg-[#171717c4] text-white text-xs rounded-lg shadow-lg text-center">
                    {text}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0"></div>
                </div>
            )}
        </div>
    );
};

export default Tooltip