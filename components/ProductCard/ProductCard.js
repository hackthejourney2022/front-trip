import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import Favourite from 'components/UI/Favorite/Favorite';
import GridCard from '../GridCard/GridCard';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const gallery = [{
  url: '/images/city-1.jpg',
  title: 'teste'
},
{
  url: '/images/city-2.jpg',
  title: 'teste'
},
{
  url: '/images/city-3.jpg',
  title: 'teste'
}]




export default function ProductCard({
  destination,
  descrption,
  price,
  departureDate,
  returnDate,
  to,
  link,
  item,
  numberItem
}) {

  return (
    <GridCard
      item={item}
      favorite={
        <Favourite
          onClick={(event) => {
            console.log(event);
          }}
        />
      }
      location={destination}
      title={descrption}
      to={to}
      price={`R$ ${price}`}
      departureDate={`Data de Ida: ${departureDate}`}
      returnDate={`Data Volta: ${returnDate}`}
      viewDetailsBtn={
        <Link href={`${link}/[slug]`} as={`${link}/item`} prefetch={false}>
          <a>
            <FiExternalLink /> Ver Detalhes
          </a>
        </Link>
      }
    >
      <Carousel
        ssr
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        renderDotsOutside={false}
        responsive={responsive}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
      >

        <Image
          src={gallery[numberItem].url}
          alt={gallery[numberItem].title}
          layout="fill"
          objectFit="cover"
        />

      </Carousel>
    </GridCard>
  );
}
