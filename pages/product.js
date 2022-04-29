import React from "react";
import { getFetch } from "../helpers/fetchRequests";
import productStyles from "../styles/product.module.scss";
const product = (props) => {
  const { data } = props;

  return (
    <div className={productStyles.__product_parent_card}>
      <div className={productStyles.__product_card}>
        <h1>{data.name}</h1>
      </div>
    </div>
  );
};

export default product;

export async function getStaticProps(context) {
  const data = await getFetch("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log("dataResonse", data);
  if (data.error) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}
