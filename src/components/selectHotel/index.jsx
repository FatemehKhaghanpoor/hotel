import {
  
  Button,
  Typography,
  FormGroup,
  Divider,
  
  InputLabel,
  NativeSelect,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ReserveForm = ({
  formTitle,
  numberAdultDefaultValue,
  numberChildDefaultValue,
  roomDefaultValue,
  hotelDefaultValue,
 
  handleSubmit,
  register,
  errors,
  loading,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form onSubmit={handleSubmit} className="m-auto w-fit items-center">
      <FormGroup className="flex flex-col gap-3 w-full top-6">
        <div className="flex flex-row gap-2 items-center">
          <Typography variant="h5" className="grow text-center top-6">
            {formTitle}
          </Typography>
        </div>
        <InputLabel id="demo-simple-select-standard-label">
          <p className="font-bold text-lg">هتل </p>
        </InputLabel>
        
        <NativeSelect
          defaultValue={""}
          label="hotel"
          fullWidth
          margin="normal"
          type="hotel"
          {...register("hotel", {
            required: "هتل را انتخاب کنید",
            minLength: {
              value: 3,
              message: "Minimum length is 3 characters",
            },
          })}
        >
          <option value={"عالی قاپو"}>عالی قاپو</option>
          <option value={"آزادی"}>آزادی</option>
          <option value={"ارم"}>ارم</option>
          <option value={"سی نور"}>سی نور</option>
          <option value={"حافظ"}>حافظ</option>
        </NativeSelect>
        {!!errors?.hotel?.type && (
          <small className="text-red-500">{errors?.hotel?.message}</small>
        )}
         <InputLabel id="demo-simple-select-standard-label">
          <p className="font-bold text-lg">اتاق</p>
        </InputLabel>
        <NativeSelect
          label="room"
          type="text"
          fullWidth
          margin="normal"
          defaultValue={roomDefaultValue && roomDefaultValue}
          {...register("room", {
            required: "نوع اتاق را انتخاب کنید",
            minLength: {
              value: 3,
              message: "Minimum length is 3 characters",
            },
          })}
        >
          <option value={"یک تخته"}>یک تخته</option>
          <option value={"دو تخته"}>دو تخته</option>
          <option value={"سوییت"}>سوییت</option>
        </NativeSelect>
        {!!errors?.room?.type && (
          <small className="text-red-500">{errors?.room?.message}</small>
        )}
        <InputLabel id="demo-simple-select-standard-label">
          <p className="font-bold text-lg">تعداد بزرگسال </p>
        </InputLabel>
        <NativeSelect
          label="NumberOfAdult"
          type="text"
          fullWidth
          margin="normal"
          defaultValue={numberAdultDefaultValue && numberAdultDefaultValue}
          {...register("NumberOfAdult", {
            required: "تعداد بزرگسال را وارد کنید",
          })}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </NativeSelect>
        {!!errors?.NumberOfAdult?.type && (
          <small className="text-red-500">
            {errors?.NumberOfAdult?.message}
          </small>
        )}
        <InputLabel id="demo-simple-select-standard-label">
          <p className="font-bold text-lg">تعداد کودک </p>
        </InputLabel>
        <NativeSelect
          label="Number of child"
          type="text"
          fullWidth
          margin="normal"
          defaultValue={numberChildDefaultValue && numberChildDefaultValue}
          {...register("NumberOfChild", {
            required: "تعداد کودکان را وارد کنید",
          })}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </NativeSelect>
        {!!errors?.NumberOfChild?.type && (
          <small className="text-red-500">
            {errors?.NumberOfChild?.message}
          </small>
        )}
        <InputLabel id="demo-simple-select-standard-label">
          <p className="font-bold text-lg">روز ورود</p>
        </InputLabel>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
        />
        <InputLabel id="demo-simple-select-standard-label">
          <p className="font-bold text-lg">روز خروج </p>
        </InputLabel>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          
        >
          {loading ? "loading" : "submit"}
        </Button>
        <Divider />
      </FormGroup>
    </form>
  );
};

export default ReserveForm;
