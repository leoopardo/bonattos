import { NextResponse } from "next/server";
import connect from "../../../../db";
import Brands from "../../../../models/Brands";

export const GET = async (req: any) => {
  const params = new URLSearchParams(req.url?.split("?")[1]);
  const limit = Number(params.get("limit"));
  const page = Number(params.get("page")) || 1;
  const search = params.get("search");
  const query = search ? { name: { $regex: search, $options: 'i' } } : {};

  try {
    await connect();
    const items = await Brands.find(query)
      .limit(limit > 0 ? limit : 10)
      .skip((page - 1) * limit);
    const count = await Brands.find(query).countDocuments();
    return new NextResponse(
      JSON.stringify({
        items,
        total: count,
        page,
        limit: limit > 0 ? limit : 10,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, {
      status: 500,
    });
  }
};


export const POST = async (req: any) => {
  const body = await req?.json(); // Agora 'body' contém o corpo da solicitação

  try {
    await connect();
    const item = await Brands.create({
      ...body,
    });
    return new NextResponse(JSON.stringify({ item }), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error in create product" + error, {
      status: 406,
    });
  }
};
