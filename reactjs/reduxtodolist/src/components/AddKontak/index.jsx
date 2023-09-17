import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addKontak,
  getListKontak,
  updateKontak,
} from "../../actions/kontakAction";

const AddKontak = () => {
  const [title, setTitle] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const {
    addListKontakResult,
    detailListKontakResult,
    updateListKontakResult,
  } = useSelector((state) => state.kontakReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(updateKontak({ title, nohp, id }));
    } else {
      dispatch(addKontak({ title, nohp }));
    }
  };

  useEffect(() => {
    dispatch(getListKontak());
    setTitle("");
    setNohp("");
    setId("");
  }, [addListKontakResult, updateListKontakResult, dispatch]);

  useEffect(() => {
    if (detailListKontakResult) {
      setTitle(detailListKontakResult.title);
      setNohp(detailListKontakResult.nohp);
      setId(detailListKontakResult.id);
    }
  }, [detailListKontakResult, dispatch]);

  return (
    <div>
      <h4>{id ? "Edit Kontak" : "Tambah Kontak"}</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="title"
          placeholder="Title Anda ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="nohp"
          placeholder="Handphone Anda ..."
          value={nohp}
          onChange={(e) => setNohp(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddKontak;
