import { ComponentProps } from "react";
import ClothCard from "../ClothCard";

interface ClothCardListProps {
  title: string;
  clothes: Array<ComponentProps<typeof ClothCard>["cloth"]>;
}

function ClothCardList({ title, clothes }: ClothCardListProps) {
  console.log(clothes);

  return (
    <section>
      <h3 className="text-2xl font-bold mb-5">{title}</h3>
      <ol className="grid grid-cols-4 gap-x-5 gap-y-7">
        {clothes &&
          clothes.map((cloth) => (
            <li key={cloth.id}>
              <ClothCard cloth={cloth} />
            </li>
          ))}
      </ol>
    </section>
  );
}

export default ClothCardList;
