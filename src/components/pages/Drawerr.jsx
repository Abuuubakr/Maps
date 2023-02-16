import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/icon1.png";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ViewSidebarRoundedIcon from "@mui/icons-material/ViewSidebarRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled, useTheme } from "@mui/material/styles";
import { Divider, Drawer, IconButton } from "@mui/material";



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Drawerr() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const activeLink = "text-[#2D6CCA]";
  const notActiveLink = "text-[#C2CFE0]";
  const style = { marginLeft: "10px", marginRight: "15px" };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="min-[1090px]:hidden h-[89.19px] flex items-center shadow-sm">
        <FontAwesomeIcon
          icon={faEllipsis}
          onClick={handleDrawerOpen}
          className="text-[29px] text-[#008575]  py-4 px-6"
        />
      </div>
      {/* Drawer */}
      <Drawer
        sx={{
          width: 2,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            height: "102.79px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="flex">
            <img src={logo} alt="logo" className="mx-[10px]" />
            <p className="text-[18px] font-medium">Windyfi</p>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon sx={{ color: "#008575" }} />
            ) : (
              <ChevronRightIcon sx={{ color: "#008575" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="flex flex-col justify-between h-full">
          <div className="mt-[60px] text-start">
            <ul>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : notActiveLink
                }
              >
                <li className="p-4 hover:bg-gray-200 flex">
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
                <li className="p-4 hover:bg-gray-200">
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
                <li className="p-4 hover:bg-gray-200">
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
                <li className="p-4 hover:bg-gray-200">
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
                <li className="p-4 hover:bg-gray-200">
                  <PersonOutlineOutlinedIcon sx={style} />
                  Project Team
                </li>
              </NavLink>
            </ul>
            <hr className="h-[2px] bg-[#EBEFF2]" />
          </div>
          <div className="text-[#90A0B7] mb-[15px] flex mx-auto">
            <ViewSidebarRoundedIcon />
            <p className="ml-[15px]">Toggle Sidebar</p>
          </div>
        </div>
      </Drawer>
      {/* Drawer */}
    </div>
  );
}

export default Drawerr;
