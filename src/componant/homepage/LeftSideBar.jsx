import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div className="col-span-3">

      <div className="bg-white p-5 rounded-2xl shadow-lg">

        {/* Title */}
        <h2 className="font-bold text-xl mb-6 border-b pb-2">
          All Categories
        </h2>

        {/* List */}
        <ul className="flex flex-col gap-3">

          {categories.news_category.map((category) => {
            const isActive = activeId === category.category_id;

            return (
              <li key={category.category_id}>
                <Link
                  href={`/category/${category.category_id}`}
                  className={`
                    flex items-center justify-between px-4 py-3 rounded-xl
                    font-medium transition duration-300
                    ${isActive 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                      : "bg-gray-50 text-gray-700 hover:bg-purple-100 hover:text-purple-600"
                    }
                  `}
                >
                  {/* Name */}
                  <span>{category.category_name}</span>

                  {/* Arrow Icon */}
                  <span className={`transition ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}>
                    →
                  </span>
                </Link>
              </li>
            );
          })}

        </ul>

      </div>

    </div>
  );
};

export default LeftSideBar;