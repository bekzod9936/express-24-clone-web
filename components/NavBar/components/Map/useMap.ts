import { useCallback, useReducer } from 'react';
import { reducerMap, initialState } from './reducer';

const useMap = () => {
  const [
    { regions, focus, search, yandexRef, searchList, defaultToshkentAddress },
    dispatchReducer,
  ] = useReducer(reducerMap, initialState);

  const handleFocus = () => {
    dispatchReducer({ type: 'setFocus', payload: !focus });
  };

  const handlePlaceMark = useCallback(
    (e: any) => {
      const coords = e?.originalEvent?.newCenter;
      yandexRef?.setCenter(coords);
    },
    [yandexRef]
  );

  const handleRef = useCallback((ref: any) => {
    dispatchReducer({ type: 'setYandexRef', payload: ref });
  }, []);

  const handleSearchChage = (e: any) => {
    fetchYandexAddressSearch(e.target.value);
    dispatchReducer({ type: 'setSearch', payload: e.target.value });
  };

  const fetchYandexAddressSearch = (name: any) => {
    fetch(
      `https://geocode-maps.yandex.ru/1.x?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru-RU&format=json&geocode=${name}`
    )
      .then((response) => response.json())
      .then((data: any) => {
        dispatchReducer({
          type: 'setSearchList',
          payload: data?.response?.GeoObjectCollection?.featureMember,
        });
      });
  };

  return {
    focus,
    search,
    regions,
    handleRef,
    searchList,
    handleFocus,
    handlePlaceMark,
    handleSearchChage,
    defaultToshkentAddress,
  };
};

export default useMap;
