import Link from "next/link";
import Image from "next/image";
import AddToCart from "./AddToCart";

const ProductData = [
  {
    _id: 1,
    title: "Alto Jeans",
    subTitle: "Jeans",
    price: "20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_DCIOEUQ2jODD9Vx4OzphvSkfYz_nO1PspPGMBfN1zgdyqzn3woeQBdyDvszGYMeP9A&usqp=CAU",
  },
  {
    _id: 2,
    title: "T-SHIRT",
    subTitle: "Jeans",
    price: "20",
    image:
      "https://outfitters.com.pk/cdn/shop/files/F0662106911_3.jpg?v=1692098107",
  },
  {
    _id: 3,
    title: "COTTON LINEN SHIRT",
    subTitle: "Jeans",
    price: "20",
    image:
      "https://outfitters.com.pk/cdn/shop/files/abc_a268895f-d4af-4973-afd9-4bc71e1bfd41.jpg?v=1691562620",
  },
  {
    _id: 4,
    title: "STRIPED CAMP COLLAR SHIRT",
    subTitle: "Jeans",
    price: "20",
    image:
      "https://outfitters.com.pk/cdn/shop/files/F0376103003_3.jpg?v=1691582261",
  },
];

const ProductCard = () => {
  const data = ProductData;
  return (
    <section
      className={
        "container flex min-h-screen flex-col items-center justify-between my-16 mx-auto"
      }
    >
      <section
        className={
          "flex flex-row justify-around gap-x-3 gap-y-7 flex-wrap w-full"
        }
      >
        {data.map((product: any) => {
          return (
            <div
              className={"cursor-pointer min-w-md flex flex-col gap-2"}
              key={product._id}
            >
              <Image
                src={product.image}
                alt={"Product Image"}
                height={100}
                width={150}
              />
              <h2 className={"font-semibold text-xl"}>{product.title}</h2>
              <label className={"font-semibold text-lg text-gray-500"}>
                {product.subTitle}
              </label>
              <label className={"font-semibold text-2xl"}>
                ${product.price}
              </label>
              <AddToCart />
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ProductCard;
