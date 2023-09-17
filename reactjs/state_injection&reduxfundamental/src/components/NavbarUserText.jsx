import { useAppContext } from "../context/app-context";

export default function NavbarUserText() {
  const [state] = useAppContext();

  console.log("Navbar User Text : render");

  return <span>Hi, {state.user.name}!</span>;
}
