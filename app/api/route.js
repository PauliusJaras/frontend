import { Product } from "@/models/Product";
import { NextResponse } from "next/server";
import { mongooseConnect } from "../lib/mongoose";

export async function GET() {
  await mongooseConnect();
  return NextResponse.json(await Product.find());
}
