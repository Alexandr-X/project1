import { useCryptocurrencyList } from "../../features";

export const CoinTableComponent = () => {
  const { data: cryptoData, isError, isLoading } = useCryptocurrencyList();

  console.log(cryptoData, "data");
  console.log(isError, "error");
  console.log(isLoading, "loading");
  return (
    <>
      <h1>test</h1>
    </>
  );
};
