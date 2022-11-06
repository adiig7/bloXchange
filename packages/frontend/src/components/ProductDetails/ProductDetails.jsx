import React from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import Logo from "/src/Logo.svg";
import { ITEM_QUERY } from "../../queries";
import { useQuery } from "urql";

function ProductWrapper() {
  const { productId } = useParams()
  const [result] = useQuery({
    query: ITEM_QUERY,
    variables: {
      id: productId
    }
  })

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const product = data.item;

  return <Product
    images={product.images}
    logo={Logo}
    name="Dhrumi Shah"
    address={product.seller}
    category={product.category.name}
    title={product.title}
    price={product.price / 10 ** 18}
    description={product.description}
    location="Magdeburg, Deutschland"
  />
}

export default function ProductDetails() {
  return (
    <main className="mt-[80px] py-12 px-4 relative flex flex-col min-h-screen justify-center max-w-full overflow-hidden md:justify-start md:ml-[240px] md:px-12">
      <div className="relative mx-auto grid grid-cols-1 mt-14 sm:mt-0 gap-8 lg:flex lg:justify-center">
        <ProductWrapper />
      </div>
    </main>
  );
}
