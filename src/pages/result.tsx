import DoughnutChart from "../lib/chart/doughnut";
import { useState } from "react";
import ResultCard from "../widgets/ResultCard";
import CustomDialog from "../widgets/common/CustomDialog";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const members = [
  { name: "홍길동", color: "bg-purple-400", icon: "🟣" },
  { name: "이름", color: "bg-pink-300", icon: "💗" },
  { name: "이름", color: "bg-orange-300", icon: "🟠" },
  { name: "이름", color: "bg-yellow-200", icon: "🟡" },
];

const initialResults = [
  { percent: 35.2, title: "MBTI 야구게임", tag: "# 게임", liked: true },
  { percent: 35.2, title: "MBTI 야구게임", tag: "# 게임", liked: false },
  { percent: 35.2, title: "MBTI 야구게임", tag: "# 게임", liked: false },
  { percent: 35.2, title: "MBTI 야구게임", tag: "# 게임", liked: false },
  { percent: 35.2, title: "MBTI 야구게임", tag: "# 게임", liked: false },
];

export default function Result() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [input, setInput] = useState("");
  const [results, setResults] = useState(initialResults);
  const [membersList, setMembersList] = useState(members.map(m => m.name));
  const navigate = useNavigate();

  const handleLikeToggle = (index: number) => {
    setResults((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, liked: !item.liked } : item
      )
    );
  };

  // const handleAdd = () => {
  //   if (input.trim() !== "") {
  //     setMembersList([...membersList, input]);
  //     setInput("");
  //   }
  // };

  const handleRemove = (index: number) => {
    const newMembersList = membersList.filter((_, i) => i !== index);
    setMembersList(newMembersList);
  };

  return (
    <div>
      {/* 상단 바 */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex-1 text-center font-extrabold text-2xl">결과 확인</div>
      </div>

      {/* 날짜 */}
      <div className="text-center text-gray-500 text-base mb-2">2025.02.08 17:00</div>

      {/* 한줄평 */}
      <input
        className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-3 text-left"
        placeholder="한줄평"
      />

      {/* 멤버 리스트 */}
      <div className="flex gap-2 justify-center mb-4">
        {membersList.map((m, i) => (
          <div
            key={i}
            className={`flex items-center gap-1 px-3 py-1 rounded-xl border border-gray-200 bg-white`}
          >
            <span className="text-xl">{members.find(member => member.name === m)?.icon}</span>
            <span className="text-base">{m}</span>
            <button
              className="ml-2 text-red-500"
              onClick={() => handleRemove(i)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* 총 대화 시간 */}
      <div className="text-center text-gray-500 text-base mt-2">총 대화 시간</div>
      <div className="text-center text-gray-900 text-5xl font-extrabold mb-2">38 : 25</div>

      <DoughnutChart />

      {/* 결과 리스트 */}
      <div className="flex flex-col gap-3 my-4">
        {results.map((r, i) => (
          <ResultCard
            key={i}
            percent={r.percent}
            title={r.title}
            tag={r.tag}
            liked={r.liked}
            onLikeToggle={() => handleLikeToggle(i)}
          />
        ))}
      </div>

      {/* 종료 버튼 */}
      <button
        className="w-full h-[50px] bg-black text-white font-bold rounded-2xl mt-auto"
        onClick={() => {
          setStep(1);
          setOpen(true);
        }}
      >
        종료
      </button>
      <CustomDialog open={open} onOpenChange={setOpen} title={
        step === 1
          ? "우리의 추억에 제목을 지어주세요."
          : step === 2
            ? "기억에 남는 한줄평을 적어주세요."
            : "함께한 사람들의 이름을 기록해주세요."
      }>
        {step === 1 && (
          <>
            <input
              className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-4"
              placeholder="제목"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Button
              className="w-full h-[50px] bg-black text-white font-bold rounded-2xl mt-6"
              onClick={() => setStep(2)}
            >
              다음
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <input
              className="w-full border border-gray-300 rounded-xl px-4 py-2 mt-4"
              placeholder="한줄평"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <Button
              className="w-full h-[50px] bg-black text-white font-bold rounded-2xl mt-6"
              onClick={() => setStep(3)}
            >
              다음
            </Button>
          </>
        )}
        {step === 3 && (
          <>
            <div className="flex gap-2 mb-4">
              <input
                className="border border-gray-300 rounded-xl px-4 py-2 flex-1"
                placeholder="이름을 입력해 주세요."
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <Button
                variant="outline"
                className="h-[40px] px-4"
                onClick={() => {
                  if (input.trim()) {
                    setMembersList([...membersList, input.trim()]);
                    setInput("");
                  }
                }}
              >
                추가하기 +
              </Button>
            </div>
            <div className="border rounded-xl p-4 bg-white">
              <div className="grid grid-cols-2 gap-3">
                {membersList.map((name, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-gray-400 text-white rounded-lg px-4 py-2"
                  >
                    <span>{name}</span>
                    <button
                      className="ml-2 text-white"
                      onClick={() => setMembersList(membersList.filter((_, i) => i !== idx))}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <Button
              className="w-full h-[50px] bg-black text-white font-bold rounded-2xl mt-6"
              onClick={() => {
                setOpen(false);
                navigate("/main");
                // 완료 처리 등 추가 로직
              }}
            >
              완료
            </Button>
          </>
        )}
      </CustomDialog>
    </div>
  );
}
