"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { CardList } from "@/components/Card/component";
import { getApi } from "@/lib/api";

export default function Home() {
  const [anime, setAnime] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const fetchAnime = async () => {
    const result = await getApi("/anime", `${query}`);
    setAnime(result?.data?.data);
  };

  useEffect(() => {
    fetchAnime();
  }, [query]);

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <div className="mx-60 flex flex-col gap-8 mt-10">
      <div className="mx-16 flex justify-end">
        <input
          onChange={handleOnchange}
          value={query}
          className="text-black p-2 rounded-lg"
          type="text"
          placeholder="type to search..."
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {anime.map((data, i) => {
          return (
            <div key={i}>
              <CardList props={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
