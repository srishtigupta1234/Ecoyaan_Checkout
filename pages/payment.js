import { useContext, useState } from "react";
import { CheckoutContext } from "../context/checkoutContext";
import { useRouter } from "next/router";
import CheckoutSteps from "../components/CheckoutSteps";
import Head from "next/head";

export default function Payment() {
  const { address, cart, subtotal, shipping, total } = useContext(CheckoutContext);
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);

    setTimeout(() => {
      router.push("/success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] pb-20 font-sans">
      <Head>
        <title>Payment | Ecoyaan</title>
      </Head>

      <div className="max-w-2xl mx-auto px-6 pt-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gray-800 mb-2">Final Review</h1>
          <p className="text-gray-500 font-medium">One last check before we start packing!</p>
        </div>

        <CheckoutSteps step={3} />

        <div className="mt-10 space-y-6">
          
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
               <button 
                onClick={() => router.push("/shipping")}
                className="text-xs font-bold text-green-700 uppercase tracking-widest hover:underline"
               >
                 Edit
               </button>
            </div>
            
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="text-lg">📍</span> Shipping Details
            </h2>
            
            <div className="space-y-1">
              <p className="font-bold text-xl text-gray-800">{address?.name || "Guest User"}</p>
              <p className="text-gray-600 leading-relaxed max-w-[80%]">
                {address?.city}, {address?.state} {address?.pinCode}<br />
                <span className="text-sm font-medium">📞 {address?.phone}</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#15803d]/20 bg-green-50/30">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
              Payment Method
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-[10px] text-white font-bold">VISA</div>
                <p className="font-bold text-gray-800">Ending in •••• 4242</p>
              </div>
              <div className="h-5 w-5 rounded-full border-4 border-[#15803d] bg-white"></div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-green-900/5">
             <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Items Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Shipping Fee</span>
                  <span className="text-green-600">₹{shipping}</span>
                </div>
                <div className="flex justify-between py-4 border-t border-dashed mt-4">
                  <span className="text-xl font-black text-gray-800">Total Amount</span>
                  <span className="text-2xl font-black text-gray-900">₹{total}</span>
                </div>
             </div>

             <button
                disabled={isProcessing}
                onClick={handlePayment}
                className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3
                  ${isProcessing 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#15803d] hover:bg-[#116631] text-white hover:-translate-y-1 active:scale-95 shadow-green-200'
                  }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Pay Securely ₹{total}
                  </>
                )}
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                <span>🛡️ PCI-DSS Compliant</span>
                <span>•</span>
                <span>🔒 256-bit Encryption</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}