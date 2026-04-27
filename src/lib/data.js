export const categoryPromise = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  console.log(data);
  return data.data;
};
export const GetCategoryNews = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  console.log(data);
  return data.data;
};

export async function getNewsDetailsById(news_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
  );
  const data = await res.json();
  return data.data[0];
}
