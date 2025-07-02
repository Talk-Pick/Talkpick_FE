interface ChatBubbleProps {
  text: string;
  color: string;
  bg?: string;
}

export default function ChatBubble({ text, color, bg }: ChatBubbleProps) {
  return (
    <div className="relative inline-block">
      <div 
      style={{ backgroundColor: bg, color }}
      className="text-base rounded-lg px-6 py-3 font-bold">
        {text}
      </div>
      <div 
      style={{ borderTopColor: bg }}
      className="absolute left-6 -bottom-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px]"></div>
    </div>
  );
}

