import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Rating from 'components/UI/Rating/Rating';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import DescriptionWrapper from './Description.style';
import { RatingMeta } from '../SinglePageView.style';

const Description = ({
  title,
  location,
  content,
  rating,
  ratingCount,
  titleStyle,
  locationMetaStyle,
  contentStyle
}) => {
  return (
    <Element name="overview" className="overview">
      <DescriptionWrapper>
        <Text content={location} {...locationMetaStyle} />
        <Heading as="h2" content={title} {...titleStyle} />
        <RatingMeta>
          <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
        </RatingMeta>
        <Text content={content} {...contentStyle} />
      </DescriptionWrapper>
    </Element>
  );
};

Description.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Description.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px',
  },
  locationMetaStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#909090',
  },
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
  },
};

export default Description;
