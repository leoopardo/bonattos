import { NextResponse } from "next/server";
import connect from "../../../../db";
import Product from "../../../../models/Product";
import { log } from "console";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connect();
    const items = await Product.find({}).limit(10);
    const count = await Product.find({}).countDocuments();
    return new NextResponse(JSON.stringify({ items, total: count }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, {
      status: 500,
    });
  }
};

export const POST = async (req: any, res: NextApiResponse) => {
  const body = await req?.json(); // Agora 'body' contém o corpo da solicitação
  console.log(body);

  try {
    await connect();
    const item = await Product.create(body);
    return new NextResponse(JSON.stringify({ item }), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error in create product" + error, {
      status: 406,
    });
  }
};
