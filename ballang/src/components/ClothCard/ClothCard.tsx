import Image from "next/image";
import Link from "next/link";

interface ClothCardProps {
  cloth: {
    id: string;
    name: string;
    imgSrc: string;
    originalPrice: string;
    price: string;
  };
}

function ClothCard({ cloth }: ClothCardProps) {
  console.log(cloth);
  return (
    <Link href={`clothes/${cloth.id}`} className="flex flex-col">
      <div className=" relative w-full aspect-video">
        <Image
          src={cloth.imgSrc}
          alt={cloth.name}
          fill
          unoptimized
          className="object-cover"
        />
        <h6>{cloth.name}</h6>
      </div>
    </Link>
  );
}

export default ClothCard;
