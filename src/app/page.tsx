import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import sliderContent from "../../components/Data/sliderContent";
import ProductListWrapper from "../../components/Product/ProductListWrapper";

async function getProducts() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="">
      <Container>
        <div className="mt-7 relative">
          <Carousel slides={sliderContent} />
          <div className="absolute top-[30%] left-[15%] flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Summer Sale!
            </h1>
            <p className="text-white md:pb-3 md:text-lg">
              Enjoy discounts on selected items
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
              GET 50% OFF
            </h1>
          </div>
        </div>
        <ProductListWrapper products={products} />
      </Container>
    </div>
  );
}
