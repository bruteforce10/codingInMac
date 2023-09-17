import { useContext, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  data: [],
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload,
        loading: true,
      };
    case "DELETE_DATA":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    case "POST_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isVolume, setVolume] = useState(true);
  const [VolumeData, setVolumeData] = useState("");
  const [id, setId] = useState("");
  const [isUpdate, setUpdate] = useState(false);

  const getData = () => {
    axios.get("http://localhost:3000/posts").then((res) => {
      dispatch({
        type: "GET_DATA",
        payload: res.data,
      });
      console.log(res.data);
    });
  };

  const deleteData = (id) => {
    setId(id);
    axios.delete(`http://localhost:3000/posts/${id}`).then((res) => {
      setUpdate(!isUpdate);
      dispatch({
        type: "DELETE_DATA",
        payload: res.data,
      });
    });
  };

  const handleVolume = (id) => {
    setId(id);
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      setVolumeData(res.data);
    });
    setVolume(!isVolume);
  };

  const handleEditVolume = () => {
    if (id) {
      axios
        .put(`http://localhost:3000/posts/${id}`, {
          ...VolumeData,
          volume: VolumeData.volume,
        })
        .then((res) => {
          setVolume(!isVolume);
          setUpdate(!isUpdate);
          console.log(res);
        });
    }
  };

  const navigate = useNavigate();

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      setInputData({
        volume: res.data.volume,
        name: res.data.name,
        price: res.data.price,
      });
    });
  };

  const [inputData, setInputData] = useState({
    volume: 1,
  });

  const handleChange = (e) => {
    return setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === "") {
      axios.post("http://localhost:3000/posts", inputData).then((res) => {
        dispatch({
          type: "POST_DATA",
          payload: res.data,
        });
        navigate("/");
      });
      setInputData({
        volume: 1,
        name: "",
        price: "",
      });
    } else {
      axios.put(`http://localhost:3000/posts/${id}`, inputData).then((res) => {
        dispatch({
          type: "POST_DATA",
          payload: res.data,
        });
        navigate("/");
      });
    }
  };

  const { data, loading } = state;
  const contextValue = {
    getData,
    data,
    loading,
    dispatch,
    VolumeData,
    setVolumeData,
    isVolume,
    setVolume,
    id,
    setId,
    handleVolume,
    handleEditVolume,
    isUpdate,
    deleteData,
    handleEdit,
    handleChange,
    handleSubmit,
    inputData,
    setInputData,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
