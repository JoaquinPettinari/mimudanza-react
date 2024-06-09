import { useMemo, useState } from "react";
import type { Article } from "../../data/articles";
import CurrentPrice from "../Article/CurrentPrice";
import { Link } from "react-router-dom";
import FilterCategories from "../FilterCategories/FilterCategories";

interface MarketProps {
  articles: Article[];
  categories: string[];
}

function Market({ categories, articles }: MarketProps) {
  const [activeCategories, setActiveCategories] = useState<string[]>([
    "Ver todo",
  ]);

  const allCategories = useMemo(() => {
    return ["Ver todo", ...categories];
  }, [categories]);

  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        if (activeCategories.includes("Ver todo")) return true;
        return activeCategories.includes(article.category);
      })
      .sort((a, b) => {
        return b.price - a.price;
      });
  }, [activeCategories, articles]);

  return (
    <section className="p-3">
      <FilterCategories
        allCategories={allCategories}
        activeCategories={activeCategories}
        setActiveCategories={setActiveCategories}
      />
      <article className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {filteredArticles.map(
          ({ id, title, price, ask, reserved, sold, discount }) => {
            return (
              <section
                key={id}
                className="rounded-2xl shadow-xl w-full hover:shadow-2xl "
              >
                <Link to={`/articulo/${id}`}>
                  <div className="flex flex-col">
                    <img
                      src={`/${id}_1.jpg`}
                      alt={title}
                      className="w-full h-96 rounded-t-2xl object-contain"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl mb-3">{title}</h2>
                      <CurrentPrice
                        price={price}
                        discount={discount}
                        ask={ask}
                        reserved={reserved}
                        sold={sold}
                      />
                    </div>
                  </div>
                </Link>
              </section>
            );
          }
        )}
      </article>
    </section>
  );
}

export default Market;
