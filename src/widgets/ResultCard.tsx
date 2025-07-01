import LikeButton from "./LikeButton";

interface ResultCardProps {
  percent: number;
  title: string;
  tag: string;
  liked: boolean;
  onLikeToggle: () => void;
}

const ResultCard = ({ percent, title, tag, liked, onLikeToggle }: ResultCardProps) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-2xl shadow-lg px-4 py-3">
      <div className="text-xl font-extrabold text-gray-500">{percent}%</div>
      <div>
        <div className="text-lg font-bold text-gray-900">{title}</div>
        <div className="text-sm text-yellow-500">{tag}</div>
      </div>
      <LikeButton liked={liked} onToggle={onLikeToggle} />
    </div>
  );
};

export default ResultCard;