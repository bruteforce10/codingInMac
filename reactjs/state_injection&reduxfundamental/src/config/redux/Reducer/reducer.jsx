const initialState = {
  nilai: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TAMBAH":
      return {
        ...state,
        nilai: state.nilai + 1,
      };
    case "KURANG":
      return {
        ...state,
        nilai: state.nilai === 0 ? state.nilai - 0 : state.nilai - 1,
      };
    default:
      return state;
  }
};

export default reducer;
