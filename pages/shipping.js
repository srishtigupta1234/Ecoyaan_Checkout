import { useContext, useState } from "react";
import { CheckoutContext } from "../context/checkoutContext";
import { useRouter } from "next/router";
import CheckoutSteps from "../components/CheckoutSteps";
import Head from 'next/head';

export default function Shipping() {
  const router = useRouter();
  const { setAddress } = useContext(CheckoutContext);

  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', state: '', pinCode: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!form.email.includes("@")) newErrors.email = "Please enter a valid eco-warrior email.";
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Phone number must be exactly 10 digits.";
    if (!form.name) newErrors.name = "Full name is required.";
    if (!form.pinCode) newErrors.pinCode = "PIN Code is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setAddress(form);
      router.push("/payment");
    }
  };

  const inputStyle = (error) => `
    w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none
    ${error ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#15803d] focus:ring-4 focus:ring-green-50'}
    placeholder:text-gray-400 text-gray-700 font-medium
  `;

  return (
    <div className="min-h-screen bg-[#fcfdfd] pb-20">
      <Head><title>Shipping | Ecoyaan</title></Head>
      
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black text-gray-800 mb-2">Where should we ship?</h1>
          <p className="text-gray-500">Enter your details to receive your sustainable goodies.</p>
        </div>

        <CheckoutSteps step={2} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
    
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
              <input
                placeholder="e.g. Sarwan Singh"
                className={inputStyle(errors.name)}
                onChange={e => setForm({...form, name: e.target.value})}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className={inputStyle(errors.email)}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  className={inputStyle(errors.phone)}
                  onChange={e => setForm({...form, phone: e.target.value})}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-1 col-span-2 md:col-span-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">City</label>
                <input
                  placeholder="City"
                  className={inputStyle()}
                  onChange={e => setForm({...form, city: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">State</label>
                <input
                  placeholder="State"
                  className={inputStyle()}
                  onChange={e => setForm({...form, state: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">PIN Code</label>
                <input
                  placeholder="6 digits"
                  className={inputStyle(errors.pinCode)}
                  onChange={e => setForm({...form, pinCode: e.target.value})}
                />
              </div>
            </div>

            <button className="w-full bg-[#15803d] hover:bg-[#116631] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 mt-4">
              Continue to Payment
            </button>
          </form>

          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <span>🌿</span> Why Ecoyaan?
              </h3>
              <ul className="text-sm text-green-700 space-y-3 font-medium">
                <li>• Biodegradable packaging</li>
                <li>• Carbon-neutral shipping</li>
                <li>• Support local artisans</li>
              </ul>
            </div>
            
            <p className="text-center text-xs text-gray-400 font-medium px-4 leading-relaxed">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}