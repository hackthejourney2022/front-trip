import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Checkbox, Divider, Modal } from 'antd';
import Heading from 'components/UI/Heading/Heading';
import CommentCard from 'components/UI/CommentCard/CommentCard';
import Text from 'components/UI/Text/Text';
import ReviewForm from './ReviewForm';
import Rating from 'components/UI/Rating/Rating';

import ReviewWrapper, {
  HeaderSection,
  RatingStatus,
  FilterElement,
  RatingSearch,
  RatingWrapper,
  ModalTitle,
} from './Review.style';
import { Element } from 'react-scroll';

const CommentBox = (props) => {
  const { reviews } = props;
  return reviews && reviews.length !== 0
    ? [reviews]?.map((singleReview, i) => {
      return singleReview?.reviews.details.map(((resp, i) => {
        return (
          <Fragment key={i}>
            <Divider />
            <CommentCard singleReview={resp} />
          </Fragment>
        );
      }))

    })
    : 'No Review Found';
};

const Review = (props) => {
  const {
    reviews,
    statusHeadingStyle,
    filterHeadingStyle,
    ratingLabelStyle
  } = props;

  const [state, setState] = useState({
    review: false,
    language: false,
  });
  const handleModalOpen = (key) => {
    setState({ ...state, [key]: true });
  };
  const handleModalClose = (key) => {
    setState({ ...state, [key]: false });
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Element name="reviews" className="reviews">
      <ReviewWrapper>
        <HeaderSection>
          <RatingStatus>
            <Heading
              content={`${reviews?.reviews.details.length} Avaliações`}
              {...statusHeadingStyle}
            />
            <Rating rating={reviews?.reviews.overallScore} ratingCount={reviews?.reviews.details.length} ratingTitile type="bulk" />
          </RatingStatus>
          <RatingSearch>
            <Button type="primary" onClick={() => handleModalOpen('review')}>
              Escreva uma Avaliação
            </Button>
            <Modal
              visible={state.review}
              onCancel={() => handleModalClose('review')}
              footer={null}
              width="100%"
              maskStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              wrapClassName="review_modal"
            >
              <ModalTitle>Escreve sua avaliação</ModalTitle>
              <ReviewForm />
            </Modal>
          </RatingSearch>
        </HeaderSection>
        <Row gutter={20}>
          <Col sm={12} lg={9}>
            <Heading content="Atrações" {...filterHeadingStyle} />
            <FilterElement>
              <Text content="Vida Noturna" as="span" {...ratingLabelStyle} />
              <RatingWrapper>
                <Rating rating={reviews?.attractions.details.nightLife} ratingTitile type="bulk" />
              </RatingWrapper>
            </FilterElement>
            {/* End of Filter Element */}

            <FilterElement>
              <Text content="Restaurantes" as="span" {...ratingLabelStyle} />
              <RatingWrapper>
                <Rating rating={reviews?.attractions.details.restaurant} ratingTitile type="bulk" />
              </RatingWrapper>
            </FilterElement>
            {/* End of Filter Element */}

            <FilterElement>
              <Text content="Shopping" as="span" {...ratingLabelStyle} />
              <RatingWrapper>
                <Rating rating={reviews?.attractions.details.shopping} ratingTitile type="bulk" />
              </RatingWrapper>
            </FilterElement>
            {/* End of Filter Element */}

            <FilterElement>
              <Text content="Vegetariano" as="span" {...ratingLabelStyle} />
              <RatingWrapper>
                <Rating rating={reviews?.attractions.details.vegetarian} ratingTitile type="bulk" />
              </RatingWrapper>
            </FilterElement>
            {/* End of Filter Element */}
          </Col>
          <Col sm={12} lg={9}>
            <Heading content="Segurança" {...filterHeadingStyle} />
            <FilterElement>
              <Text content="LGBTQIA+" as="span" {...ratingLabelStyle} />
              <RatingWrapper>
                <Rating rating={reviews?.security.details.lgbtq} ratingTitile type="bulk" />
              </RatingWrapper>
            </FilterElement>
            {/* End of Filter Element */}

            <FilterElement>
              <Text content="Hospital" as="span" {...ratingLabelStyle} />
              <RatingWrapper>
                <Rating rating={reviews?.security.details.medical} ratingTitile type="bulk" />
              </RatingWrapper>
            </FilterElement>
            {/* End of Filter Element */}

            <FilterElement>
              <Text content="Segurança Pública" as="span" {...ratingLabelStyle} />
              <RatingWrapper>
                <Rating rating={reviews?.security.details.lgbtq} ratingTitile type="bulk" />
              </RatingWrapper>
            </FilterElement>
            {/* End of Filter Element */}

            <FilterElement>
              <Text content="Liberdade Política " as="span" {...ratingLabelStyle} />
              <RatingWrapper>
                <Rating rating={reviews?.security.details.politicalFreedom} ratingTitile type="bulk" />
              </RatingWrapper>
            </FilterElement>
            {/* End of Filter Element */}
          </Col>
        </Row>

        <CommentBox reviews={reviews} />
      </ReviewWrapper>
    </Element>
  );
};

Review.propTypes = {
  statusHeadingStyle: PropTypes.object,
  filterHeadingStyle: PropTypes.object,
  ratingLabelStyle: PropTypes.object,
  ratingCountStyle: PropTypes.object,
};

Review.defaultProps = {
  statusHeadingStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    mr: '10px',
  },
  filterHeadingStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: '1.2',
    mb: '0.5em',
  },
  ratingLabelStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#2c2c2c',
    flex: '1',
  },
  ratingCountStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#2c2c2c',
    ml: '8px',
  },
};

export default Review;
