import React, { useState } from "react";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar, Badge, Popover } from "@mui/material";
import profile from "../images/image 3 (1).png";
import MapComponent from "./MapComponent";
import Drawerr from "./Drawerr";
import Search from "./Search";

function Projects(x) {
  // const center = [55.702868, 37.530865];
  // const map = useMap()
  const [position, setPosition] = useState(null)
  const [search, setSearch] = React.useState(false);
  // console.log(submit);

  console.log(position);


  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;




  return (
    <div>
      <div className="flex min-[1090px]:p-3 shadow-sm full justify-between">
        {search && (
          <div className="w-full absolute h-[73.5px] z-10 bg-white">
            <div className="flex mt-[35px]">
              <div className="ml-[10px]">
                <FontAwesomeIcon
                  className="text-[#C2CFE0] pl-2"
                  icon={faMagnifyingGlass}
                />
              </div>
              <Search position={position} setPosition={setPosition}/>
              <div className="mx-[20px]">
                <FontAwesomeIcon
                  className="text-[#C2CFE0] pl-2"
                  onClick={() => {
                    setSearch(!search);
                  }}
                  icon={faX}
                />
              </div>
            </div>
          </div>
        )}
        <div className="flex w-[80%]">
          <div className="min-[1090px]:hidden">
            <Drawerr />
          </div>
          <div className="flex items-center w-[60%]">
            <div className="min-[650px]:hidden">
              <FontAwesomeIcon
                className="text-[#C2CFE0] pl-2"
                icon={faMagnifyingGlass}
                onClick={() => {
                  setSearch(!search);
                }}
              />
            </div>
            <div className="flex w-full max-[650px]:hidden">
              <div>
                <FontAwesomeIcon
                  className="text-[#C2CFE0] pl-2"
                  icon={faMagnifyingGlass}
                />
              </div>
                <div className="w-full">
                  <Search position={position} setPosition={setPosition}/>
                </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="max-[480px]:hidden">
            <Avatar
              alt="Doriyush Ubaydi"
              src={profile}
              sx={{ border: "1px solid white", marginX: "10px", zIndex: "-1" }}
            />
          </div>
          <div>
            <Avatar
              alt="Doriyush Ubaydi"
              src={profile}
              sx={{ border: "2px solid #109CF1", zIndex: "1", cursor : "pointer" }}
              onClick={handleClick}
            />
          </div>
          <div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <p className="text-[16px] p-2">Doriyush Ubaydi</p>
              <p className="text-[#90A0B7] text-[13px] p-2 pt-0">
                Project Manager
              </p>
            </Popover>
          </div>
          <div className="text-start mx-[15px] w-[150px]  max-[1011px]:hidden">
            <p className="text-[16px]">Doriyush Ubaydi</p>
            <p className="text-[#90A0B7] text-[13px]">Project Manager</p>
          </div>
          <div className="cursor-pointer p-3">
            <Badge color="error" variant="dot" sx={{ zIndex: "-1" }}>
              <NotificationsNoneOutlinedIcon sx={{ color: "#90A0B7" }} />
            </Badge>
          </div>
        </div>
      </div>
      <div className="text-[10px]">
        <MapComponent position={position}/>
      </div>
    </div>
  );
}

export default Projects;
