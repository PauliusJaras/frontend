import { mongooseConnect } from "@/app/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  await mongooseConnect();
  const res = await request.json();
  const { name, email, city, postalCode, address, country, products } = res;
  const productIds = products.split(",");
  const uniqueIds = [...new Set(productIds)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(
      (p) => p._id.toString() === productId
    );
    const quantity = productIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: quantity * productInfo.price * 100,
        },
      });
    }
  }
  const orderDoc = await Order.create({
    line_items, name, email, city, postalCode, address, country, paid: false
  })

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.STRIPE_URL + '/cart?success=true',
    cancel_url: process.env.STRIPE_URL + '/cart?cancel=true',
    metadata: {orderId: orderDoc._id.toString()},
  })
  
  return NextResponse.json({url: session.url});

}
