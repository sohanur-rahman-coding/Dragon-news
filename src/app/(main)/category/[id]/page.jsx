import LeftSideBar from "@/componant/homepage/LeftSideBar";
import NewsCard from "@/componant/homepage/NewsCard";
import RightSidebar from "@/componant/homepage/RightSideBar";
import { categoryPromise, GetCategoryNews } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params; 

  const categories = await categoryPromise(); 
  const News = await GetCategoryNews(id);    

  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 my-[60px] px-3">

  <div className="col-span-12 md:col-span-4 lg:col-span-3">
    <div className="bg-white rounded-2xl shadow-md p-4 h-full">
      <LeftSideBar categories={categories} activeId={id} />
    </div>
  </div>

  <div className="col-span-12 md:col-span-8 lg:col-span-6">

    <div className="mb-6">
      <h2 className="font-bold text-xl md:text-2xl text-gray-800">
        News by Category
      </h2>
      <div className="w-16 h-1 bg-purple-500 mt-2 rounded-full"></div>
    </div>

    <div className="space-y-5">
      {News.length > 0 ? (
        News.map((n) => (
          <div
            key={n._id}
            className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition duration-300 p-3 md:p-4"
          >
            <NewsCard news={n} />
          </div>
        ))
      ) : (
        <div className="bg-white border rounded-2xl shadow-sm py-12 text-center">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-600">
            No data found 😢
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Please try another category
          </p>
        </div>
      )}
    </div>

  </div>

  <div className="col-span-12 md:col-span-12 lg:col-span-3">
    <div className="bg-white rounded-2xl shadow-md p-4 h-full">
      <RightSidebar />
    </div>
  </div>

</div>
  );
};

export default NewsCategoryPage;