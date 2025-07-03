import Badge from "../common/Badge";

const TopicVerticalCard = ({ tags, title, count, time }: { tags: { label: string; color: string }[]; title: string; count: string; time: string }) => {
  return (
    <div className="rounded-2xl bg-gray-100 box-shadow shadow-lg px-5 py-4 mb-5">
    <div className="flex gap-2 mb-2">
      {tags.map((tag: { label: string; color: string }, i: number) => (
        <Badge key={i} tag={tag.label} tagColor={tag.color} />
      ))}
    </div>
    <div className="font-bold text-base mb-4">{title}</div>
    <div className="flex justify-end gap-8 text-xs text-gray-600">
      <div className="text-end">
        <span>선택된 횟수</span>
        <span className="block t text-base font-bold">{count}</span>
      </div>
      <div className="text-end">
        <span>평균 대화 시간</span>
        <span className="block t text-base font-bold">{time}</span>
      </div>
    </div>
  </div>
  )
};

export default TopicVerticalCard;
