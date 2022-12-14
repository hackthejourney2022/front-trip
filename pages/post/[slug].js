import { useState, useEffect } from 'react';
import Head from 'next/head';
import isEmpty from 'lodash/isEmpty';
import Sticky from 'react-stickynode';
import { Row, Col, Modal, Button } from 'antd';
import Container from 'components/UI/Container/Container';
import Loader from 'components/Loader/Loader';
import { getDeviceType } from 'library/helpers/get-device-type';
import { getAPIData, processAPIData } from 'library/helpers/get-api-data';
import Description from 'containers/SinglePage/Description/Description';
import Location from 'containers/SinglePage/Location/Location';
import Review from 'containers/SinglePage/Review/Review';
import Reservation from 'containers/SinglePage/Reservation/Reservation';
import BottomReservation from 'containers/SinglePage/Reservation/BottomReservation';
import TopBar from 'containers/SinglePage/TopBar/TopBar';
import Card from 'components/UI/Card/Card';
import moment from 'moment';
import { FaTimesCircle, FaExclamationTriangle, FaFileContract, FaFileAlt } from 'react-icons/fa';
import SinglePageWrapper, {
  HTitle,
} from 'containers/SinglePage/SinglePageView.style';
import PostImageGallery from 'containers/SinglePage/ImageGallery/ImageGallery';
import Link from 'next/link';
import axios from 'axios';

export default function SinglePostPage({ deviceType, query }) {
  const [href, setHref] = useState('');
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [data, setData] = useState();
  const [flights, setFlights] = useState();
  const {
    rating,
    ratingCount,
    price,
    title,
    gallery,
    author,
  } = processedData[0];
  const pageTitle =
    query.slug.split('-').join(' ').charAt(0).toUpperCase() +
    query.slug.split('-').join(' ').slice(1);

  useEffect(() => {
    const path = window.location.href;
    setHref(path);
  }, [setHref]);

  useEffect(() => {
    if (window && typeof localStorage !== 'undefined') {
      const retrievedObject = localStorage.getItem('data');
      const dataParse = JSON.parse(retrievedObject);
      setData(dataParse)
      const payload = {
        originLocationCode: "SAO",
        destinationLocationCode: dataParse?.to,
        departureDate: dataParse?.departureDate,
        returnDate: dataParse?.returnDate,
        adults: 1
      }
      getFlights(payload)
    }
  }, []);




  const getFlights = async (payload) => {
    const receviedData = await axios.post('http://18.215.117.48:3000/shopping/summary-flights', payload)
      .then(function (response) {
        // handle success
        setFlights(response.data)
      })
      .catch(function (error) {
        //  handle error
        console.log(error);
      })
      .finally(function () {
        //  always executed
      });
  }


  if (isEmpty(data)) return <Loader />;
  return (

    <>
      <Head>
        <title>{pageTitle} | #Partiu</title>
      </Head>
      <SinglePageWrapper>
        <TopBar title={title} shareURL={href} author={author} media={gallery} />
        <Container>
          <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
            <Col xl={16}>
              <Description
                content={data?.description}
                title={data?.to}
                location={data?.destination}
                rating={data?.scores.reviews.overallScore
                }
                ratingCount={data?.scores.reviews.details.length}
              />

              <Row gutter={30}>
                <HTitle>Op????es de Voo:</HTitle>
                {flights ?
                  <Col xl={24}>
                    {flights?.map((resp, index) => {
                      return <Card key={index}>
                        <Row>
                          <Col xl={6}>De: {resp.itinerary.from} Para: {resp.itinerary.to}</Col>
                          <Col xl={6}>Pre??o: R$ {resp.price}</Col>
                          <Col xl={6}>Cia: {resp.airline}</Col>
                          <Col xl={6}>
                            <span>Ida: {moment(resp.itinerary.departureDate).format(
                              "DD/MM/YYYY"
                            )}</span>
                            <br />
                            <span>Volta: {moment(resp.itinerary.returnDate).format(
                              "DD/MM/YYYY"
                            )}</span>  </Col>
                        </Row>
                        <Button type="primary" size="large">
                          Comprar
                        </Button>
                      </Card>
                    })}

                  </Col> : <Loader />}
              </Row>

              <Location location={processedData[0]} />
              <Row>
                <Col xl={12}>
                  <Card>
                    <Card title='Restri????es' header={<span><FaExclamationTriangle /> Restri????es</span>} children={<p>Restri????es de entrada no pa??s.<Link href={'#'}> Veja mais</Link></p>}></Card>
                    <Card title='Documentos de Sa??de' header={<span><FaFileContract /> Documentos de Sa??de</span>} children={<p>Declara????es e formul??rios de sa??de obrigat??rios.  <Link href={'#'}>Veja mais</Link></p>}></Card>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card>
                    <Card title='Teste de COVID' header={<span><FaFileAlt /> Teste de COVID</span>} children={<p>Apresenta????o de teste de COVID-19 obrigat??ria no desemparque. <Link href={'#'}>Veja mais</Link></p>}></Card>
                    <Card title='Politica de Quarentena' header={<span><FaTimesCircle /> Politica de Quarentena</span>} children={<p>Obrigat??rio a quarentena de 14 dias. <Link href={'#'}>Veja mais</Link></p>}></Card>
                  </Card>
                </Col>
              </Row>

            </Col>
            <Col xl={8}>
              <Sticky
                innerZ={999}
                activeClass="isSticky"
                top={202}
                bottomBoundary="#reviewSection"
              >

                <HTitle>Visite e apoie uma ONG local:</HTitle>
                <Reservation data={data} />
              </Sticky>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col xl={16}>
              <Review
                reviews={data?.scores}
                ratingCount={data?.scores.reviews.details.length}
                rating={data?.scores.reviews.overallScore}
              />
            </Col>
            <Col xl={8} />
          </Row>
        </Container>
      </SinglePageWrapper >

      <Modal
        visible={isModalShowing}
        onCancel={() => setIsModalShowing(false)}
        footer={null}
        width="100%"
        maskStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
        wrapClassName="image_gallery_modal"
        closable={false}
      >
        <>
          <PostImageGallery />
          <Button
            onClick={() => setIsModalShowing(false)}
            className="image_gallery_close"
          >
            <svg width="16.004" height="16" viewBox="0 0 16.004 16">
              <path
                id="_ionicons_svg_ios-close_2_"
                d="M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z"
                transform="translate(-160.5 -160.55)"
                fill="#909090"
              />
            </svg>
          </Button>
        </>
      </Modal>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;
  const apiUrl = [
    {
      endpoint: 'hotel-single',
      name: 'hotelSingleData',
    },
  ];
  const pageData = await getAPIData(apiUrl);
  const processedData = processAPIData(pageData);
  const deviceType = getDeviceType(req);
  return {
    props: { query, processedData, deviceType },
  };
}

const processedData = [
  {
    "id": 65362,
    "agentId": 2125,
    "title": "Awesome Cotton Chicken",
    "slug": "reiciendis-consequatur-dolore",
    "content": "In South Williamsburg only a few blocks inland from the East River, Marlo &Sons is a rustic respite with nice wine, good cocktails, and excellent snacking fare such as oysters, local cheese, and potato tortilla. But there????????s more: seasonal salads and soups, the famous brick chicken, a dimly lit space outfitted in various types of wood(this is an Andrew Tarlow restaurant, after all). In many ways.",
    "status": "draft",
    "price": "253.00",
    "isNegotiable": true,
    "propertyType": "Hotel",
    "condition": "Excellent",
    "rating": 5,
    "ratingCount": 35,
    "contactNumber": "1-403-000-9038 x910",
  }
]