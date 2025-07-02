import React from "react";
import Badge from "../common/Badge";
import { useNavigate } from "react-router-dom";

interface TopicCardProps {
  tag: string;
  tagColor?: string;
  title: string;
  description?: string;
  stats?: { label: string; value: string }[];
  image: React.ReactNode;
}

export default function TopicCard({
  tag,
  tagColor = "bg-pink-200 text-pink-600",
  description,
  image,
}: TopicCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 rounded-3xl shadow-lg py-2 px-4 w-[220px] h-[180px] flex flex-col justify-between"
    onClick={() => {
      navigate(`/daily-talk-pick`);
    }}
    >
      <Badge tag={tag} tagColor={tagColor} className="px-2 py-1" />
      {description && (
        <div className="text-center text-gray-900 text-lg font-medium">{description}</div>
      )}
      <p className="font-bold text-md">연애를 할 때 가장 중요하게 생각하는 것은?</p>
      <main className="flex flex-row justify-between">
      <section className="flex flex-col justify-center">
        <div className="flex flex-col">
        <p className="text-xs">평균대화시간</p>
        <p className="text-sm">10분</p>
        </div>
        <div className="flex flex-col">
        <p className="text-xs">선택된 횟수</p>
        <p className="text-sm">100회</p>
        </div>
      </section>
      <div className="flex justify-center items-center">{image}</div>
      </main>
    </div>
  );
}