import { config } from "../../config";

export function Index() {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-black">
      <h1 className="inline flex-grow-0 text-white text-[2.5rem] sm:text-7xl md:text-8xl font-bold z-10 text-shadow-gray-900 text-shadow-lg my-10">
        UNDER
        <br />
        CONSTRUCTION
      </h1>
      <img
        src={`${config.imageCdnUrl}/2023-typical-sign-needs-work.jpg?f=webp`}
        alt="Atypical Village"
        className="flex-1 object-contain md:object-cover object-top"
      />
    </div>
  );
}
