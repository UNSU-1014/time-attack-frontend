import ClothCardList from "@/components/ClothCardList";

async function getClothes() {
  const response = await fetch(
    "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/products",
    { next: { revalidate: 60 } }
  );
  const data = await response.json();
  const products = data["result"];
  console.log(products);
  return products;
}

async function TrendingClothes() {
  const clothes = await getClothes();
  return <ClothCardList title="Trending" clothes={clothes || []} />;
}

export default TrendingClothes;
