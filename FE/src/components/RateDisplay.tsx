export default function RateDisplay({ rate, currency }) {
  if (!rate) return null;

  return (
    <div className="text-xl font-semibold">
      1 JPY = {rate} {currency}
    </div>
  );
}
