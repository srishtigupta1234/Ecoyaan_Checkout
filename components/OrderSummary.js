import { useRouter } from "next/router";

export default function OrderSummary({ cart }) {

  const router = useRouter();

  const subtotal = cart.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  const total = subtotal + cart.shipping_fee;

  return (
    <div className="shadow-lg rounded-lg p-6 h-fit">

      <h2 className="text-xl font-bold mb-4">
        Order Summary
      </h2>

      <p>Subtotal: ₹{subtotal}</p>
      <p>Shipping: ₹{cart.shipping_fee}</p>

      <hr className="my-3"/>

      <p className="font-bold text-lg">
        Total: ₹{total}
      </p>

      <button
        onClick={() => router.push("/shipping")}
        className="bg-green-600 text-white w-full mt-4 p-2 rounded"
      >
        Proceed to Checkout
      </button>

    </div>
  );
}