import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  try {
    const res = await fetch(
      "https://news-api-v2.vercel.app/api/categories",
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status}`);
    }

    const data = await res.json();

    const navs: Navs[] = data.data;

    const filteredNavs = navs.filter((n) => n.scrapable);

    return (
      <div className="mt-5 flex justify-center gap-5">
        <Link href="/">হোম</Link>

        {filteredNavs.map((n) => (
          <Link key={n.slug} href={`/category/${n.slug}`}>
            {n.title}
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch navigation links:", error);

    return (
      <div className="mt-5 flex justify-center gap-5">
        <Link href="/">হোম</Link>
      </div>
    );
  }
};

export default NavLinks;