import { formatarParaMoeda } from "@/lib/utils";

interface ResultCardProps {
  title: string;
  value: number;
  className?: string;
}

export default function ResultCard({
  title,
  value,
  className,
}: ResultCardProps) {
  return (
    <div className={`p-4 rounded-sm ${className}`}>
      <p className="text-lg font-bold">{title}</p>
      <p className="font-medium">{formatarParaMoeda(value)}</p>
    </div>
  );
}
