import React, { useState, useContext, useReducer } from 'react';
import moment from 'moment';
import { createBrowserHistory } from 'history';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import { Button, Checkbox } from 'antd';
import DateRangePickerBox from 'components/UI/DatePicker/ReactDates';
import { SearchContext } from 'context/SearchProvider';
import { setStateToUrl } from 'library/helpers/url-handler';
import {
  calenderItem,
  getAmenities
} from '../SearchParams';
import CategroySearchWrapper, {
  TitleGuestWrapper, SubTitleGuestWrapper
} from './CategorySearch.style';

const history = process.browser ? createBrowserHistory() : false;
const location = process.browser && window.location;

function serchReducer(state, action) {
  switch (action.type) {
    case 'amenities':
      return { ...state, amenities: action.payload };
    case 'property':
      return { ...state, property: action.payload };
    case 'date_range':
      return {
        ...state,
        setStartDate: action.payload.setStartDate,
        setEndDate: action.payload.setEndDate,
      };
    case 'price':
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      };
    case 'roomGuestReset':
      return {
        ...state,
        room: action.payload.room,
        guest: action.payload.guest,
      };
    case 'reset':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const CategorySearchNext = (props) => {
  const { state, dispatch } = useContext(SearchContext);
  const initialState = {
    amenities: state.amenities || [],
    property: state.property || [],
    setStartDate: state.setStartDate || null,
    setEndDate: state.setEndDate || null,
    minPrice: parseInt(state.minPrice) || 0,
    maxPrice: parseInt(state.maxPrice) || 100,
    location_lat: state.location_lat || null,
    location_lng: state.location_lng || null,
    room: parseInt(state.room) || 0,
    guest: parseInt(state.guest) || 0,
  };

  // current component state with dispatching to reducer
  const [current, dispatchCurrent] = useReducer(serchReducer, initialState);
  // Room guest state
  const [countRoom, setRoom] = useState(current.room);
  const [countGuest, setGuest] = useState(current.guest);

  // data handling
  const onChange = (value, type) => {
    let query = {};
    let modifiedCurrent = current;

    for (const key in modifiedCurrent) {
      if (modifiedCurrent.hasOwnProperty(key)) {
        switch (key) {
          case 'date_range':
            delete modifiedCurrent.date_range;
            break;
          case 'price':
            delete modifiedCurrent.price;
            break;
        }
      }
    }

    if (type === 'date_range') {
      query = {
        ...current,
        setStartDate: value.setStartDate,
        setEndDate: value.setEndDate,
      };
      dispatchCurrent({ type: type, payload: value });
    } else if (type === 'price') {
      query = {
        ...current,
        minPrice: value ? value[0] : 0,
        maxPrice: value ? value[1] : 100,
      };
      dispatchCurrent({ type: type, payload: query });
    } else if (type === 'reset') {
      setRoom(0);
      setGuest(0);
      query = {
        ...current,
        setStartDate: null,
        setEndDate: null,
        room: 0,
        guest: 0,
        amenities: [],
        property: [],
        minPrice: 0,
        maxPrice: 100,
        location_lat: null,
        location_lng: null,
      };
      dispatchCurrent({ type: type, payload: query });
    } else {
      query = {
        ...current,
        [type]: value,
      };
      dispatchCurrent({ type: type, payload: value });
    }
    const params = setStateToUrl(query);
    dispatch({
      type: 'UPDATE',
      payload: {
        ...current,
        ...query,
      },
    });
    history.push({
      ...location,
      search: params,
    });
  };

  const handleRoomGuestApply = () => {
    const query = {
      ...current,
      room: countRoom,
      guest: countGuest,
    };
    const params = setStateToUrl(query);
    history.push({
      ...location,
      search: params,
    });
  };

  const handleRoomGuestCancel = () => {
    setRoom(0);
    setGuest(0);
    const query = {
      ...current,
      room: 0,
      guest: 0,
    };
    dispatchCurrent({ type: 'roomGuestReset', payload: query });
    const params = setStateToUrl(query);
    history.push({
      ...location,
      search: params,
    });
  };

  const dateRangeActivateClass =
    current &&
      current.setStartDate !== undefined &&
      current.setEndDate !== undefined &&
      current.setStartDate !== null &&
      current.setEndDate !== null
      ? 'activated'
      : '';

  const priceRangeActivateClass =
    current &&
      current.minPrice !== undefined &&
      current.maxPrice !== undefined &&
      current.minPrice === 0 &&
      current.maxPrice === 100
      ? ''
      : 'activated';

  let amenitiesLength = 0;
  let propertyLength = 0;
  let amenities = [];
  let property = [];

  if (current && current.amenities && typeof current.amenities === 'string') {
    amenities = current.amenities.split(',');
    amenitiesLength = amenities.length;
  } else if (current && current.amenities && current.amenities.length) {
    amenities = current.amenities;
    amenitiesLength = amenities.length;
  }

  if (current && current.property && typeof current.property === 'string') {
    property = current.property.split(',');
    propertyLength = property.length;
  } else if (current && current.property && current.property.length) {
    property = current.property;
    propertyLength = current.property.length;
  }

  return (<>
    <TitleGuestWrapper>Nossas recomendações</TitleGuestWrapper>
    <SubTitleGuestWrapper> Dê uma olhada no que te recomendamos:</SubTitleGuestWrapper>
    <CategroySearchWrapper>

      <ViewWithPopup
        className={amenitiesLength ? 'activated' : ''}
        key={getAmenities.id}
        noView={true}
        view={
          <Button type="default">
            {getAmenities.name}
            {amenitiesLength > 0 && `: ${amenitiesLength}`}
          </Button>
        }
        popup={
          <Checkbox.Group
            options={getAmenities.options}
            defaultValue={amenities}
            onChange={(value) => onChange(value, 'amenities')}
          />
        }
      />

      <ViewWithPopup
        className={dateRangeActivateClass}
        key={400}
        noView={true}
        view={<Button type="default">Escolher Data</Button>}
        popup={
          <DateRangePickerBox
            startDateId="startDate-id-category"
            endDateId="endDate-id-category"
            startDate={
              current.setStartDate
                ? moment(current.setStartDate, 'MM-DD-YYYY')
                : null
            }
            endDate={
              current.setEndDate
                ? moment(current.setEndDate, 'MM-DD-YYYY')
                : null
            }
            numberOfMonths={1}
            small={true}
            item={calenderItem}
            updateSearchData={(value) => onChange(value, 'date_range')}
          />
        }
      />

    </CategroySearchWrapper>
  </>
  );
};

export default CategorySearchNext;
