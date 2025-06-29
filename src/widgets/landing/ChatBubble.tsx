interface ChatBubbleProps {
  text: string;
}

export default function ChatBubble({ text }: ChatBubbleProps) {
  return (
    <div className="relative inline-block">
      <div className="bg-gray-200 text-gray-400 text-base rounded-lg px-6 py-3 font-medium">
        {text}
      </div>
      <div className="absolute left-6 -bottom-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-200"></div>
    </div>
  );
}