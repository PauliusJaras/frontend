import { mongooseConnect } from "@/app/lib/mongoose";
import Center from "@/components/Center";
import UniqueProduct from "@/components/UniqueProduct";
import { Product } from "@/models/Product";

export default async function Page({ params }) {
  let product = null;
  const id = params.id;
  try {
    mongooseConnect;
    product = await Product.findById(id);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <Center>
        <UniqueProduct product={product}></UniqueProduct>
      </Center>
    </>
  );
}
