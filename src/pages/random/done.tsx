import Badge from "../../widgets/common/Badge";
import { Button } from "../../components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { CATEGORIES } from "../../shared/constants/categories";

const Done = () => {
  const {category} = useParams();
  const navigate = useNavigate();

  return (
  <div className="flex flex-col items-center justify-center">
    <Badge tag={category || ""} tagColor={CATEGORIES.find(item => item.label === category)?.color || ""} />
    <img src={"/images/finish.png"} alt="finish" />
    <div>
      <p>대화 주제가 마음에 드셨나요?</p>
      <Button onClick={() => {
        navigate("/result");
      }}>종료 및 결과 보기</Button>
    </div>
    
  </div>);
};

export default Done;
