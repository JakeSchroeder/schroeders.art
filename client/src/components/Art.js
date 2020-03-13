import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import Colors from "./utils/Colors";
import hero_src from "../img/hero.png";
import hero_sm_src from "../img/hero-sm.png";

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
  },
  {
    img_src: "/images/painting5.png",
    title: "Chocolat Klaus",
    price: "$200.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting6.png",
    title: "NYC TWA",
    price: "$60.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting7.png",
    title: "Yellow Stone",
    price: "$80.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting8.png",
    title: "Chicago Braniff",
    price: "$150.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting9.png",
    title: "War Pledges",
    price: "$150.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting10.png",
    title: "War Pledges",
    price: "$150.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting11.png",
    title: "War Pledges",
    price: "$150.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting12.png",
    title: "War Pledges",
    price: "$150.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  }
];

const HeroWrapper = styled.div`
  padding: 0 16px;
  padding-bottom: 64px;
`;

const Hero = styled.div`
  width: 100%;
  min-height: 400px;
  background: ${Colors.White};
  border: 18px solid #343535;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${hero_src});
  @media (max-width: 1028px) {
    background-image: url(${hero_sm_src});
  }

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const HeroDescription = styled.h1`
  text-align: center;
  margin-bottom: 8px;
`;

const CTAButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 200px;
  border: 1px solid ${Colors.Border};
  background: ${Colors.Primary};
  padding: 16px;
  color: ${Colors.White};
  text-decoration: none;
  font-family: germania-one, sans-serif;
`;

const HeroSubText = styled.p`
  font-size: 1.6rem;
  margin-bottom: 16px;
`;

const Art = () => {
  return (
    <>
      <HeroWrapper>
        <Hero>
          <HeroDescription>
            Furnish an entire room for only $250
            <br />
            Plus, Get Free Two-Day Delivery
          </HeroDescription>
          <HeroSubText>With Code: 20110</HeroSubText>
          <CTAButton>See Rooms</CTAButton>
        </Hero>
      </HeroWrapper>
      <ProductList id="gallery" data={data} />
    </>
  );
};

export default Art;
