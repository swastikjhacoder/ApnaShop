import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <GridViewOutlinedIcon />,
    },
    {
      name: "Category",
      path: "/category",
      icon: <CategoryOutlinedIcon />,
    },
    {
      name: "Customer",
      path: "/customer",
      icon: <AccountCircleOutlinedIcon />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <Inventory2OutlinedIcon />,
    },
    {
      name: "Vendor",
      path: "/vendor",
      icon: <AccountCircleIcon />,
    },
  ];
  return (
      <div className="sidebar-container">
        <div
          className="sidebar"
          style={{ width: menuOpen ? "max-content" : "50px" }}
        >
          <div className="sidebar-header">
            <h1
              className="logo"
              style={{ display: menuOpen ? "block" : "none" }}
            >
              Dashboard
            </h1>
            <div
              className="bars"
              style={{ marginLeft: menuOpen ? "20px" : "0px" }}
            >
              <HorizontalSplitIcon onClick={() => setMenuOpen(!menuOpen)} />
            </div>
          </div>
          {menuItems.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassname="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  className="link-text"
                  style={{ display: menuOpen ? "block" : "none" }}
                >
                  {item.name}
                </div>
              </NavLink>
            );
          })}
        </div>
        <main>{children}</main>
      </div>
  );
};

export default Sidebar;
