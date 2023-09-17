import {
  DELETE_DATA,
  GET_DATA,
  EDIT_VOLUME,
  UPDATE_VOLUME,
  ADD_DATA,
  EDIT_DATA,
  PUTADD_DATA,
} from "../../actions/Actionrab";

const initialState = {
  getLoading: false,
  getDataResult: false,
  deleteDataResult: false,
  editVolumeResult: false,
  updateVolumeResult: false,
  addDataResult: false,
  editDataResult: false,
  putdataResult: false,
};

const reducerAction = (state = initialState, action) => {
  switch (action.type) {
    case PUTADD_DATA:
      return {
        ...state,
        putdataResult: action.payload.data,
      };
    case EDIT_DATA:
      return {
        ...state,
        editDataResult: action.payload.data,
      };
    case ADD_DATA:
      return {
        ...state,
        addDataResult: action.payload.data,
      };
    case UPDATE_VOLUME:
      return {
        ...state,
        updateVolumeResult: action.payload.data,
      };
    case GET_DATA:
      return {
        ...state,
        getLoading: action.payload.loading,
        getDataResult: action.payload.data,
      };
    case DELETE_DATA:
      return {
        ...state,
        deleteDataResult: action.payload.data,
      };
    case EDIT_VOLUME:
      return {
        ...state,
        editVolumeResult: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducerAction;
