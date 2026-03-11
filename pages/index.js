import { useRouter } from "next/router";
import CheckoutSteps from "../components/CheckoutSteps";
import Head from "next/head";

export default function Home({ cart }) {
  const router = useRouter();

  const subtotal = cart.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  const total = subtotal + cart.shipping_fee;

  const handleCheckout = () => router.push("/shipping");
  const handleAddAddress = () => router.push("/shipping");

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 font-sans selection:bg-green-100 selection:text-green-900">
      <Head>
        <title>Your Cart | Ecoyaan</title>
      </Head>

      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">Your Cart</h1>
            <p className="text-gray-500 mt-1 font-medium italic">Thank you for choosing conscious living.</p>
          </div>
          <CheckoutSteps step={1} />
        </div>

        {/* TOP ORDER SUMMARY BAR - Glassmorphism style */}
        <div className="bg-white/80 backdrop-blur-md sticky top-4 z-30 rounded-3xl shadow-xl shadow-green-900/5 border border-white p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-6 group">
          <div className="flex gap-8 items-center overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Subtotal</span>
              <span className="text-lg font-bold text-gray-800">₹{subtotal}</span>
            </div>
            <div className="flex flex-col border-l pl-8">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-green-600">Delivery</span>
              <span className="text-lg font-bold text-green-600">₹{cart.shipping_fee}</span>
            </div>
            <div className="flex flex-col border-l pl-8">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Grand Total</span>
              <span className="text-2xl font-black text-gray-900 tracking-tighter">₹{total}</span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full md:w-auto bg-[#15803d] text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-green-200 hover:bg-[#116631] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
          >
            Checkout Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* SAVINGS BOX - Impact focused */}
        <div className="bg-gradient-to-r from-green-600 to-[#15803d] p-[1px] rounded-3xl mb-10 overflow-hidden shadow-lg shadow-green-100">
          <div className="bg-white rounded-[23px] p-6 flex items-center gap-6 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-8xl opacity-5 pointer-events-none">🌿</div>
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner">🌱</div>
            <div>
              <p className="font-black text-[#15803d] text-xl">You saved ₹50 on this order!</p>
              <p className="text-gray-500 font-medium">Your sustainable choice helps reduce carbon footprint. High-five! 🖐️</p>
            </div>
          </div>
        </div>

        {/* ADDRESS SECTION */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-black text-2xl text-gray-800">Delivery Address</h2>
            <div className="h-[2px] flex-1 bg-gray-100"></div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8 group">
            <button
              onClick={handleAddAddress}
              className="w-full md:w-48 aspect-video border-2 border-dashed border-green-200 text-[#15803d] rounded-2xl font-bold flex flex-col items-center justify-center gap-2 hover:bg-green-50 hover:border-[#15803d] transition-all group-hover:scale-[1.02]"
            >
              <span className="text-2xl">+</span>
              Add New Address
            </button>
            <div className="text-center md:text-left">
              <p className="text-gray-400 font-medium max-w-xs leading-relaxed">
                Your delivery address is currently empty. Add one to see delivery estimates.
              </p>
            </div>
          </div>
        </div>

        {/* ITEM LIST SECTION */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-black text-2xl text-gray-800">Review Items</h2>
            <span className="px-4 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-bold uppercase tracking-widest">
              {cart.cartItems.length} Products
            </span>
          </div>

          <div className="grid gap-6">
            {cart.cartItems.map((item) => (
              <div
                key={item.product_id}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-8 group transition-all hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1"
              >
                <div className="w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden p-4 group-hover:bg-white transition-colors">
                  <img
                    src={item.image}
                    alt={item.product_name}
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">{item.product_name}</h3>
                      <p className="text-xs font-black text-green-600 uppercase tracking-widest mt-1">Certified Sustainable</p>
                    </div>
                    <div className="flex flex-col items-center sm:items-end">
                      <span className="text-gray-400 text-xs font-bold uppercase">Subtotal</span>
                      <span className="font-black text-2xl text-gray-900">₹{item.product_price * item.quantity}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-6">
                    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#15803d] font-bold">-</button>
                      <span className="w-10 text-center font-bold text-gray-800 text-sm">{item.quantity}</span>
                      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#15803d] font-bold">+</button>
                    </div>
                    <button className="text-xs font-black text-red-400 hover:text-red-600 uppercase tracking-widest transition-colors">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL GRAND TOTAL CARD */}
        <div className="bg-white rounded-[40px] border border-gray-100 p-8 md:p-12 shadow-2xl shadow-green-900/5 overflow-hidden relative">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#f0fdf4] rounded-full -mr-20 -mb-20 pointer-events-none blur-3xl"></div>
          
          <div className="max-w-md ml-auto relative z-10 space-y-4">
            <div className="flex justify-between items-center text-gray-500 font-bold px-2 uppercase text-xs tracking-widest">
              <p>Total items ({cart.cartItems.length})</p>
              <p>₹{subtotal}</p>
            </div>
            <div className="flex justify-between items-center text-green-600 font-bold px-2 uppercase text-xs tracking-widest">
              <p>Standard Delivery</p>
              <p>₹{cart.shipping_fee}</p>
            </div>
            
            <div className="h-[1px] bg-gray-100 my-6"></div>

            <div className="flex justify-between items-end px-2 mb-8">
              <div>
                <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Amount Payable</p>
                <p className="text-4xl font-black text-gray-900 tracking-tighter">₹{total}</p>
              </div>
              <div className="text-right pb-1">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest">Tax Included</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#15803d] text-white py-5 rounded-[20px] font-black text-xl shadow-2xl shadow-green-200 hover:bg-[#116631] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              Complete Order
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/cart");
  const cart = await res.json();
  return { props: { cart } };
}