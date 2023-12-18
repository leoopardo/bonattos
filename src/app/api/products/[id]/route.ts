import { NextResponse } from "next/server";
import connect from "../../../../../db";
import Product from "../../../../../models/Product";

export const GET = async (req: any, res: any) => {

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
