import { NextResponse } from "next/server";
import connect from "../../../../../db";
import Product from "../../../../../models/Product";

export const GET = async (_req: any, res: any) => {
  try {
    await connect();
    const products = await Product.findById({ _id: res?.params?.id });
    return new NextResponse(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, {
      status: 500,
    });
  }
};

export const PUT = async (req: any, res: any) => {
  const body = await req?.json();
  try {
    await connect();
    await Product.findByIdAndUpdate(res?.params?.id, body);
    return new NextResponse(JSON.stringify(body), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, {
      status: 500,
    });
  }
};
