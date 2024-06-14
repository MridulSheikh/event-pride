import { Outlet } from "react-router-dom";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import DashobardSideBard from "./DashobardSideBard";

export type TSideBarContext = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<TSideBarContext | null>(null);

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <div className=" flex bg-[#f1f5f9] dark:bg-slate-950">
        <DashobardSideBard />
        <div className="w-full">
          <div className=" w-full bg-[#f1f5f9] dark:bg-slate-950 h-[calc(100vh-20vhpx)] overflow-y-scroll scrollbar-thin">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

export default DashboardLayout;
