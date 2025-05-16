import { config } from "../../config";

export function Index() {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-black">
      <img
        src={`${config.imageCdnUrl}/PXL_20230904_215813241.jpg?f=webp`}
        alt="Atypical Village"
        className="w-full h-full object-contain md:object-cover absolute"
      />
      <h1 className="text-white text-6xl sm:text-8xl md:text-9xl font-bold z-10 text-shadow-gray-900 text-shadow-lg mt-10">
        TYPICAL
      </h1>
    </div>
  );
}
