import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

const DetailButton = styled(Button)({
    width: '110px',
    height:'32px',
    boxShadow: '0px 2px 4px #3D5A80',
    textTransform: 'none',
    fontSize: 12,
    border: '1px solid',
    borderRadius: '100px',
    lineHeight: 1.5,
    backgroundColor: '#3D5A80',
    borderColor: '#3D5A80',
    fontFamily: [
    "poppins",
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },

});

export default function DetailsButton() {
  return (
    <Box>
        <DetailButton variant="contained" disableRipple >
            Details
        </DetailButton>
    </Box>
  )
}
