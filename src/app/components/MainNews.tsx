
import Image from "next/image";
import Link from "next/link";

interface INews {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = async () => {
  try {
    const res = await fetch(
      "https://news-api-v2.vercel.app/api/news/sections",
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`API request failed: ${res.status}`);
    }

    const data = await res.json();

    const mainNews: INews = data.data[0].articles[0];

    return (
      <div>
        <Link href={`/news/${mainNews.id}`}>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <Image
                height={600}
                width={600}
                src={mainNews.imageUrl}
                alt={mainNews.imageAlt}
              />
            </figure>

            <div className="card-body">
              <p className="font-semibold text-red-600">
                {mainNews.category}
              </p>

              <h2 className="card-title">
                {mainNews.title}
              </h2>

              <p>{mainNews.description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  } catch (error) {
    console.error("MainNews API error:", error);

    return (
      <div className="py-10 text-center">
        <p className="text-red-600">
          খবর লোড করা সম্ভব হয়নি।
        </p>
      </div>
    );
  }
};

export default MainNews;
