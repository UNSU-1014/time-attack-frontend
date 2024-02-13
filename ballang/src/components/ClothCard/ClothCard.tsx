import Image from "next/image";
import Link from "next/link";

interface ClothCardProps {
  cloth: {
    id: string;
    title: string;
    url: string;
  };
}

function ClothCard({ cloth }: ClothCardProps) {
  return (
    <Link href={`clothes/${cloth.id}`} className="flex flex-col">
      <div className=" relative w-full aspect-video">
        <Image
          src={cloth.url}
          alt={cloth.title}
          fill
          unoptimized
          className="object-cover"
        />
        <h6>{cloth.title}</h6>
      </div>
    </Link>
  );
}

export default ClothCard;
