import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import Colors from "./utils/Colors";
import hero_src from "../img/hero.png";
import hero_sm_src from "../img/hero-sm.png";

const data = [
  {
    img_src: "/images/painting10.png",
    title: "Kellar",
    price: "$150.00",
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
    img_src: "/images/painting12.png",
    title: "War Pledges",
    price: "$150.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
  {
    img_src: "/images/painting11.png",
    title: "Clean Teeth",
    price: "$150.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus."
  },
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
  font-size: 1.8rem;
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

const CategoriesWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Categories = styled.div`
  width: 30%;
  padding-right: 32px;
  padding-left: 16px;
`;

const CategoriesList = styled.ul`
  text-align: left;
`;

const CategoriesItem = styled.li`
  cursor: pointer;
  font-size: 3.2rem;
  list-style: none;
  /* border: 9px solid ${Colors.Gray}; */
  padding: 16px;
  background: ${Colors.White};
  border: 1px solid transparent;
 
  width: 100%;
  margin-bottom: 16px;

  &:hover {
    border: 1px solid ${Colors.Border};
  }

  &.active {
    border: 1px solid ${Colors.Border};
    background: ${Colors.Primary};
    text-decoration: underline;
  }

`;

const ProductListWrapper = styled.div`
  width: 100%;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const CategoriesTitle = styled.h1`
  padding-top: 16px;

  padding-bottom: 16px;
`;

const SelectMenu = styled.select`
  outline: 0;
  font-size: 1.8rem;
  font-family: inherit;
  background: none;
  border: 0;
  appearance: none;
  &::-ms-expand {
    display: none;
  }
`;

const Sort = () => (
  <SelectMenu>
    <option>Sort By Newest</option>
    <option>Sort By Price (low to high)</option>
    <option>Sort By Price (high to low)</option>
  </SelectMenu>
);

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
      <CategoriesWrapper>
        <Categories>
          <CategoriesList>
            <CategoriesItem className="active">All</CategoriesItem>
            <CategoriesItem>Popular</CategoriesItem>
            <CategoriesItem>Bedroom</CategoriesItem>
            <CategoriesItem>Bathroom</CategoriesItem>
            <CategoriesItem>Den</CategoriesItem>
            <CategoriesItem>Kitchen</CategoriesItem>
            <CategoriesItem>Study</CategoriesItem>
            <CategoriesItem>Utility</CategoriesItem>
          </CategoriesList>
        </Categories>
        <ProductListWrapper>
          <SortWrapper>
            <CategoriesTitle>Showing All Posters</CategoriesTitle>
            <Sort />
          </SortWrapper>
          <ProductList id="gallery" data={data} />
        </ProductListWrapper>
      </CategoriesWrapper>
    </>
  );
};

export default Art;
