"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  const GoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log({ data });
  };
  const githubSignIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Login with</h2>
      <div className="flex flex-col gap-2">
        <button onClick={GoogleSignIn} className="btn border-blue-500 text-blue-500">
          <FaGoogle />
          Login with google
        </button>
        <button onClick={githubSignIn} className="btn">
          <FaGithub />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
