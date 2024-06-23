"use client";

import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname, useRouter } from "next/navigation";
import routes from "@/lib/routes";

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const pathName = usePathname();

  const router = useRouter();

  // const allowedModules = JSON.parse(userDetails?.userRole?.allowedModules).map(
  //   Number
  // );

  return (
    <>
      <nav
        className={`fixed top-24 left-0 h-full overflow-y-hidden shadow-sm transition-all duration-300 bg-background border-r z-40 ${
          isSidebarOpen ? "w-full md:w-[220px] lg:w-[300px]" : "!w-0"
        }`}
      >
        <div className="flex flex-col h-full pb-[120px] overflow-y-auto">
          <div className="flex flex-col gap-4 mt-10 px-2">
            {routes.map((route, i) => {
              if (route.subRoutes) {
                return (
                  <Collapsible key={i}>
                    <CollapsibleTrigger asChild>
                      <div className="rounded-sm px-3 py-2 flex flex-row justify-between hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
                        <div className="flex gap-2">
                          {route.icon && route.icon()}
                          <span>{route.name}</span>
                        </div>
                        <ChevronDown />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3 pl-2 space-y-2">
                      {route.subRoutes.map((route, i) => {
                        return (
                          <div
                            className={`rounded-sm px-3 py-2 flex flex-row gap-2 transition-all cursor-pointer ${
                              pathName === route.path
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-primary hover:text-primary-foreground"
                            }`}
                            key={i}
                            onClick={() => {
                              if (route.path) {
                                router.push(route.path);
                                // setIsSidebarOpen(false);
                              }
                            }}
                          >
                            {route.icon && route.icon()}
                            <span>{route.name}</span>
                          </div>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                );
              } else {
                return (
                  <div
                    className={`rounded-sm px-3 py-2 flex flex-row gap-2 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer ${
                      pathName === route.path
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-primary hover:text-primary-foreground"
                    }`}
                    key={route.path}
                    onClick={() => {
                      if (route.path) {
                        router.push(route.path);
                        // setIsSidebarOpen(false);
                      }
                    }}
                  >
                    {route.icon && route.icon()}
                    <span>{route.name}</span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
