import React from "react";

import { KangarooGif } from "./kangaroo-gif";

export const AnimationContainer = () => {
  const kangarooGifs = Array.from({ length: 12 });

  return (
    <>
      <div className="absolute right-0 top-10 z-10 h-80 w-72 rounded-xl bg-white p-4 dark:bg-gray-800 dark:text-white">
        <h1 className="mb-2 text-center text-xl font-bold text-blue-500">
          Kangaroo population
        </h1>
        <div className="flex flex-wrap gap-x-5">
          {kangarooGifs.map((_, index) => (
            <div key={index} className="h-16 w-16 border-red-50">
              <KangarooGif />
            </div>
          ))}
        </div>
      </div>

      {/* infographics */}
      <div className="absolute bottom-10 right-0 z-10 flex h-80 w-72 flex-wrap gap-x-8 rounded-xl bg-white p-4 dark:bg-gray-800 dark:text-white">
        <div className="h-32 w-32 border-red-50 bg-gray-500">
          тут будет инфографика
        </div>
      </div>
    </>
  );
};
