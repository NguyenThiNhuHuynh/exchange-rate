const currencies = ["USD", "VND", "PHP", "IDR", "CAD", "SGD"];

export default function CurrencySelector({ value, onChange }) {
  return (
    <select
      className="border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {currencies.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
