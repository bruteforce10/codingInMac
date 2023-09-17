import {
  CHANGE_ISLOGIN,
  CHANGE_LOADING,
  CHANGE_USER,
  GET_USER,
} from "../action";

const initialState = {
  isLoading: false,
  isLogin: true,
  user: {},
  getUser: [],
};

const reducerAction = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        getUser: action.payload,
      };
    case CHANGE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CHANGE_ISLOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default reducerAction;
