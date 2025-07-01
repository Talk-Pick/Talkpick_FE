interface BadgeProps {
  tag: string;
  tagColor?: string;
  className?: string;
}

const Badge = ({ tag, tagColor, className }: BadgeProps) => {
  return  <span className={`px-2 py-1 w-fit rounded-full text-xs font-semibold ${tagColor} ${className}`}>
  {tag}
</span>;
};

export default Badge;
