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
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
      {/* left  */}
      <div className=" col-span-3">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>
      {/* middle */}

      <div className=" col-span-6">
        <h2 className="font-bold text-lg mb-4">News by category</h2>
        <div className="space-y-4">
          {News.length > 0 ? (
            News.map((n) => <NewsCard key={n._id} news={n}></NewsCard>)
          ) : (
            <h1 className="text-3xl">No data found</h1>
          )}
        </div>
      </div>
      {/* right  */}
      <div className=" col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
