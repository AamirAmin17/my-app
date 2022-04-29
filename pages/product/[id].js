import React from "react";
import { getFetch } from "../../helpers/fetchRequests";
import productStyles from "../../styles/product.module.scss";
const ProductITem = (props) => {
  console.log("props", props);
  return (
    <div>
      <div className={productStyles.__product_heading}>
        <span>Name:</span> <h1>{props.product.name}</h1>
      </div>
      <div className={productStyles.__product_heading}>
        <span>Id:</span> <h3>{props.product.id}</h3>
      </div>
    </div>
  );
};

export default ProductITem;
export async function getStaticProps({ params: { id } }) {
  const product = await getFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  //   if (data.error) {
  //     return {
  //       notFound: true,
  //     };
  //   }
  return {
    props: { product },
  };
}

export async function getStaticPaths(context) {
  return {
    fallback: "blocking",
    paths: [],
  };
}
