import { Outlet, useNavigate } from "react-router-dom";
import BottomNavigator from "./BottomNavigator";
import { useRouteInfo } from "../shared/hooks";

export default function MainLayout() {
  const { backButton } = useRouteInfo();
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen mx-4 pb-[90px] mt-5">
      {backButton && (
        <div className="flex flex-row items-center justify-start" onClick={() => navigate(-1)}>
          <img src="/images/icons/navigation/left_arrow.svg" alt="뒤로가기" className="w-6 h-6" />
        </div>
      )}
      <Outlet />
      <BottomNavigator />
    </div>
  );
}