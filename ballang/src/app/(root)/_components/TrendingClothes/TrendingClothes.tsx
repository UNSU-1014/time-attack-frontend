import ClothCardList from "@/components/ClothCardList";

async function getClothes() {
  const response = await fetch(
    "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/products",
    {
      next: { revalidate: 60 },
    }
  );
  const data = await response.json();
  return data;
}

async function TrendingClothes() {
  const clothes = await getClothes();
  console.log(clothes);
  return <ClothCardList title="Trending" clothes={clothes || []} />;
}

export default TrendingClothes;
