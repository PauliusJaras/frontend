import { mongooseConnect } from "@/app/lib/mongoose";
import { Product } from "@/models/Product";

import Featured from "@/components/Featured";
import NewProducts from "@/components/NewProducts";

export default async function Home() {

  await mongooseConnect();
  const featuredProduct = await Product.findById("649c2491d58e35a94d7a14d4");
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit: 4});

  return (
  <div>
  <Featured featuredProduct={featuredProduct}></Featured>
  <NewProducts newProducts={newProducts}></NewProducts>
  </div>
  )
}
