import {
  Button,
 
  Divider,
 
  
} from "@mui/material";
import React, { Fragment, useState } from "react";


import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import useAxios from "../../hooks/useAxios";

import { reservedApi } from "../../constant/api";

const ShowReserve = () => {
  

  const { startRequest} = useAxios();
  
 
  const [responseItem, ShowResponseItem] = useState([]);

  const onSubmit = async (formData) => {
    const response = await startRequest({
      url: reservedApi,
    });

    console.log(responseItem);
    ShowResponseItem(response);
    
  };

  return (
    <Fragment>
      <Button variant="contained" color="success" onClick={onSubmit}  >
          نمایش رزرو ها
      </Button>
   
      
      
      {
        responseItem.map((item) => (
          <Fragment key={item.id}>
            
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="نام هتل" secondary={item.hotel} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="نوع اتاق" secondary={item.room} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="تعداد بزرگسال" secondary={item.NumberOfAdult} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="تعداد کودکان" secondary={item.NumberOfChild} />
              </ListItem>
            </List>

            <Divider />
          </Fragment>
        ))
       }
    </Fragment>
  );
};

export default ShowReserve;
