"use client";

import { ChevronDown, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Header = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.replace("/");
    // window.location.reload();
  };
  return (
    <header className="z-50 fixed top-0 left-0 h-24 w-full bg-background flex flex-row justify-between items-center px-2 border-b">
      <Link className="h-20 w-[200px] relative" href={"/admin"}>
        <Image
          src={"/house.jpg"}
          objectFit="contain"
          alt="logo"
          width={20}
          height={20}
          className="rounded-full w-20 h-20"
        />
      </Link>

      <div className="flex items-center gap-3">
        {isSidebarOpen && (
          <Button
            variant={"outline"}
            size={"icon"}
            className="md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XIcon size={24} />
          </Button>
        )}
        <Button
          variant={"outline"}
          size={"icon"}
          className={`${isSidebarOpen ? "hidden" : "flex"}`}
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon size={24} />
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex gap-2 items-center cursor-pointer">
              <Avatar>
                <AvatarFallback>V</AvatarFallback>
              </Avatar>

              <div className="md:flex hidden items-center gap-2">
                <h2 className="text-xl font-semibold">Krish</h2>
                <ChevronDown />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent asChild>
            <div className="flex flex-col gap-2">
              <Button className="w-full">Profile</Button>
              <Button
                className="w-full"
                variant={"destructive"}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* <Button size={"icon"} variant={"outline"}>
          <LogOutIcon />
        </Button> */}
      </div>
    </header>
  );
};

export default Header;
