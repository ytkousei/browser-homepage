"use client";

import { FormEvent, useRef } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import engines from "../search-engines.json";

export default function SearchBox() {
  const searchBoxRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    const form: HTMLFormElement = e.target as HTMLFormElement;
    const searchBox = searchBoxRef.current;
    if (!searchBox || !searchBox.value) return;

    let words = searchBox.value.split(" ");
    if (words.length === 0) return;

    //@ts-ignore
    let engine: string[] = engines[words[0]];
    if (!engine) engine = engines.g;

    let searchStr = words.slice(1).join(" ");

    searchBox.value = searchStr;
    form.action = engine[0];
    searchBox.name = engine[1];

    return false;
  };

  return (
    <form
      className="flex items-center justify-center w-80 h-13 bg-neutral-500"
      onSubmit={onSubmit}
    >
      <MdSearch />
      <input
        ref={searchBoxRef}
        className="w-full outline-none bg-transparent"
        type="text"
      />
      <MdClose />
    </form>
  );
}
