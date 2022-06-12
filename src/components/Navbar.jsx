import React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MailIcon from "@mui/icons-material/Mail";
import NotificationIcon from "@mui/icons-material/Notifications";




const Navbar = () => {
    const [open, setOpen] = useState(false)
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    width: "40%",

    backgroundColor: "white",
  }));
  const IconsBar = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "15px",
    alignItems: "center",
    [theme.breakpoints.up("xs")]:{
        display:"flex"
    }

  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "15px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]:{
        display:"flex"
    }
  }));
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }} variant="h6">
          {" "}
          Book{" "}
        </Typography>
        <MenuBookIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search  >
          <InputBase color="text.primary"  backgroundColor={"black"}  placeholder="Search" />{" "}
        </Search>
        <IconsBar sx={{display:{xs:"none", sm:"flex"}}}>
          <Avatar
           onClick={(e)=>setOpen(true)}
            sx={{ width: "40px", height: "40px" }}
            src="https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Badge badgeContent={2} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationIcon />
          </Badge>
        </IconsBar>
        <UserBox onClick={(e)=>setOpen(true)}>
        <Avatar
            sx={{ width: "40px", height: "40px" }}
            src="https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="span">Özgür</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
