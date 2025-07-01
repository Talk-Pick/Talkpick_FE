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
    {tag: "첫번째", tagColor: "bg-pink-500"},
    {tag: "두번째", tagColor: "bg-pink-500"},
    {tag: "세번째", tagColor: "bg-pink-500"},
    {tag: "네번째", tagColor: "bg-pink-500"},
    {tag: "다섯번째", tagColor: "bg-pink-500"},
  ];

  return (
    <div>
      <div>
      <Badge tag={order[Number(page)].tag} tagColor={order[Number(page)].tagColor}  />
      </div>
      <div>
        <img src={"/images/cards/if.png"} alt="if" />
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="w-1/2 h-[50px]" onClick={() => {
            navigate(`/main`);
          }}>그만하기</Button>
          <Button className="w-1/2 h-[50px] bg-black text-white" onClick={() => {
            navigate(`/random/${category}/done`);
          }}>다음 주제로</Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
