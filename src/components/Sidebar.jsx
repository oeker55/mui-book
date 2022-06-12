import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import React from "react";
import ModeNight from "@mui/icons-material/ModeNight";

const Sidebar = ({mode,setMode}) => {
  return (
    <Box
      flex={1}
      sx={{ display: { xs: "none", sm: "block" }, }}
      p={1}
    
    ><Box position={"fixed"}>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
         <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      
      
        <ListItem disablePadding>
          <ListItemButton component="a" href="#pages">
            <ListItemIcon>
         <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
     
      
        <ListItem disablePadding>
          <ListItemButton component="a" href="#groups">
            <ListItemIcon>
         <GroupsIcon/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
   
     
        <ListItem disablePadding>
          <ListItemButton component="a" href="#friends">
            <ListItemIcon>
         <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
  
   
        <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
         <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
     
 
        <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
         <ModeNight/>
            </ListItemIcon> 

            <Switch  defaultChecked size="small" onChange={(e)=>setMode(mode === "light" ? "dark" : "light" )} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </Box>
  );
};

export default Sidebar;
