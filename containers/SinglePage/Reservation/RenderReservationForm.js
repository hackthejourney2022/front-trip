import React, { useState } from 'react';
import { Button } from 'antd';
import HtmlLabel from 'components/UI/HtmlLabel/HtmlLabel';
import Link from 'next/link';
import Rating from 'components/UI/Rating/Rating';
import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
  TextCut
} from './Reservation.style.js';

const RenderReservationForm = ({ values }) => {

  return (
    <ReservationFormWrapper className="form-container">
      <FieldWrapper>
        <TextCut>
          {values?.description}
        </TextCut>
      </FieldWrapper>
      <FieldWrapper>
        <HtmlLabel htmlFor="guests" content="Avaliação" />
        <Rating rating={values?.score} ratingCount={values?.score.length} ratingTitile type="bulk" />
      </FieldWrapper>
      <FormActionArea>
        <Link href={values?.link} rel="noopener noreferrer">
          <a target="_blank">
            <Button type="primary">
              Conhecer Mais
            </Button>
          </a>
        </Link >

      </FormActionArea>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
