import "./App.css";
// import AppStateManagementInjection from "./AppStateManagementInjection";
import { useDispatch, useSelector } from "react-redux";
import { tambah, kurang } from "./config/redux/Action/action";

function App() {
  const tampilanData = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>{tampilanData.nilai}</div>
      <button onClick={() => dispatch(tambah())}>Tambah</button>
      <button onClick={() => dispatch(kurang())}>Kurang</button>
      {/* <AppStateManagementInjection /> */}
    </div>
  );
}

export default App;
