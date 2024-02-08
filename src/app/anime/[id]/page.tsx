"use client";
import { Badge } from "@/components/ui/badge";
import { getApi } from "@/lib/api";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const Page = () => {
  const [anime, setAnime] = useState<any[]>([]);
  const { id } = useParams();

  const fetchAnime = async () => {
    const result = await getApi(`/anime/${id}`, "");
    setAnime(result?.data);
  };

  useEffect(() => {
    fetchAnime();
  }, []);
  return (
    <main className="flex flex-col justify-center mt-10 mx-96 text-justify border-l border-red-500 ps-8">
      {Object.keys(anime).map((data: any, i) => {
        return (
          <div key={i} className="flex flex-col gap-10">
            <h1 className="text-3xl text-center">{anime[data].title}</h1>
            <h1 className="text-xl text-center">
              {anime[data].title_japanese}
            </h1>
            <figure className="flex justify-center">
              <Image
                src={anime[data].images.jpg.image_url}
                width={300}
                height={200}
                alt={anime[data].title}
              />
            </figure>
            <div className="flex gap-5">
              {anime[data].genres.map((data: any, i: any) => {
                return (
                  <div key={i}>
                    <Badge className="bg-red-500">{data.name}</Badge>
                  </div>
                );
              })}
            </div>
            <h3>
              Score : <span className="italic">{anime[data].score}</span>
            </h3>
            <h5 className="indent-12">{anime[data].synopsis}</h5>
            <div className="flex justify-center">
              <YouTube
                videoId={anime[data].trailer.youtube_id}
                onReady={(e) => {
                  e.target.pauseVideo();
                }}
              />
            </div>
          </div>
        );
      })}

      <footer className=" mt-20 border-t border-red-500">
        <h3 className="my-10"> &copy; gogoleran 2024</h3>
      </footer>
    </main>
  );
};

export default Page;
