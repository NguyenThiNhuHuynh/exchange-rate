type Props = {
  currency: string;
  onChange: (value: string) => void;
};

const currencies = ["USD", "VND", "PHP", "IDR", "CAD", "SGD"];

export default function CurrencySelector({ currency, onChange }: Props) {
  return (
    <div>
      <label>Target Currency</label>
      <br />
      <select value={currency} onChange={(e) => onChange(e.target.value)}>
        {currencies.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
