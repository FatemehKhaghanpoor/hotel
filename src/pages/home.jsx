
import React, { Fragment } from "react";





import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import HotelReviewCard from "../components/cards";
import HoTEl1 from "../assets/images/8dd0a264-d606-4a07-b732-a36e8bcb5243.webp"
import HOTEL2  from "../assets/images/87997.webp"
import HOTEL3  from "../assets/images/620e4a32-3b39-48e4-b3be-3b2552d90107.webp"
import HOTEL4  from "../assets/images/a7776d1f-abad-434d-8dd2-ee26ca1e8e32.webp"
import HOTEL5  from "../assets/images/68small.jpg"

const Home = () => {
 
  


  

  

  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  return (
    <Fragment>
       <Box sx={{ flexGrow: 1,  mt:10 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Item><HotelReviewCard title={"هتل نگین قشم"}size={700} image={HoTEl1} rate={1}/></Item>
        </Grid>
        <Grid size={6}>
          <Item><HotelReviewCard title={"هتل آسمان کیش"}size={700} image={HOTEL2} rate={2}/></Item>
        </Grid>
        <Grid size={4}>
          <Item><HotelReviewCard title={"هتل پردیسان "}size={380} image={HOTEL3} rate={3}/></Item>
        </Grid>
        <Grid size={4}>
          <Item><HotelReviewCard title={"هتل زاینده رود"} size={600} image={HOTEL4} rate={4}/></Item>
        </Grid>
        <Grid size={4}>
          <Item><HotelReviewCard title={"هتل سی نور مشهد"}size={600} image={HOTEL5} rate={5}/></Item>
        </Grid>
      </Grid>
    </Box>
    </Fragment>
    // <Grid2 container spacing={2} className="w-full">
    //   {loading || !cardList ? (
    //     <div className="w-full h-full flex justify-center items-center">
    //       <CircularProgress size="3rem" />
    //     </div>
    //   ) : (
    //     <>
    //       {cardList?.length !== 0 ? (
    //         <>
    //           {cardList.map((item) => (
    //             <CardComponent info={item} key={item?.id}>
    //               <CardActions>
    //                 <Button
    //                   size="small"
    //                   onClick={(e) => handleShop(e, item)}
    //                   variant="outlined"
    //                   data_id_item={item?.id}
    //                 >
    //                   Shop
    //                 </Button>
    //                 <Button
    //                   size="small"
    //                   onClick={(e) => navigate(`${INFO_RAW_ROUTE}/${item?.id}`)}
    //                   variant="contained"
    //                 >
    //                   More Information
    //                 </Button>
    //               </CardActions>
    //             </CardComponent>
    //           ))}
    //         </>
    //       ) : (
    //         <>empty list !!</>
    //       )}
    //     </>
    //   )}
    // </Grid2>
  );
};

export default Home;
