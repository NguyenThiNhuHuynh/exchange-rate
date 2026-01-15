import axios from "axios";

const API_BASE = "http://localhost:3000";

export const getExchangeRate = async (
  fromCurrency: string,
  toCurrency: string
) => {
  const res = await axios.get(`${API_BASE}/exchange-rate`, {
    params: {
      fromCurrency,
      toCurrency,
    },
  });
  return res.data;
};

export const saveExchangeRate = async (payload: {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  createdBy: string;
}) => {
  const res = await axios.post(`${API_BASE}/history`, payload);
  return res.data;
};

export const getHistory = async () => {
  const res = await axios.get(`${API_BASE}/history`);
  return res.data;
};
