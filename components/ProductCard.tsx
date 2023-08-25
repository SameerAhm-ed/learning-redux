import Image from "next/image";
import AddToCart from "./AddToCart";

interface Product {
  _id: number;
  title: string;
  subTitle: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  products: Product[];
}


const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  return (
    <section className="container flex flex-col items-center justify-between min-h-screen mx-auto my-16">
      <section className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {products.map((product) => (
          <div className="flex flex-col gap-2 cursor-pointer min-w-md place-self-start" key={product._id}>
            <Image src={product.image} alt="Product Image" width={200} height={250}/>
            <h2 className="w-40 text-xl font-semibold">{product.title}</h2>
            <label className="text-lg font-semibold text-gray-500">{product.subTitle}</label>
            <label className="text-2xl font-semibold">${product.price}</label>
            <AddToCart />
          </div>
        ))}
      </section>
    </section>
  );
};
export default ProductCard;
