import React from "react";
import Badge from "../widgets/common/Badge";

interface CategoryCardProps {
  label: string;
  labelBg?: string;
  cardBg?: string;
  image: React.ReactNode;
  subject?: string;
  textColor?: string;
  onClick?: () => void;
}

export default function CategoryCard({
  label,
  labelBg = "bg-pink-200 text-pink-500",
  cardBg = "bg-pink-50",
  image,
  subject,
  textColor = "text-pink-500",
  onClick,
}: CategoryCardProps) {
  return (
    <div
      className={`rounded-3xl ${cardBg} box-shadow py-3 w-[170px] min-h-[130px] flex flex-col items-center justify-center`}
      style={{
        boxShadow: "1px 6px 6px",
      }}
      onClick={onClick}
    >
      <Badge
        tag={label}
        tagColor={`${textColor} ${labelBg} text-base font-semibold mb-3 px-4 py-1`}
      />
      <div className="flex-1 flex items-center justify-center">
        <img src={`/images/${image}.png`} alt={label} className="w-20 " />
      </div>
      {subject && (
        <div className="flex flex-row items-center justify-center">
          {subject}
        </div>
      )}
    </div>
  );
}
