import NavbarLink from "./NavbarLink";
import NavbarUser from "./NavbarUser";

export default function Navbar() {
  return (
    <nav>
      <NavbarLink>Dashboard</NavbarLink> | <NavbarLink>Products</NavbarLink> |{" "}
      <NavbarLink>
        <NavbarUser />
      </NavbarLink>
    </nav>
  );
}
