import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Container from 'components/UI/Container/Container';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import { LOGIN_PAGE } from 'settings/constant';
import { Button, Row, Col } from 'antd';


import Link from 'next/link';

import GlideCarousel, {
  GlideSlide,
} from 'components/UI/GlideCarousel/GlideCarousel';
import BannerWrapper, { SearchWrapper } from './Search.style';

const HomeSearch = ({ searchTitleStyle, searchDescriptionStyle }) => {
  return (
    <BannerWrapper>
      <GlideCarousel
        controls={false}
        options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
        bullets={true}
        numberOfBullets={3}
      >
        <>
          <GlideSlide>
            <Image
              src="/images/banner/1.jpg"
              alt="Home banner 1"
              layout="fill"
              objectFit="cover"
            />
          </GlideSlide>
          <GlideSlide>
            <Image
              src="/images/banner/2.jpg"
              alt="Home banner 2"
              layout="fill"
              objectFit="cover"
            />
          </GlideSlide>
          <GlideSlide>
            <Image
              src="/images/banner/3.jpg"
              alt="Home banner 3"
              layout="fill"
              objectFit="cover"
            />
          </GlideSlide>
        </>
      </GlideCarousel>

      <Container>
        <SearchWrapper>
          <Row>
            <Col span={11}></Col>
            <Col span={2}>
              <Link href={LOGIN_PAGE}>
                <a>
                  <Button type="primary" size="large">
                    ENTRAR
                  </Button>
                </a>
              </Link>
            </Col>
            <Col span={11}></Col>
          </Row>
          <Row></Row>
          <Row></Row>
          <Heading
            {...searchTitleStyle}
            content="#Partiu, a melhor experiência do Nomad."
          />
          <Text
            {...searchDescriptionStyle}
            content="Aqui você conhece lugares, pessoas e pratica o bem."
          />
        </SearchWrapper>
      </Container>
    </BannerWrapper>
  );
};

HomeSearch.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

HomeSearch.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px',
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: ['25px', '25px', '18px'],
    mb: '30px',
  },
};

export default HomeSearch;
