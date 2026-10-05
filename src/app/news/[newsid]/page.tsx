import { notFound } from "next/navigation";

interface Article {
  title: string;
  text: string;
}

export default async function NewsDetails({
  params,
}: {
  params: Promise<{ newsid: string }>;
}) {
  const { newsid } = await params;
  const response = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsid}`
  );

  if (response.status === 404) notFound();
  if (!response.ok) {
    throw new Error(`Failed to load article: ${response.status}`);
  }

  const result: { data?: Article | null } = await response.json();
  const news = result.data;

  if (!news) notFound();

  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.text}</p>
    </div>
  );
}
