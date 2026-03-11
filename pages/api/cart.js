export default function handler(req, res) {
  res.status(200).json({
    cartItems: [
      {
        product_id: 101,
        product_name: "Bamboo Toothbrush (Pack of 4)",
        product_price: 299,
        quantity: 2,
        image:
          "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400"
      },
      {
        product_id: 102,
        product_name: "Reusable Cotton Produce Bags",
        product_price: 450,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1590080877777-9c1f10b3c9c7?w=400"
      },
      {
        product_id: 103,
        product_name: "Stainless Steel Water Bottle",
        product_price: 799,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1526401485004-2fda9f5d3b4b?w=400"
      },
      {
        product_id: 104,
        product_name: "Eco-Friendly Dishwashing Bar",
        product_price: 199,
        quantity: 3,
        image:
          "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400"
      },
      {
        product_id: 105,
        product_name: "Organic Cotton Tote Bag",
        product_price: 349,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1593032465171-8f0c9b2d9b6d?w=400"
      }
    ],

    shipping_fee: 50,

    discount_applied: 100,

    eco_message:
      "Thanks for choosing sustainable products 🌱"
  });
}