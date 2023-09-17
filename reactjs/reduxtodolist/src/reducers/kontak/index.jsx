import {
  GET_LIST_KONTAK,
  ADD_KONTAK,
  DELETE_KONTAK,
  DETAIL_KONTAK,
  UPDATE_KONTAK,
} from "../../actions/kontakAction";

const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakError: false,

  addListKontakResult: false,
  addListKontakLoading: false,
  addListKontakError: false,

  deleteListKontakResult: false,
  deleteListKontakLoading: false,
  deleteListKontakError: false,

  detailListKontakResult: false,

  updateListKontakResult: false,
  updateListKontakLoading: false,
  updateListKontakError: false,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK:
      return {
        ...state,
        getListKontakResult: action.payload.data,
        getListKontakLoading: action.payload.loading,
        getListKontakError: action.payload.errorMessage,
      };
    case ADD_KONTAK:
      return {
        ...state,
        addListKontakResult: action.payload.data,
        addListKontakLoading: action.payload.loading,
        addListKontakError: action.payload.errorMessage,
      };
    case DELETE_KONTAK:
      return {
        ...state,
        deleteListKontakResult: action.payload.data,
        deleteListKontakLoading: action.payload.loading,
        deleteListKontakError: action.payload.errorMessage,
      };
    case DETAIL_KONTAK:
      return {
        ...state,
        detailListKontakResult: action.payload.data,
      };
    case UPDATE_KONTAK:
      return {
        ...state,
        updateListKontakResult: action.payload.data,
        updateListKontakLoading: action.payload.loading,
        updateListKontakError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;
