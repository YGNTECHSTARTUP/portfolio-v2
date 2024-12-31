/* eslint-disable @next/next/no-img-element */
"use client";

import useSWR from "swr";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Song = {
  name: string;
  artist: string;
  album: string;
  image: string;
  url: string;
  np: boolean; // Whether it's now playing
};

export default function FM() {
  const { data, error, isLoading } = useSWR<Song>("/api/fm", fetcher, {
    refreshInterval: 10000,
  });

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
  });

  if (error) {
    console.error(error);
    return (
      <div className="w-full bg-red-500 text-white p-3 rounded-lg">
        Error loading track information. Please try again later.
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="w-full bg-stone-800/90 flex items-center justify-center z-50 animate-pulse">
        <p>Loading...</p>
      </div>
    );
  }

  // Determine the type of track (currently playing or last played)
  const trackType = data.np ? "Jamming to" : "Last played";

  return (
    <div className="w-full h-full" ref={ref}>
      <motion.div
        className="border border-stone-800/90 p-3 rounded-lg flex flex-row-reverse justify-between"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 130,
          damping: 9,
        }}
      >
        {/* Album Cover */}
        <div className="w-20 h-20">
          <img
            src={data.image || "/placeholder.jpg"}
            alt={`${data.album || "Album"} cover`}
            className="object-cover rounded-lg shadow-lg grayscale hover:grayscale-0 duration-300 ease-in"
          />
        </div>

        {/* Track Info */}
        <div className="flex flex-col gap-2 h-20 items-start justify-between">
          <p
            className={clsx(
              "mb-0 leading-none text-sm",
              data.np ? "text-emerald-500" : "text-zinc-500"
            )}
          >
            {trackType}
          </p>
          <p className="mb-0 leading-none">
            <a
              href={data.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-blue-400 hover:underline"
            >
              {data.name || "Unknown Track"}
            </a>
            {" // "}
            {data.artist || "Unknown Artist"}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
