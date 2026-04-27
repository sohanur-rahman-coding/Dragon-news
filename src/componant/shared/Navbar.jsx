"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./Navlink.jsx";
import { authClient } from "@/lib/auth-client.js";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const signout = async () => {
    await authClient.signOut();
    redirect("/login");
  };

  return (
    <div className="container mx-auto bg-gray-50 shadow-md rounded-xl px-4 py-3 mt-6 flex items-center justify-between flex-wrap gap-3">

      {/* LOGO */}
      <div className="text-lg font-bold text-gray-800">
        Dragon News
      </div>

      {/* NAV LINKS */}
      <ul className="flex items-center gap-4 text-gray-700 text-sm md:text-base">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

      {/* USER SECTION */}
      <div className="flex items-center gap-3">

        {isPending ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : user ? (
          <div className="flex items-center gap-3">

            {/* TEXT */}
            <div className="text-right hidden sm:block">
              <p className="text-xs text-gray-500">Hello,</p>
              <h2 className="text-sm font-semibold text-gray-800">
                {user.name}
              </h2>
            </div>

            {/* PROFILE IMAGE */}
            <Image
              className="rounded-full object-cover border-2 border-purple-500 shadow-md hover:scale-105 transition"
              src={user?.image || userAvatar}
              alt="User avatar"
              width={45}
              height={45}
            />

            {/* LOGOUT */}
            <button
              className="bg-purple-500 hover:bg-purple-600 transition text-white text-sm px-3 py-1 rounded-lg"
              onClick={signout}
            >
              Logout
            </button>

          </div>
        ) : (
          <Link
            href="/login"
            className="bg-purple-500 hover:bg-purple-600 transition text-white text-sm px-4 py-1.5 rounded-lg"
          >
            Login
          </Link>
        )}

      </div>

    </div>
  );
};

export default Navbar;