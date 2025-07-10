import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <span  className="flex flex-row items-center justify-start" onClick={() => navigate(-1)}>
      <img src="/images/icons/navigation/left_arrow.svg" alt="뒤로가기" className="w-6 h-6" />
    </span>
  );
};

export default BackButton;