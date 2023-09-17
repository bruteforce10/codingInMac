import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteKontak,
  getListKontak,
  detailKontak,
} from "../../actions/kontakAction";

function ListKontak() {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteListKontakResult,
  } = useSelector((state) => state.kontakReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteListKontakResult) {
      dispatch(getListKontak());
    }
  }, [deleteListKontakResult, dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {" "}
              {kontak.title} - {kontak.nohp} -{" "}
              <button onClick={() => dispatch(deleteKontak(kontak.id))}>
                Delete
              </button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => dispatch(detailKontak(kontak))}
              >
                Edit
              </button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListKontak;
