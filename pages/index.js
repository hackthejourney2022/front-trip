import Head from 'next/head';
import SearchArea from 'containers/Home/Search/Search';
import { getDeviceType } from 'library/helpers/get-device-type';
import {
  HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE,
  HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE,
  HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE,
} from 'settings/config';
export default function HomePage({
  deviceType,
}) {
  let limit;

  if (deviceType === 'mobile') {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE;
  }
  if (deviceType === 'tablet') {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE;
  }

  if (deviceType === 'desktop') {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE;
  }
  return (
    <>
      <Head>
        <title>#Partiu | Sua melhor trip em qualquer lugar</title>
      </Head>
      <SearchArea />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const apiUrl = [
    {
      endpoint: 'hotel',
      name: 'luxaryHotelData',
    },
    {
      endpoint: 'top-hotel',
      name: 'topHotelData',
    },
    {
      endpoint: 'location',
      name: 'locationData',
    },
  ];
  const deviceType = getDeviceType(req);

  return {
    props: { deviceType },
  };
}
