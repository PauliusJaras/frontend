import { mongooseConnect } from "@/app/lib/mongoose";
import Center from "@/components/Center";
import PageTitle from "@/components/PageTitle";
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
        <PageTitle>{product?.title}</PageTitle>
      </Center>
    </>
  );
}
