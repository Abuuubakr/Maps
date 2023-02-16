import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../images/icon1.png";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ViewSidebarRoundedIcon from "@mui/icons-material/ViewSidebarRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";


function Layout() {
  const activeLink = "text-[#2D6CCA]";
  const notActiveLink = "text-[#C2CFE0]";
  const style = { marginLeft: "10px", marginRight: "15px" };


  return (
    <div>
      <div className="flex">
        <div className="flex flex-col w-[20%] h-[100vh] sticky shadow-lg justify-between max-[1090px]:hidden">
          <div>
            <div className="flex items-center justify-between shadow-sm h-[73.5px] p-4 text-[#008575]">
              <div  className="flex">
                <img src={logo} alt="logo" className="mx-[10px]" />
                <p className="text-[18px] font-medium">Windyfi</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="text-[29px] pr-4"
                />
              </div>
            </div>
            <div className="mt-[60px] text-start">
              <ul>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : notActiveLink /// A B C D E TOP G Let me free we're a failed society this was planted on me what color is your bugatti?
                  }
                >
                  <li className="p-3 hover:bg-gray-200 flex">
                    <TableChartOutlinedIcon sx={style} />
                    <p>My company</p>
                  </li>
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeLink : notActiveLink
                  }
                >
                  <li className="p-3 hover:bg-gray-200">
                    <AutoAwesomeMosaicOutlinedIcon sx={style} />
                    Projects
                  </li>
                </NavLink>
                <NavLink
                  to="/wtg"
                  className={({ isActive }) =>
                    isActive ? activeLink : notActiveLink
                  }
                >
                  <li className="p-3 hover:bg-gray-200">
                    <ViewAgendaOutlinedIcon sx={style} />
                    WTG Database
                  </li>
                </NavLink>
                <NavLink
                  to="/bop"
                  className={({ isActive }) =>
                    isActive ? activeLink : notActiveLink
                  }
                >
                  <li className="p-3 hover:bg-gray-200">
                    <MoreVertIcon sx={style} />
                    BOP Database
                  </li>
                </NavLink>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    isActive ? activeLink : notActiveLink
                  }
                >
                  <li className="p-3 hover:bg-gray-200">
                    <PersonOutlineOutlinedIcon sx={style} />
                    Project Team
                  </li>
                </NavLink>
              </ul>
              <hr className="h-[2px] bg-[#EBEFF2]" />
            </div>
          </div>
          <div className="text-[#90A0B7] mb-[15px] flex mx-auto">
            <ViewSidebarRoundedIcon />
            <p className="ml-[15px]">Toggle Sidebar</p>
          </div>
        </div>
        <div className="min-[1090px]:w-[80%] w-full">
          <Outlet className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Layout;
