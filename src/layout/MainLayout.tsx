import { Outlet } from "react-router-dom";
import BottomNavigator from "./BottomNavigator";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen mx-4 pb-[90px] mt-5">
      <Outlet />
      <BottomNavigator />
    </div>
  );
}