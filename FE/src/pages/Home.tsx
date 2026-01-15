import { useEffect, useState } from "react";
import RateDisplay from "../components/RateDisplay";
import CurrencySelector from "../components/CurrentSelector";
// import HistoryList from "../components/HistoryList";
// import { getExchangeRate, saveRate, getHistory } from "../api/exchangeApi";

export default function Home() {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState(null);
  const [history, setHistory] = useState([]);

  //   const fetchRate = async () => {
  //     const res = await getExchangeRate(currency);
  //     setRate(res.data.rate);
  //   };

  //   const fetchHistory = async () => {
  //     const res = await getHistory();
  //     setHistory(res.data);
  //   };

  //   const handleSave = async () => {
  //     await saveRate({ currency, rate });
  //     fetchHistory();
  //   };

  //   useEffect(() => {
  //     fetchRate();
  //   }, [currency]);

  //   useEffect(() => {
  //     fetchHistory();
  //   }, []);

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">JPY Exchange Rate Viewer</h1>

      <CurrencySelector value={currency} onChange={setCurrency} />
      <RateDisplay rate={rate} currency={currency} />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        // onClick={handleSave}
      >
        Save rate
      </button>

      {/* <HistoryList history={history} /> */}
    </div>
  );
}
