export default function Chip({
  value,
  bgColor = "bg-purple-900",
}: {
  value: any;
  bgColor?: string;
}) {
  return (
    <span
      className={`${bgColor} rounded-lg p-1 px-2 bg-opacity-80 text-secondary text-sm hover:bg-opacity-100 cursor-default transition-all`}
    >
      {value}
    </span>
  );
}
