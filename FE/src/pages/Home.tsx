import { useState } from "react";
import ExchangeButton from "../components/ExchangeButton";
import RateDisplay from "../components/RateDisplay";
import CurrencySelector from "../components/CurrentSelector";
import {
  getExchangeRate,
  getHistory,
  saveExchangeRate,
} from "../api/exchangeApi";

export default function Home() {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState<number | null>(null);
  const [history, setHistory] = useState<
    {
      fromCurrency: string;
      toCurrency: string;
      rate: number;
      createdBy: string;
    }[]
  >([]);

  const fromCurrency = "JPY";
  //   const handleExchange = async () => {
  //     // MOCK DATA (sau này thay bằng API)
  //     const mockRates: Record<string, number> = {
  //       USD: 0.0067,
  //       VND: 162,
  //       PHP: 0.38,
  //       IDR: 105,
  //       CAD: 0.009,
  //       SGD: 0.0091,
  //     };

  //     setRate(mockRates[currency]);
  //   };

  const handleExchange = async () => {
    const data = await getExchangeRate(fromCurrency, currency);
    setRate(data.rate);
  };

  const handleSave = async () => {
    if (rate === null) return;

    await saveExchangeRate({
      fromCurrency,
      toCurrency: currency,
      rate,
      createdBy: new Date().toISOString(),
    });

    // load lại history sau khi save
    const data = await getHistory();
    setHistory(data);
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

      <button onClick={handleSave} disabled={rate === null}>
        Save
      </button>
    </div>
  );
}
