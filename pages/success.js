import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Success() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0fdf4] flex items-center justify-center p-6 font-sans">
      <Head>
        <title>Order Confirmed | Ecoyaan</title>
      </Head>

      <div className={`max-w-md w-full bg-white rounded-3xl shadow-2xl shadow-green-200/50 p-10 text-center transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
     
        <div className="relative mb-8 flex justify-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-16 h-16 bg-[#15803d] rounded-full flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
        
          <div className="absolute top-0 -right-2 text-2xl animate-bounce delay-100">🌿</div>
          <div className="absolute bottom-0 -left-2 text-2xl animate-bounce delay-300">🌱</div>
        </div>

      
        <h1 className="text-3xl font-black text-gray-800 mb-2 tracking-tight">
          Order Successful!
        </h1>
        <p className="text-gray-500 font-medium mb-8">
          Your sustainable choices are on their way.
        </p>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-8 text-left">
          <div className="flex justify-between mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Order ID</span>
            <span className="text-xs font-mono font-bold text-gray-800">#EY-98231-A</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            We've sent a confirmation email with tracking details to your inbox.
          </p>
        </div>


        <div className="mb-10">
          <div className="inline-block px-4 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100">
            Impact: 1.2kg CO2 saved today
          </div>
        </div>

        
        <div className="space-y-4">
          <Link href="/" className="block w-full bg-[#15803d] hover:bg-[#166534] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95">
            Continue Shopping
          </Link>
          <button className="block w-full text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">
            View Order Details
          </button>
        </div>
      </div>
    </div>
  );
}