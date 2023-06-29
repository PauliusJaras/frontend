import { mongooseConnect } from "@/app/lib/mongoose";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(request) {
    await mongooseConnect();
    const res = await request.json();
    const {ids} = res;

    return NextResponse.json(await Product.find({_id: ids}));
}