
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { v4 as uuidv4 } from "uuid";

import ReserveForm from "../components/selectHotel";
import { reservedApi } from "../constant/api";

import useAxios from "../hooks/useAxios";
import ShowReserve from "../components/showReserve";

import Box from "@mui/material/Box";



import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { useState } from "react";



const Reserved = () => {
  
  const [activeStep, setActiveStep] = useState(0);
  const[activeNext, setActiveNext]=useState(false)
 


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { startRequest, loading } = useAxios();

  const onSubmit = (data) => {
    const randomId = uuidv4();
    const postData = {
      id: randomId,
      hotel: data.hotel,
      room: data.room,
      NumberOfAdult: data.NumberOfAdult,
      NumberOfChild: data.NumberOfChild,
    };

    startRequest({
      method: "POST",
      url: `${reservedApi}`,
      data: postData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        toast.success("رزرو شما با موفقیت انجام شد");
        setActiveNext(true);
      })
      .catch(() => {
        toast.error("لطفا دوباره تلاش کنید");
       
      });
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step key={1}>
          <StepLabel>{"اطلاعات سفر"}</StepLabel>
          <StepContent>
            <ReserveForm
              formTitle={"به صفحه رزرو خوش آمدید!"}
              errors={errors}
              handleSubmit={handleSubmit(onSubmit)}
              register={register}
              loading={loading}
            />

            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
               disabled={!activeNext}
              >بعدی</Button>
              
            </Box>
          </StepContent>
        </Step>
        {/* //------------------ */}

        <Step key={2}>
          
          <StepContent>
            <ShowReserve/>

            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >بعدی</Button>
              <Button
                
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                قبلی
              </Button>
            </Box>
          </StepContent>
        </Step>
        {/* {-------------------} */}
        <Step key={3}>
          <StepLabel>{""}</StepLabel>
          <StepContent>
            <Typography>پس از پرداخت رزرو شما قطعی میشود</Typography>
             <Typography>با تشکر</Typography>
            <Box sx={{ mb: 2 }}>
              
              <Button
                
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                قبلی
              </Button>
            </Box>
          </StepContent>
        </Step>



      </Stepper>
     
    </Box>

    // <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
    //   <Paper
    //     square
    //     elevation={0}
    //     sx={{
    //       display: "flex",
    //       alignItems: "center",
    //       height: 50,
    //       pl: 2,
    //       bgcolor: "background.default",
    //     }}
    //   >
    //     <Typography>{steps[activeStep].label}</Typography>
    //   </Paper>
    //   <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2, right: 0 }}>
    //     {steps[activeStep].description === 1 && (
    //
    //     )}
    //     {steps[activeStep].description === 2 && (
    //       <div>
    //         {next && }
    //         {!next && <Typography>رزروی وجود ندارد!</Typography>}
    //       </div>
    //     )}
    //     {steps[activeStep].description === 3 && (
    //       <div>
    //         <Typography>
    //           در این سفر برای شما اوقات خوشی را آرزو مندیم
    //         </Typography>
    //       </div>
    //     )}
    //   </Box>
    //   <MobileStepper
    //     variant="text"
    //     steps={maxSteps}
    //     position="static"
    //     activeStep={activeStep}
    //     nextButton={
    //       <Button
    //         size="small"
    //         onClick={handleNext}
    //         disabled={activeStep === maxSteps - 1}
    //         sx={{ top: 500, bottom: 0 }}
    //       >
    //         صفحه بعد
    //         {theme.direction === "rtl" ? (
    //           <KeyboardArrowLeft />
    //         ) : (
    //           <KeyboardArrowRight />
    //         )}
    //       </Button>
    //     }
    //     backButton={
    //       <Button
    //         size="small"
    //         onClick={handleBack}
    //         disabled={activeStep === 0}
    //         sx={{ top: 500, bottom: 0 }}
    //       >
    //         {theme.direction === "rtl" ? (
    //           <KeyboardArrowRight />
    //         ) : (
    //           <KeyboardArrowLeft />
    //         )}
    //         صفحه قبل
    //       </Button>
    //     }
    //   />
    // </Box>
  );
};

export default Reserved;
