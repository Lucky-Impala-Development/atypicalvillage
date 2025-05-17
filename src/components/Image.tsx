import { cn } from "@/util";
import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loader?: React.ReactNode;
  loading?: boolean;
}

export function Image({
  src,
  alt,
  className = "",
  containerClassName = "",
  loader = <ImageDefaultLoader />,
  loading = true,
}: ImageProps) {
  const [_isLoading, setIsLoading] = useState(true);
  const isLoading = loading || _isLoading;

  return (
    <div className={`relative ${containerClassName}`}>
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full">
          {loader}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
}

export const ImageDefaultLoader = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "w-8 h-8 border-4 border-gray-300 border-t-white rounded-full animate-spin",
      className
    )}
  >
    <span className="sr-only">Loading...</span>
  </div>
);
