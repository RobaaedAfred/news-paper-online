import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headline {
  id: string;
  title: string;
}

const Marquee = async () => {
  let headlines: Headline[];

  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    if (!res.ok) throw new Error(`Headlines API request failed: ${res.status}`);
    const data: { data?: Headline[] } = await res.json();
    headlines = data.data ?? [];
  } catch (error) {
    console.error("Failed to load headlines:", error);
    headlines = [];
  }

  return (
    <div className="bg-red-700 text-white">
      <div className="mx-auto flex max-w-7xl">
        <div className="bg-red-800 px-5 py-1 font-bold">সর্বশেষ</div>
        {headlines.length > 0 && (
          <MarqueeText className="py-1" direction="right" duration={10}>
            {headlines.map((headline) => (
              <Link
                className="hover:underline"
                href={`/news/${headline.id}`}
                key={headline.id}
              >
                <span>{headline.title}</span>
                <span className="mx-5">•</span>
              </Link>
            ))}
          </MarqueeText>
        )}
      </div>
    </div>
  );
};

export default Marquee;
