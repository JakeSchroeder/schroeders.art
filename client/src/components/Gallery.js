import React from "react";
import mark_src from "../img/mark.png";
import styled from "styled-components";
import ProductList from "./ProductList";
import Product from "../components/Product";
//this is where the product gallery/list will go

const data = [
  {
    img_src: "/images/painting1.png",
    title: "True Renasssance",
    price: "$160.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting2.png",
    title: "Mr Albini",
    price: "$220.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting3.png",
    title: "Macbeth",
    price: "$90.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting4.png",
    title: "War Pledges",
    price: "$150.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  }
];

const LogoMark = styled.img``;

const Gallery = () => {
  return (
    <>
      <ProductList data={data} />
    </>
  );
};

export default Gallery;
