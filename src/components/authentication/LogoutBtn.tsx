"use client";

import { logout } from "@/app/actions/auth-actions";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className=" cursor-pointer text-destructive"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
