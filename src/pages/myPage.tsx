import { Link } from "react-router-dom";
import CustomDialog from "../widgets/common/CustomDialog";
import { useState } from "react";

const MBTI_LIST = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP"
];

const MyPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedMbti, setSelectedMbti] = useState("INTP");

  const updateMbti = (mbti: string) => {
    console.log(mbti);
    setOpen(false);
    //유저 정보 업데이트 되야함
  }

  return (
    <div className="mx-2 pt-8 flex flex-col">
      <h1 className="text-2xl font-bold text-center mb-8">My Page</h1>
      <div className="mb-5">
        <div className="text-base font-bold mb-3">내 정보</div>
        <div className="border-t border-gray-200">
          <div className="flex items-center py-2 gap-3">
            {/* <span className="text-2xl text-gray-600">👤</span> */}
            <span className="text-gray-600 flex-1">닉네임</span>
            <span className="text-purple-500 font-medium">닉네임</span>
          </div>
          <div className="flex items-center pb-2 gap-3">
            {/* <span className="text-2xl text-gray-600">✉️</span> */}
            <span className="text-gray-600 flex-1">이메일</span>
            <span className="text-purple-500 font-medium">*****@naver.com</span>
          </div>
          <div className="flex items-center pb-2 gap-3">
            {/* <span className="text-2xl text-gray-600">📅</span> */}
            <span className="text-gray-600 flex-1">생년월일</span>
            <span className="text-purple-500 font-medium">2000.00.00</span>
          </div>
          <div className="flex items-center pb-2 gap-3">
            {/* <span className="text-2xl text-gray-600">🏢</span> */}
            <span className="text-gray-600 flex-1">MBTI</span>
            <span className="text-purple-500 font-medium">INTP</span>
          </div>
        </div>
        <div className="flex justify-end mt-1">
          <button onClick={() => setOpen(true)} className="text-gray-600 text-sm">변경하기 &gt;</button>
        </div>
      </div>

      <div className="mb-5">
        <div className="text-base font-bold mb-3">컬렉션</div>
        <div className="border-t border-gray-200 ">
          <div className="flex items-center py-2 gap-3">
            {/* <span className="text-2xl text-gray-600">🤍</span> */}
            <span className="text-gray-600 flex-1">좋아요 누른 대화 주제</span>
            <Link to="/mypage/liked-topics" className="text-gray-600 text-sm">더보기 &gt;</Link>
          </div>
        </div>
      </div>

      <div >
        <div className="text-base font-bold mb-3">기타</div>
        <div className="border-t border-gray-200">
          <Link to="#" className="flex items-center py-2 gap-3">
            {/* <span className="text-xl text-gray-600">🔔</span> */}
            <span className="text-gray-600 flex-1">공지사항</span>
            <span className="text-gray-600">&gt;</span>
          </Link>
          <Link to="#" className="flex items-center pb-2 gap-3">
            {/* <span className="text-2xl text-gray-600">💬</span> */}
            <span className="text-gray-600 flex-1">문의</span>
            <span className="text-gray-600">&gt;</span>
          </Link>
        </div>
      </div>

      <div className="flex justify-end mt-auto">
        <button className="text-gray-300 text-sm underline ">회원탈퇴</button>
      </div>

      <CustomDialog open={open} onOpenChange={setOpen} title="">
        <div>
          <div className="text-lg font-bold mb-4">기존 MBTI</div>
          <input
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-600 bg-gray-50"
            value="INTP"
            readOnly
          />
          <div className="text-lg font-bold mb-2">변경할 MBTI</div>
          <div className="flex items-center gap-2 mb-6">
            <select
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              value={selectedMbti}
              onChange={e => setSelectedMbti(e.target.value)}
            >
              {MBTI_LIST.map(mbti => (
                <option key={mbti} value={mbti}>{mbti}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3">
            <button
              className="flex-1 border border-gray-300 rounded-xl py-1 font-bold"
              onClick={() => setOpen(false)}
            >
              취소
            </button>
            <button
              className="flex-1 bg-black text-white rounded-xl py-1 font-bold"
              onClick={() => updateMbti(selectedMbti)}
            >
              변경하기
            </button>
          </div>
        </div>
      </CustomDialog>
    </div>
  );
};

export default MyPage;
