import Image from "next/image";

export const KangarooGif = () => {
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
