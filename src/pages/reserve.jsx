import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { v4 as uuidv4 } from "uuid";

import ReserveForm from "../components/selectHotel";
import { reservedApi } from "../constant/api";

import useAxios from "../hooks/useAxios";
import ShowReserve from "../components/showReserve";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";


const steps = [
  {
    label:"",
    description: 1,
  },
  {
    label: "مشاهده رزرو ها",
    description:2
     
  },
  {
    label: "پس از پرداخت رزرو شما قطعی میشود",
    description: 3
  },
];

const Reserved = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [next , setNext]=useState(false)
  const maxSteps = steps.length;

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
        setNext(true)
      })
      .catch(() => {toast.error("لطفا دوباره تلاش کنید")
        setNext(false)
      });
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 ,right:0 }}>
        {steps[activeStep].description === 1 && 
        
        (
          
          <ReserveForm 
            formTitle={"به صفحه رزرو خوش آمدید!"}
            errors={errors}
            handleSubmit={handleSubmit(onSubmit)}
            register={register}
            loading={loading}
          />
        )}
        {steps[activeStep].description ===2 &&
          <div>
            
         {next && <ShowReserve />}
         {!next && <Typography>رزروی وجود ندارد!</Typography>}
        </div>
        }
        {steps[activeStep].description ===3 &&
          <div>
         <Typography>در این سفر برای شما اوقات خوشی را آرزو مندیم</Typography>
        </div>
        }

        
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ top:500, bottom: 0 }}
          >
            صفحه بعد
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{ top:500, bottom: 0 }} >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            صفحه قبل
          </Button>
        }
      />
    </Box>
  );
};

export default Reserved;
