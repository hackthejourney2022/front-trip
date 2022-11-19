import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import Rating from 'components/UI/Rating/Rating';
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
  url: 'http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png',
  title: 'teste'
},
{
  url: 'http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png',
  title: 'teste'
},
{
  url: 'http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png',
  title: 'teste'
}]




export default function ProductCard({
  destination,
  descrption,
  price,
  departureDate,
  returnDate,
  to,
  scores
}) {
  return (
    <GridCard
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
        <Link href={`/`} as={`/`} prefetch={false}>
          <a>
            <FiExternalLink /> View Details
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
        {gallery.map(({ url, title }, index) => (
          <Image
            key={index}
            src={url}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        ))}
      </Carousel>
    </GridCard>
  );
}
