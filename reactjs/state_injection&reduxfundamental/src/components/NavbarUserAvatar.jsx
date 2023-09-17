import { useAppContext } from "../context/app-context";

export default function NavbarUserAvatar() {
  const [state] = useAppContext();

  console.log("Navbar User Avatar : render");

  return <img src={state.user.avatar} alt="avatar" width="50" />;
}
