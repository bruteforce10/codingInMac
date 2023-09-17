import axios from "axios";

export const GET_DATA = "GET_DATA";
export const EDIT_VOLUME = "EDIT_VOLUME";
export const DELETE_DATA = "DELETE_DATA";
export const UPDATE_VOLUME = "UPDATE_VOLUME";
export const ADD_DATA = "ADD_DATA";
export const EDIT_DATA = "EDIT_DATA";
export const PUTADD_DATA = "PUTADD_DATA";

export const putAddData = (data) => {
  return (dispatch) => {
    dispatch({
      type: PUTADD_DATA,
      payload: {
        data: false,
      },
    });

    axios.put(`http://localhost:3000/posts/${data.id}`, data).then((res) => {
      dispatch({
        type: PUTADD_DATA,
        payload: {
          data: res.data,
        },
      });
    });
  };
};

export const editData = (id) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_DATA,
      payload: {
        data: false,
      },
    });

    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      dispatch({
        type: EDIT_DATA,
        payload: {
          data: res.data,
        },
      });
    });
  };
};

export const putData = (putData) => {
  return (dispatch) => {
    dispatch({
      type: ADD_DATA,
      payload: {
        data: false,
      },
    });
    axios.post("http://localhost:3000/posts", putData).then((res) => {
      dispatch({
        type: ADD_DATA,
        payload: {
          data: res.data,
        },
      });
    });
  };
};

export const updateVolume = (dataList) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_VOLUME,
      payload: {
        data: false,
      },
    });

    axios
      .put(`http://localhost:3000/posts/${dataList.id}`, dataList)
      .then((res) => {
        dispatch({
          type: UPDATE_VOLUME,
          payload: {
            data: res.data,
          },
        });
      });
  };
};

export const editVolume = (id) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_VOLUME,
      payload: {
        data: false,
      },
    });

    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      dispatch({
        type: EDIT_VOLUME,
        payload: {
          data: res.data,
        },
      });
    });
  };
};

export const deleteData = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_DATA,
      payload: {
        data: false,
      },
    });

    axios.delete(`http://localhost:3000/posts/${id}`).then((res) => {
      dispatch({
        type: DELETE_DATA,
        payload: {
          data: res.data,
        },
      });
    });
  };
};

export const getData = () => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA,
      payload: {
        loading: true,
        data: false,
      },
    });

    axios.get("http://localhost:3000/posts").then((res) => {
      dispatch({
        type: GET_DATA,
        payload: {
          loading: false,
          data: res.data,
        },
      });
    });
  };
};
