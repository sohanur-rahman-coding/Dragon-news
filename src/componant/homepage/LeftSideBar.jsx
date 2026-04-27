import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div className=" col-span-3">
      <div>
        <h2 className="font-bold text-lg">All categories</h2>
        <ul className="flex flex-col gap-3 mt-6">
          {categories.news_category.map((category) => {
            return (
              <li key={category.category_id}>
                <Link
                  href={`/category/${category.category_id}`}
                   className={`
                ${activeId === category.category_id && "bg-purple-500 text-white"}
                  rounded-md font-bold text-center text-md block p-2`}
                >
                  {" "}
                  {category.category_name}
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
