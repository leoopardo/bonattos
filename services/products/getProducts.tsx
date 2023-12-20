import { useQuery } from "@tanstack/react-query";
import { ProductsData, ProductsQuery } from "./types/products.interface";
import axios from "axios";

export function useListProducts(params: ProductsQuery) {
  const { data, isFetching, error, refetch } = useQuery<
    ProductsData | null | undefined
  >({
    queryKey: ["products"],
    queryFn: () => axios.get("/api/products", { params }),
  });

  const products = data;
  const productsLoading = isFetching;
  const productsError: any = error;
  const refetchProducts = refetch;

  return {
    products,
    productsLoading,
    productsError,
    refetchProducts,
  };
}
