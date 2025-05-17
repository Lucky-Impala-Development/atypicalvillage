import { useEffect, useMemo, useState } from "react";
import { config } from "../../config";
import { Image, ImageDefaultLoader } from "../components";

const LOADING_TIME = 25000;
export function Index() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 1) return;
    const timer = setTimeout(() => {
      setProgress(progress + 0.01);
    }, LOADING_TIME * 0.01);
    return () => clearTimeout(timer);
  }, [progress]);

  const loadingJoke = useMemo(() => {
    const index = Math.min(
      Math.floor(progress * loadingJokes.length),
      loadingJokes.length - 1
    );
    return loadingJokes[index];
  }, [progress]);

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="inline flex-grow-0 text-white text-[2.5rem] sm:text-7xl md:text-8xl font-bold z-10 text-shadow-gray-900 text-shadow-lg my-10">
        UNDER
        <br />
        CONSTRUCTION
      </h1>
      <Image
        src={`${config.imageCdnUrl}/2023-typical-sign-needs-work.jpg?f=webp`}
        alt="Atypical Village"
        className="object-contain md:object-cover object-top"
        containerClassName="flex-grow-1"
        loading={progress < 1}
        loader={
          <div className="flex flex-col items-center w-full h-full pt-10 px-10">
            <p className="text-white text-xl md:text-2xl lg:text-3xl mb-4 text-center">
              {loadingJoke ?? "  "}
            </p>
            <ImageDefaultLoader className="w-12 h-12 lg:w-16 lg:h-16 border-6 lg:border-8" />
          </div>
        }
      />
    </div>
  );
}

const loadingJokes = [
  "Loading...",
  "Loading...",
  "Loading...",
  "Loading...",
  "Please wait",
  "Please wait",
  "Please wait",
  "Almost there...",
  "Almost there...",
  "Almost there...",
  "Working on it...",
  "Working on it...",
  "Working on it...",
  " ",
  " ",
  " ",
  "Still working on it...",
  "Still working on it...",
  "Still working on it...",
  "And still loading...",
  "And still loading...",
  "And still loading...",
  "Actively loading...",
  "Actively loading...",
  "Actively loading...",
  "This is taking forever, I'm sorry",
  "This is taking forever, I'm sorry",
  "This is taking forever, I'm sorry",
  "I dont even know what we're trying to load anymore",
  "I dont even know what we're trying to load anymore",
  "I dont even know what we're trying to load anymore",
  "I dont even know what we're trying to load anymore",
  "I dont even know what we're trying to load anymore",
  " ",
  " ",
  " ",
  "Loading...",
  "Loading...",
  "Loading...",
  "Loading...",
  "Loading...",
  "Loading...",
];
