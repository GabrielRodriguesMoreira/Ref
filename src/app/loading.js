import React from 'react';

export default function Loading() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#FF69B4"
                    strokeWidth="8"
                    strokeDasharray="164.93361431346415 56.97787143782138"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        dur="1s"
                        keyTimes="0;1"
                        values="0 50 50;360 50 50"
                    ></animateTransform>
                </circle>
            </svg>
            <h1 className='mt-10 text-2xl font-medium text-pink-600 animate-pulse'>Só um momento...</h1>
        </div>
    );
}
