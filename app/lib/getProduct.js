import { Product } from "@/models/Product";
import { mongooseConnect } from "./mongoose";

export async function getProduct(productId) {
  await mongooseConnect();
  const data = await Product.findById(productId);
  const product = JSON.parse(JSON.stringify(data));
  return product;
}
