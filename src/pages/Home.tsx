import { useEffect, useState } from "react";
import Market from "../components/Market/Market";
import { getArticles, getCategories } from "../utils/fetchApi";
import { Article } from "../data/articles";

const fetchProducts = async () => {
  return await Promise.all([getArticles(), getCategories()]);
};

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articles, categories] = await fetchProducts();
        setArticles(articles);
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="p-3 md:p-9">
        <header>
          <h2 className="font-normal text-4xl text-center hidden md:block">
            Artículos a la venta
          </h2>
        </header>
      </section>
      <Market articles={articles} categories={categories} />
    </>
  );
}

export default Home;
