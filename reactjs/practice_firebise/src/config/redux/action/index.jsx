import {
  getDatabase,
  push,
  ref,
  onValue,
  set,
  remove,
} from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const CHANGE_LOADING = "CHANGE_LOADING";
export const CHANGE_ISLOGIN = "CHANGE_ISLOGIN";
export const CHANGE_USER = "CHANGE_USER";
export const GET_USER = "GET_USER";

export const deleteDataAPI = (data) => (dispatch) => {
  const db = getDatabase();
  new Promise((resolve, reject) => {
    remove(ref(db, `notes/${data.userId}/${data.id}`))
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        resolve(false);
      });
  });
};

export const updateDataAPI = (data) => (dispatch) => {
  const db = getDatabase();
  new Promise((resolve, reject) => {
    set(ref(db, `notes/${data.userId}/${data.id}`), {
      title: data.title,
      date: data.date,
      content: data.content,
    })
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        resolve(false);
      });
  });
};

export const getDataFromAPI = (userId) => (dispatch) => {
  const db = getDatabase();
  const starCountRef = ref(db, "notes/" + userId);
  return new Promise((resolve, reject) => {
    onValue(starCountRef, (snapshot) => {
      const data = [];
      const value = Object.keys(snapshot.val());
      value.map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });

      dispatch({
        type: GET_USER,
        payload: data,
      });
      resolve(data);
    });
  });
};

export const addDataToAPI = (data) => (dispatch) => {
  const db = getDatabase();
  push(ref(db, "notes/" + data.userId), {
    title: data.title,
    content: data.content,
    date: data.date,
  });
};

export const registerUserAPI = (data) => {
  return (dispatch) => {
    const auth = getAuth();
    dispatch({
      type: CHANGE_LOADING,
      payload: true,
    });

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch({
          type: CHANGE_LOADING,
          payload: false,
        });
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
};

export const loginUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    dispatch({
      type: CHANGE_LOADING,
      payload: true,
    });

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        const user = res.user;
        const dataUser = {
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified,
          refreshToken: user.refreshToken,
        };
        console.log(dataUser);
        dispatch({
          type: CHANGE_LOADING,
          payload: false,
        });
        dispatch({
          type: CHANGE_ISLOGIN,
          payload: true,
        });
        dispatch({
          type: CHANGE_USER,
          payload: dataUser,
        });
        resolve(dataUser);
      })
      .catch((error) => {
        dispatch({
          type: CHANGE_ISLOGIN,
          payload: false,
        });
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(false);
      });
  });
};
