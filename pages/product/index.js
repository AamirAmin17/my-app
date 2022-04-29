import React from "react";
import { getFetch } from "../../helpers/fetchRequests";
import productStyles from "../../styles/product.module.scss";
import Card from "../../components/Card/Card";
const product = (props) => {
  const { data } = props;

  const data2 = props.data2.slice(0, data.game_indices.length || 20);

  return (
    <div className={productStyles.__product_parent_card}>
      {data.game_indices.map((product, index) => {
        return <Card data={product} data2={data2} index={index} key={index} />;
      })}
    </div>
  );
};

export default product;

export async function getStaticProps(context) {
  console.log("context", context);
  const [data, data2] = await Promise.all([
    getFetch("https://pokeapi.co/api/v2/pokemon/ditto"),
    getFetch("https://jsonplaceholder.typicode.com/photos"),
  ]);

  if (data.error) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data, data2 },
  };
}
