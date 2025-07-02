import { Button } from "../../components/ui/button";
import Badge from "../../widgets/common/Badge";
import { useParams, useNavigate } from "react-router-dom";

const CategoryDetail = () => {
  //TODO id 타입에 따라 card 결정
  const { id, page, category } = useParams();
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      title: "소개팅/과팅",
      image: "heart",
    },
  ];

  
  const order = [
    {tag: "", tagColor: ""},
    {tag: "첫번째", tagColor: "bg-pink-50", },
    {tag: "두번째", tagColor: "bg-pink-500"},
    {tag: "세번째", tagColor: "bg-pink-500"},
    {tag: "네번째", tagColor: "bg-pink-500"},
    {tag: "다섯번째", tagColor: "bg-pink-500"},
  ];

  const ctgry = category?.replace(',', '/') || ""

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2 mt-8">
      <Badge tag={order[Number(page)].tag} tagColor={order[Number(page)].tagColor} className="text-pink-400 px-4 py-2"  />
      <Badge tag={ctgry} tagColor={order[Number(page)].tagColor} className="text-pink-400 px-4 py-2"  />
      </div>
      <div className="flex flex-col justify-center my-8 w-full">
        <img src={"/images/cards/if.png"} alt="if" />
       <p className="flex flex-row justify-center items-center text-xs text-gray-500">카드뒤집기 <span><img src="/images/icons/reload.svg" alt="flip" /></span></p>
      </div>
      <div className="flex gap-2 w-full">
          <Button variant="outline" className="w-1/2 h-[50px] rounded-xl" onClick={() => {
            navigate(`/main`);
          }}>그만하기</Button>
          <Button className="w-1/2 h-[50px] bg-black text-white rounded-xl" onClick={() => {
            navigate(`/random/${category}/done`);
          }}>다음 주제로</Button>
        </div>
    </div>
  );
};

export default CategoryDetail;
