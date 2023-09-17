import { useAppContext } from "../context/app-context";

const Setting = () => {
  const [state, dispatch] = useAppContext();

  console.log("Setting : render");

  return (
    <input
      type="text"
      placeholder="Change Name"
      onChange={(e) =>
        dispatch({
          type: "updateUser",
          payload: { ...state.user, name: e.target.value },
        })
      }
      value={state.user.name ?? ""}
    />
  );
};

export default Setting;
