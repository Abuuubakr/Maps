import { Avatar, Badge, Popover } from "@mui/material";
import React from "react";
import Drawerr from "./Drawerr";
import profile from "../images/image 3 (1).png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";



function Home() {

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
    <div className="flex justify-between p-2">
      <Drawerr />
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
            sx={{ border: "2px solid #109CF1", zIndex: "1", cursor: "pointer" }}
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
  );
}

export default Home;
