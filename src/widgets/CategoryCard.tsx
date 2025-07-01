import React from "react";

interface CategoryCardProps {
  label: string;
  labelBg?: string;
  cardBg?: string;
  shadowColor?: string;
  image: React.ReactNode;
  subject?: string;
  onClick?: () => void; 
}

export default function CategoryCard({
  label,
  labelBg = "bg-pink-200 text-pink-500",
  cardBg = "bg-pink-50",
  shadowColor = "shadow-[0_4px_24px_0_rgba(255,192,203,0.3)]",
  image,
  subject,
  onClick,
}: CategoryCardProps) {
  return (
    <div 
    className={`rounded-3xl ${cardBg} ${shadowColor} p-5 w-[150px] min-h-[130px] flex flex-col items-center justify-center`}
    onClick={onClick}
    >
      <div className={`mb-3 px-4 py-1 rounded-full text-base font-semibold ${labelBg}`}>
        {label}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={`/images/${image}.png`} alt={label} className="w-20 " />
      </div>
      {
        subject && (
          <div className="flex flex-row items-center justify-center">
            {subject}
          </div>
        )
      }
    </div>
  );
}