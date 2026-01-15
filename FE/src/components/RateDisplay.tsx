type Props = {
  rate: number | null;
  currency: string;
};

export default function RateDisplay({ rate, currency }: Props) {
  if (rate === null) return <p>No data</p>;

  return (
    <div>
      <h3>Exchange Rate</h3>
      <p>
        1 JPY = <strong>{rate}</strong> {currency}
      </p>
    </div>
  );
}
