import { useQuery } from "@tanstack/react-query";
import { getCript } from "../../api/queries";

export const useCryptocurrencyList = ()=>{
    return useQuery({
        queryKey:["cryptoList"],
        queryFn: getCript
    })
}