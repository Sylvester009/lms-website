"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import SearchInput from "./searchinput";
import { isTeacher } from "@/lib/teacher";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathName = usePathname();

  const isTeacherPage = pathName?.startsWith("/teacher");
  const isStudentPage = pathName.includes("/chapter");
  const isSearchPage = pathName === "/search";

  return (
    <>
      <div className="flex gap-x-2 mr-auto">
        {/* UserButton - first element */}
        <UserButton afterSignOutUrl="/" />

        {/* Teacher mode or Exit button - second element */}
        {isTeacherPage || isStudentPage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
        ) : null}
      </div>

      {/* SearchInput - last element */}
      {isSearchPage && (
        <div className="hidden md:block ml-auto">
          <SearchInput />
        </div>
      )}
    </>
  );
};
