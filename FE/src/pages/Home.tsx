import { useState } from "react";
import ExchangeButton from "../components/ExchangeButton";
import RateDisplay from "../components/RateDisplay";
import CurrencySelector from "../components/CurrentSelector";

export default function Home() {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState<number | null>(null);

  const handleExchange = async () => {
    // MOCK DATA (sau này thay bằng API)
    const mockRates: Record<string, number> = {
      USD: 0.0067,
      VND: 162,
      PHP: 0.38,
      IDR: 105,
      CAD: 0.009,
      SGD: 0.0091,
    };

    setRate(mockRates[currency]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>JPY Exchange Rate Viewer</h1>

      <CurrencySelector currency={currency} onChange={setCurrency} />

      <br />

      <ExchangeButton onClick={handleExchange} />

      <br />
      <br />

      <RateDisplay rate={rate} currency={currency} />
    </div>
  );
}
