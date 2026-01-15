type Props = {
  onClick: () => void;
};

export default function ExchangeButton({ onClick }: Props) {
  return <button onClick={onClick}>Exchange</button>;
}
