interface initialProps {
  focus: boolean;
  search: string;
  yandexRef: any;
  searchList: any[];
  regions: { value: any; label: string }[];
  defaultToshkentAddress: number[];
}

export const initialState: initialProps = {
  focus: false,
  search: '',
  yandexRef: null,
  searchList: [],
  defaultToshkentAddress: [41.32847446609404, 69.24298268717716],
  regions: [
    { value: 1, label: 'Ташкент' },
    { value: 2, label: 'Фергана' },
    { value: 3, label: 'Самарканд' },
    { value: 4, label: 'Бухара' },
    { value: 5, label: 'Джизак' },
    { value: 6, label: 'Сурхондаре' },
    { value: 7, label: 'Наманган' },
    { value: 8, label: 'Сирдарё' },
    { value: 9, label: 'Андижан' },
    { value: 10, label: 'Хорезм' },
    { value: 11, label: 'Кашкадарья' },
    { value: 12, label: 'Каракалпакстан' },
    { value: 13, label: 'Навои' },
    { value: 14, label: 'Коканд' },
  ],
};

export const reducerMap = (state: any, action: any) => {
  switch (action.type) {
    case 'setYandexRef':
      return { ...state, yandexRef: action.payload };
    case 'setSearch':
      return { ...state, search: action.payload };
    case 'setSearchList':
      return { ...state, searchList: action.payload };
    case 'setFocus':
      return { ...state, focus: action.payload };

    default:
      return state;
  }
};
