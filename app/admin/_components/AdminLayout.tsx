"use client";

import Header from "./Header";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";

const AdminLayout = ({ userDetails, children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const windowResize = () => {
    if (window.innerWidth > 768) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        // userDetails={userDetails}
      />
      <div className="flex h-full w-full">
        <SideBar isSidebarOpen={isSidebarOpen} />
        <div className="ml-0 md:ml-[220px] lg:ml-[300px] mt-24 overflow-y-auto py-8 px-8 pb-32 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
