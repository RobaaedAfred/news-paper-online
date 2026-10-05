
import MainNews from "./components/MainNews";
import MostRead from "./components/MostRead";
import OtherNews from "./components/otherNews";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4">
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">

     
        <div className="lg:col-span-2">
          <MainNews />

          <OtherNews />
        </div>

        <aside className="lg:col-span-1">
          <MostRead />
        </aside>

      </div>
    </main>
  );
}

