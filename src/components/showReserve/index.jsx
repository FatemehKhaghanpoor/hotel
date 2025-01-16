import {
  Button,
 
  Divider,
 
  
} from "@mui/material";
import React, { Fragment, useState } from "react";



import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import useAxios from "../../hooks/useAxios";

import { reservedApi } from "../../constant/api";

const ShowReserve = () => {
  

  const { startRequest} = useAxios();
  

  const [responseItem, ShowResponseItem] = useState([]);

  const onSubmit = async (formData) => {
    const response = await startRequest({
      url: reservedApi,
    });
    
    
    ShowResponseItem(response);
    console.log(responseItem.length
      
    );
   
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <Fragment>
      <Button variant="contained" color="success" onClick={onSubmit}  >
          نمایش رزرو ها
      </Button>

      
      
      {
        responseItem.map((item) => (
          <Fragment key={item.id}>
             <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          نام هتل {bull}{item.hotel}
        </Typography>
        
       
        <Typography variant="body2">
        نوع اتاق {bull}{item.room}
          <br />
          
        </Typography>
        <Typography variant="body2">
        تعداد بزرگسال{bull}{item.NumberOfAdult}
          <br />
          
        </Typography>
        <Typography variant="body2">
        تعداد کودک{bull}{item.NumberOfChild}
          <br />
          
        </Typography>
      </CardContent>
    
      <Divider/>
    </Card>
            
           
          </Fragment>
        ))
       }
    </Fragment>
  );
};

export default ShowReserve;
