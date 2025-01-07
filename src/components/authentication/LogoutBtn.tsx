
"use client";

import { logout } from "@/app/auth-actions";

const LogoutBtn = () => {
  const handleLogout = async () => {
    try {
      await logout();
      console.log("User successfully logged out");
      // Optionally redirect or provide feedback to the user
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="inline-block w-full cursor-pointer text-destructive"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
