"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

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
 <div className="space-y-6">

      {/* 🔥 Find Us On */}
      <div className="bg-white rounded-2xl shadow-lg p-5">
        <h2 className="font-bold text-lg mb-4 border-b pb-2">
          Find Us On
        </h2>

        <div className="divide-y rounded-lg border overflow-hidden">

          <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition cursor-pointer">
            <FaFacebookF className="text-blue-600 text-lg" />
            <span className="text-sm font-medium">Facebook</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition cursor-pointer">
            <FaTwitter className="text-sky-500 text-lg" />
            <span className="text-sm font-medium">Twitter</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition cursor-pointer">
            <FaInstagram className="text-pink-500 text-lg" />
            <span className="text-sm font-medium">Instagram</span>
          </div>

        </div>
      </div>

      {/* 🔥 Q-Zone */}
      <div className="bg-white rounded-2xl shadow-lg p-5">
        <h2 className="font-bold text-lg mb-4 border-b pb-2">
          Q-Zone
        </h2>

        <div className="space-y-5">

          {/* CARD */}
          {[
            {
              name: "Swimming",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
            },
            {
              name: "Class",
              img: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800",
            },
            {
              name: "Play Ground",
              img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-40 w-full">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* TEXT */}
              <div className="p-3 text-center">
                <p className="text-sm font-semibold text-gray-700">
                  {item.name}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
    </div>
  );
};

export default RightSidebar;
