import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Buttonwarning = styled(Button)({
    width: "56px",
    height: "20px",
    boxShadow: "0px 2px 4px #FF3A29",
    textTransform: "none",
    fontSize: "0.5rem",
    padding: "5px 10px",
    border: "0.063rem solid",
    lineHeight: "0.563rem",
    backgroundColor: "#FF3A29",
    borderColor: "#FF3A29",
    borderRadius: "6.25rem",
    fontFamily: ["Gilroy-Light","poppins", "sans-serif"].join(","),
  
    "&:hover": {
      backgroundColor: "#FF3A50",
      borderColor: "#fff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  });

  export default function Buttonwutton() {
    return (
  <Buttonwarning variant="contained" disableRipple>
        High Risk
      </Buttonwarning>
    )
  }