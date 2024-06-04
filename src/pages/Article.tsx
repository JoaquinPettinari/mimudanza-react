import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ARTICLES, type Article } from "../data/articles";
import CurrentPrice from "../components/Article/CurrentPrice";
import WhatsAppButton from "../components/Article/WhatsAppButton";
import ArticleCarousel from "../components/Carousel/Carousel";

function Article() {
  const [article, setArticle] = useState<Article>();
  const { id } = useParams<"id">();

  useEffect(() => {
    const article = ARTICLES.find((article) => article.id === id);
    setArticle(article);
  }, [id]);

  return (
    <section className="h-full p-5 lg:pt-32 flex flex-col md:flex-row">
      <ArticleCarousel id={id || ""} photos={article?.photos || 1} />
      <div className="p-6 w-full md:w-1/2 flex flex-col gap-5">
        <a href="/">
          <h3 className="text-gray-500 text-base">Volver</h3>
        </a>
        <h2 className="text-2xl">{article?.title}</h2>
        <CurrentPrice
          price={article?.price || 0}
          ask={article?.ask}
          reserved={article?.reserved}
          sold={article?.sold}
          discount={article?.discount}
        />
        <h3 className="text-xl">{article?.description}</h3>
        <WhatsAppButton
          title={article?.title || ""}
          id={article?.id || id || ""}
        />
      </div>
    </section>
  );
}

export default Article;
