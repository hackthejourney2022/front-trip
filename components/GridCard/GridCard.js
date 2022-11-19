import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GridCardWrapper, {
  ImageWrapper,
  FavoriteIcon,
  ContentWrapper,
  LocationArea,
  TitleArea,
  PriceArea,
  RatingArea,
  MetaWrapper,
  ButtonGroup,
} from './GridCard.style';

const GridCard = ({
  className,
  favorite,
  location,
  title,
  price,
  rating,
  editBtn,
  viewDetailsBtn,
  children,
  departureDate,
  returnDate,
  to,
  item
}) => {
  const [localStorageSave, setLocalStorage] = useState(item);
  let classes = viewDetailsBtn || editBtn ? `has_btn ${className}` : className;


  const clickSaveLocalStorage = () => {
    if (window && typeof localStorage !== 'undefined') {
      localStorage.setItem('data', JSON.stringify(localStorageSave));
    }
  };


  return (
    <GridCardWrapper className={`grid_card ${classes}`.trim()}>
      <ImageWrapper className="media_wrapper">{children}</ImageWrapper>
      <ContentWrapper className="content_wrapper">
        {to && <TitleArea>{to}</TitleArea>}
        {location && <LocationArea>{location}</LocationArea>}
        {title && <TitleArea>{title}</TitleArea>}
        <MetaWrapper className="meta_wrapper">
          {rating && <RatingArea className="rating">{rating}</RatingArea>}
          {departureDate && <LocationArea>{departureDate}</LocationArea>}
          {returnDate && <LocationArea>{returnDate}</LocationArea>}
          {price && <PriceArea className="price">{price}</PriceArea>}
          {viewDetailsBtn || editBtn ? (
            <ButtonGroup className="button_group" onClick={() => {

              setLocalStorage(item)
              clickSaveLocalStorage()

            }}>
              {viewDetailsBtn}
              {editBtn}
            </ButtonGroup>
          ) : null}
        </MetaWrapper>
      </ContentWrapper>

      {favorite && <FavoriteIcon>{favorite}</FavoriteIcon>}
    </GridCardWrapper>
  );
};

GridCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  price: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  editBtn: PropTypes.element,
  viewDetailsBtn: PropTypes.element,
};

export default GridCard;
