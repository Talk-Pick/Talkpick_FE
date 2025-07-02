import Badge from "../../widgets/common/Badge";
import { Button } from "../../components/ui/button";

const SelectedTopic = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pt-8">
      {/* 상단 태그 */}
      <div className="flex gap-2 mb-6 w-full">
        <Badge tag="소개팅/과팅" tagColor="bg-pink-100 text-pink-500" />
        <Badge tag="# 연애" tagColor="bg-white text-pink-500 border border-pink-200" />
      </div>
      {/* 카드 */}
      <div className="w-full flex justify-center">
        {/* <TalkPickCard
          title="연애를 할 때 가장 중요하게 생각하는 것은?"
          leftStatLabel="선택된 횟수"
          leftStatValue="34개"
          rightStatLabel="평균 대화 시간"
          rightStatValue="25분"
          imageLeft="/images/bubble_left.png"
          imageRight="/images/bubble_right.png"
        /> */}
      </div>
      <div className="w-full">
        <Button variant="outline" className="w-full h-[56px] text-lg rounded-xl font-bold">
          이 주제로 대화 시작하기
        </Button>
      </div>
    </div>
  );
};

export default SelectedTopic;
