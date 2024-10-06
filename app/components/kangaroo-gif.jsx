import { useEffect } from "react";
import Image from "next/image";

export const KangarooGif = () => {
  useEffect(() => {
    const audio = new Audio("/sounds/kangaroo-sound.wav");

    audio.volume = 0.1;

    audio.loop = true;

    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div>
      <Image
        src={"/gifs/kangaroo-joypixels.gif"}
        alt="A cool GIF"
        width={50}
        height={50}
      />
    </div>
  );
};
