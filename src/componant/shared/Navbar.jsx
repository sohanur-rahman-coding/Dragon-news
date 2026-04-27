"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./Navlink.jsx";
import { authClient, signOut } from "@/lib/auth-client.js";
import { redirect, useRouter } from "next/navigation";


const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  console.log(session);
  const user = session?.user;
  console.log(user);
 
   const signout = async () => {
    await authClient.signOut();
    redirect("/login"); 
  };
  return (
    <div className="container mx-auto bg-gray-50 py-2 shadow flex justify-between gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : user ? (
          <div className="flex items-center gap-2">
            <h2>Hello, {user.name}</h2>
            <Image
            className="rounded-full"
              src={user?.image || userAvatar}
              alt="User avatar"
              width={50}
              height={50}
            />
            <button
              className="btn bg-purple-500 text-white"
              onClick={signout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button className="btn bg-purple-500 text-white">
            <Link href={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
