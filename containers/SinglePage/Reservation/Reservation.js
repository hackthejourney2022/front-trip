import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from 'components/UI/Card/Card';
import Heading from 'components/UI/Heading/Heading';
import RenderReservationForm from './RenderReservationForm';

const CardHeader = ({ priceStyle, values }) => {
  return (
    <Fragment>
      <Heading
        content={
          <Fragment>
            {values.name}
          </Fragment>
        }
        {...priceStyle}
      />
    </Fragment>
  );
};

export default function Reservation({ data }) {
  return (
    data?.scores.volunteering.details.map((resp, i) => {
      return <> <Card
        key={i}
        className="reservation_sidebar"
        header={<CardHeader values={resp} />}
        content={<RenderReservationForm values={resp} />}
      />
        <br />
      </>
    })
  );
}

CardHeader.propTypes = {
  priceStyle: PropTypes.object,
  pricePeriodStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

CardHeader.defaultProps = {
  priceStyle: {
    color: '#2C2C2C',
    fontSize: '25px',
    fontWeight: '700',
  },
  pricePeriodStyle: {
    fontSize: '15px',
    fontWeight: '400',
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489',
  },
};
