import React from "react";
import { useNavigate } from "react-router-dom";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const SidebarHeader = () => {
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <header>
      <div className="profile">
        <h1>Welcome</h1>
      </div>
      <div className="logout">
        <button onClick={logout}>
          <ExitToAppOutlinedIcon />
          Logout
        </button>
      </div>
    </header>
  );
};

export default SidebarHeader;
