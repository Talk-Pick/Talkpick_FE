import { Outlet } from "react-router-dom";
import BottomNavigator from "./BottomNavigator";
import { useRouteInfo } from "../shared/hooks";
import BackButton from "../shared/ui/backButton";

export default function MainLayout() {
  const { backButton, title } = useRouteInfo();

  return (
    <div className="flex flex-col min-h-screen mx-4 pb-[90px] mt-5">
      <div className="flex flex-row items-center">
      { backButton && <BackButton /> }
      {/* TODO: 전체 가로너비를 기준으로 가운데 정렬이면 좋겠다. */}
      { title && <span className="text-base font-bold flex-1 text-center">{title}</span> }
      </div>
      <Outlet />
      <BottomNavigator />
    </div>
  );
}