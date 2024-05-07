"use client";

import dynamic from "next/dynamic";
import SearchBox from "../components/SearchBox";

export default function Home() {
  const Clock = dynamic(() => import("../components/Clock"), {
    ssr: false,
  });

  return (
    <main className="container mx-auto">
      <SearchBox />
      <div>
        <div className="flex"></div>
      </div>
    </main>
  );
}
