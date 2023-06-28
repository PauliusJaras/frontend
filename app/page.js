import { mongooseConnect } from "@/app/lib/mongoose";
import { Product } from "@/models/Product";

import Featured from "@/components/Featured";

export default async function Home() {

  await mongooseConnect();
  const product = await Product.findById("648f8aa4e2cc0983ffc58896");
  console.log(product);

  return <Featured >{product}</Featured>;
}
