import React from "react";

export const AnimationContainer = () => {
  return (
    <>
      <div className="absolute right-0 top-0 z-10 flex h-1/2 w-96 flex-wrap gap-x-8 rounded-xl bg-white p-4 dark:bg-gray-800 dark:text-white">
        <div className="h-36 w-36 border-red-50 bg-gray-500">
          тут будет анимашка
        </div>
        <div className="h-36 w-36 border-red-50 bg-gray-500">
          тут будет анимашка
        </div>
        <div className="h-36 w-36 border-red-50 bg-gray-500">
          тут будет анимашка
        </div>
        <div className="h-36 w-36 border-red-50 bg-gray-500">
          тут будет анимашка
        </div>
      </div>
    </>
  );
};
