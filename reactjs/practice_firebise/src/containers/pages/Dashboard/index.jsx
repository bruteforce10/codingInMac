import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataToAPI,
  deleteDataAPI,
  getDataFromAPI,
  updateDataAPI,
} from "../../../config/redux/action";

const Dashboard = () => {
  const { getUser } = useSelector((state) => state.reducerAction);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
    content: "",
    date: "",
    textButton: "SIMPAN",
    id: "",
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    dispatch(getDataFromAPI(userData.uid));
  }, []);

  console.log(getUser);

  const handleSaveNotes = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData"));
    const data = {
      title: state.title,
      content: state.content,
      date: new Date().getTime(),
      id: state.id,
      userId: userData.uid,
    };
    console.log(data);
    if (state.textButton === "SIMPAN") {
      dispatch(addDataToAPI(data));
    } else {
      dispatch(updateDataAPI(data));
    }
    setState({
      title: "",
      content: "",
      date: "",
      textButton: "SIMPAN",
    });
  };

  const onChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const updateNotes = (data) => {
    setState({
      title: data.data.title,
      content: data.data.content,
      date: data.data.date,
      id: data.id,
      textButton: "UPDATE",
    });
  };

  const cancelUpdate = () => {
    setState({
      title: "",
      content: "",
      date: "",
      textButton: "SIMPAN",
    });
  };

  const deleteNote = (e, data) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const dataDelete = {
      id: data.id,
      userId: userData.uid,
    };
    dispatch(deleteDataAPI(dataDelete));
    e.stopPropagation();
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSaveNotes} className="input-form">
          <input
            type="text"
            name="title"
            className="input-title"
            placeholder="title"
            value={state.title}
            onChange={onChangeState}
          />
          <textarea
            className="input-content"
            name="content"
            placeholder="content"
            value={state.content}
            onChange={onChangeState}
          />
          <div className="action-wrapper">
            {state.textButton === "UPDATE" && (
              <button className="save-btn cancel" onClick={cancelUpdate}>
                CANCEL
              </button>
            )}

            <button className="save-btn" type="submit">
              {state.textButton}
            </button>
          </div>
        </form>
      </div>
      <hr />
      {getUser &&
        getUser.map((data) => (
          <div
            className="card-content"
            key={data.id}
            onClick={() => updateNotes(data)}
          >
            <p className="title">{data.data.title}</p>
            <p className="date">{data.data.date}</p>
            <p className="content">{data.data.content}</p>
            <div className="delete-btn" onClick={(e) => deleteNote(e, data)}>
              X
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
