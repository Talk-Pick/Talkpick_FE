import React from "react";
import Badge from "../common/Badge";

interface TopicCardProps {
  label: string;
  labelBg?: string;
  cardBg?: string;
  image: React.ReactNode;
  subject?: string;
  textColor?: string;
  onClick?: () => void;
}

export default function TopicCard({
  label,
  labelBg = "bg-pink-200 text-pink-500",
  cardBg = "bg-gray-50",
  image,
  subject,
  textColor = "text-pink-500",
  onClick,
}: TopicCardProps) {
  return (
    <div
      className={`rounded-3xl ${cardBg} box-shadow shadow-md py-3 flex flex-col items-center justify-center`}
      onClick={onClick}
    >
      <Badge
        tag={label}
        tagColor={`${textColor} ${labelBg} font-semibold mb-3 px-4 py-1`}
      />
      <div className="flex-1 flex items-center justify-center my-4">
        <img src={`/images/${image}.png`} alt={label} className="w-25" />
      </div>
      {subject && (
        <div className="flex flex-row items-center justify-center font-bold text-gray-600">
          {subject}
        </div>
      )}
    </div>
  );
}
