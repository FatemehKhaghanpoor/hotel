import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import {  NavLink } from "react-router";
import { HOME_ROUTE, LOGIN_ROUTE, SIGNIN_ROUTE } from "../../constant/routes";
import { useNavigate } from "react-router";
import ButtonGroup from "@mui/material/ButtonGroup";
import  { dividerClasses } from "@mui/material/Divider";
import { Button, Card } from "@mui/material";

export default function HeaderComponent() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, width: 1 }}>
      <AppBar position="fixed" color="primary" sx={{ bottom: "auto", top: 0 }}>
        <Toolbar className="flex justify-between items-between w-full">
          <NavLink to={HOME_ROUTE}>{"IRAN HOTEL"}</NavLink>

          <Card
            variant="outlined"
            sx={{
              display: "flex",
              color: "text.secondary",
              "& svg": {
                m: 1,
              },
              [`& .${dividerClasses.root}`]: {
                mx: 0.5,
              },
            }}
          >
            {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
          </Card>

          
          <ButtonGroup  color="white" variant="outlined" aria-label="Loading button group" >
      <Button onClick={()=>{navigate(SIGNIN_ROUTE)}}  > <p className="font-bold">ثبت نام </p>  </Button>
      <Button onClick={()=>{navigate(LOGIN_ROUTE)}}> <p className="font-bold"> ورود</p></Button>
     
    </ButtonGroup>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
