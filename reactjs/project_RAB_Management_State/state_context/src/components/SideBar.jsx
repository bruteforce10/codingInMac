import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items className="h-screen ">
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#">
            <Link to="/">
              <p>Dashboard</p>
            </Link>
          </Sidebar.Item>
          <Sidebar.Item href="#">
            <Link to="/add">
              <p>Add Data</p>
            </Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
