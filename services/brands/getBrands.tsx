import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BrandQuery, BrandsData } from "./types/brands.interface";

export function useListBrands(params: BrandQuery) {
  const { data, isFetching, error, refetch } = useQuery<
    BrandsData | null | undefined
  >({
    queryKey: ["brands"],
    queryFn: () => axios.get("/api/brands", { params }),
  });

  const Brands = data;
  const BrandsLoading = isFetching;
  const BrandsError: any = error;
  const refetchBrands = refetch;

  return {
    Brands,
    BrandsLoading,
    BrandsError,
    refetchBrands,
  };
}
