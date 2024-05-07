"use client";

import dynamic from "next/dynamic";
import SearchBox from "../components/SearchBox";

export default function Home() {
  const Clock = dynamic(() => import("../components/Clock"), {
    ssr: false,
  });

  return (
    <main className="container mx-auto">
      <div className="flex  bg-neutral-800">
        <SearchBox />
        {/* <Clock /> */}
      </div>
    </main>
  );
}
