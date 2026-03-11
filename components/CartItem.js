export default function CartItem({ item }) {

  return (
    <div className="flex gap-4 border-b py-4">

      <img
        src={item.image}
        className="w-24 h-24 rounded"
      />

      <div>

        <h2 className="font-semibold text-lg">
          {item.product_name}
        </h2>

        <p>Price: ₹{item.product_price}</p>

        <p>Qty: {item.quantity}</p>

        <p className="font-semibold">
          Subtotal: ₹{item.product_price * item.quantity}
        </p>

      </div>

    </div>
  );
}