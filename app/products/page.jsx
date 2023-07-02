import Center from "@/components/Center"
import { mongooseConnect } from "../lib/mongoose"
import PageTitle from "@/components/PageTitle";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";


export default async function Products(){

    await mongooseConnect();
    const products = await Product.find({}, null, {sort: {'_id':-1}});

    return (
        <>
        <Center>
            <PageTitle>All Products</PageTitle>
            <ProductsGrid products={products}></ProductsGrid>
        </Center>
        </>
    )
}