
import NewsCard from "./NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

const OtherNews = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const data = await res.json();

  const sections = data.data;
  const otherSections: IOtherSection[] = sections.slice(1);

  return (
    <div className="mt-5 grid gap-5">
      {otherSections.map((os) => (
        <div key={os.curationId}>
          <h1 className="border-b-2 border-red-700 pb-1 font-bold">
            {os.title}
          </h1>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {os.articles.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherNews;

