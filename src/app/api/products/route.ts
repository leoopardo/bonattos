import { NextResponse } from "next/server";
import connect from "../../../../db";
import Product from "../../../../models/Product";

export const GET = async (req: any) => {
  const params = new URLSearchParams(req.url?.split("?")[1]);
  const limit = Number(params.get("limit"));
  const page = Number(params.get("page")) || 1;
  const category = params.get("category");
  const brand = params.get("brand");
  const collection = params.get("collection");
  const description = params.get("description");
  const p = params.get("p");
  const m = params.get("m");
  const g = params.get("g");
  const gg = params.get("gg");
  const search = params.get("search");

  const query = search
    ? [
        {
          category: category
            ? category.toLowerCase()
            : { $regex: search, $options: "i" },
        },
        {
          brand: brand
            ? brand.toLowerCase()
            : { $regex: search, $options: "i" },
        },
        {
          collection: collection
            ? collection.toLowerCase()
            : { $regex: search, $options: "i" },
        },
        { description: { $regex: search, $options: "i" } },
        { p: p ?? null },
        { m: m ?? null },
        { g: g ?? null },
        { gg: gg ?? null },
        { name: { $regex: search, $options: "i" } },
      ].filter((item) => Object.values(item)[0] !== null)
    : [
        { category: category ? category.toLowerCase() : null },
        { brand: brand ? brand.toLowerCase() : null },
        { collection: collection ? collection.toLowerCase() : null },
        { p: p ?? null },
        { m: m ?? null },
        { g: g ?? null },
        { gg: gg ?? null },
      ].filter((item) => Object.values(item)[0] !== null);

  try {
    await connect();
    const items = await Product.find(query.length ? { $or: query } : {})
      .limit(limit > 0 ? limit : 10)
      .skip((page - 1) * limit);
    const count = await Product.find(
      query.length ? { $or: query } : {}
    ).countDocuments();
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
    const item = await Product.create({
      ...body,
      category: body?.category ? body?.category?.toLowerCase() : null,
      brand: body?.brand ? body?.brand?.toLowerCase() : null,
      collection: body?.collection ? body?.collection?.toLowerCase() : null,
      p: body?.p ? body?.p : null,
      m: body?.m ? body?.m : null,
      g: body?.g ? body?.g : null,
      gg: body?.gg ? body?.gg : null,
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
