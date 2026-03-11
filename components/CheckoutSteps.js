export default function CheckoutSteps({ step }) {
  return (
    <div className="flex justify-center mb-8">

      <div className="flex items-center gap-4">

        <div className={`px-4 py-2 rounded-full text-white ${step >= 1 ? "bg-green-600" : "bg-gray-300"}`}>
          Cart
        </div>

        <div className="w-12 h-1 bg-gray-300"></div>

        <div className={`px-4 py-2 rounded-full text-white ${step >= 2 ? "bg-green-600" : "bg-gray-300"}`}>
          Address
        </div>

        <div className="w-12 h-1 bg-gray-300"></div>

        <div className={`px-4 py-2 rounded-full text-white ${step >= 3 ? "bg-green-600" : "bg-gray-300"}`}>
          Payment
        </div>

      </div>

    </div>
  );
}