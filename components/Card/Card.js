import React from "react";
import productStyles from "../../styles/product.module.scss";
const Card = ({ data, data2, index }) => {
  return (
    <div className={productStyles.__product_card}>
      <h1>{data.version.name}</h1>
      <img src={data2[index].thumbnailUrl} />
    </div>
  );
};

export default Card;
