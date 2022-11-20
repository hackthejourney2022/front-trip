import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Sticky from 'react-stickynode';
import Toolbar from 'components/UI/Toolbar/Toolbar';
import CategorySearch from 'containers/Listing/Search/CategorySearch/CategorySearch';
import SectionGrid from 'components/SectionGrid/SectionGrid';
import { PostPlaceholder } from 'components/UI/ContentLoader/ContentLoader';
import Loader from 'components/Loader/Loader';
import { SearchContext } from 'context/SearchProvider';
import {
  paginator,
  searchedData,
  searchStateKeyCheck,
  processAPIData,
} from 'library/helpers/get-api-data';
import { getDeviceType } from 'library/helpers/get-device-type';
import { SINGLE_POST_PAGE } from 'settings/constant';
import {
  LISTING_PAGE_POST_LIMIT,
  LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP,
} from 'settings/config';
import ListingWrapper, {
  PostsWrapper,
} from 'containers/Listing/Listing.style';

import axios from 'axios';


const FilterDrawer = dynamic(() =>
  import('containers/Listing/Search/MobileSearchView')
);

export default function ListingPage({ processedData, deviceType }) {
  const { state } = useContext(SearchContext);
  const statekey = searchStateKeyCheck(state);
  const [posts, setPosts] = useState(
    processedData.slice(0, LISTING_PAGE_POST_LIMIT) || []
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (statekey === true) {
      const newData = searchedData(processedData);
      setPosts(newData);
    } else {
      setPosts(processedData.slice(0, LISTING_PAGE_POST_LIMIT) || []);
    }
  }, [statekey]);

  useEffect(() => {
    const handleLoadMore = async () => {
      const receviedData = await axios.get('http://18.215.117.48:3000/recommendation/flight?origin=SAO&departureDate=2022-12-20&oneWay=true')
        .then(function (response) {
          // handle success
          setData(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    handleLoadMore()
  }, []);


  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const data = paginator(posts, processedData, LISTING_PAGE_POST_LIMIT);
      setPosts(data);
      setLoading(false);
    }, 1000);
  };

  let columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP;

  let columnCount = 'col-24';

  return (
    <ListingWrapper>
      <Head>
        <title>Lista | Sua lista de viagens</title>
      </Head>

      <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
        <Toolbar
          left={
            deviceType === 'desktop' ? <CategorySearch /> : <FilterDrawer />
          }

        />
      </Sticky>

      {data ? <PostsWrapper className={columnCount}>
        <SectionGrid
          link={SINGLE_POST_PAGE}
          columnWidth={columnWidth}
          deviceType={deviceType}
          data={data}
          totalItem={data?.offers?.length}
          limit={LISTING_PAGE_POST_LIMIT}
          loading={loading}
          handleLoadMore={handleLoadMore}
          placeholder={<PostPlaceholder />}
        />
      </PostsWrapper> : <Loader />}
    </ListingWrapper>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const pageData = [{}];
  const processedData = processAPIData(pageData);
  const deviceType = getDeviceType(req);
  return {
    props: { processedData, deviceType },
  };

}