'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));



export default function CustomTooltip({txt, children}) {
  return (
    
   <div >
      <BootstrapTooltip placement="top" title={txt}>
        <div className=' cursor-pointer'>{children}</div>
      </BootstrapTooltip>
   </div>   
      
    
  );
}
