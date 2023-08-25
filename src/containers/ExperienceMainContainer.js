import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { BsPersonWorkspace } from 'react-icons/bs';
import { StepConnector } from '@mui/material';

const steps = [
  {
    label: 'Sacombank',
    description: ['text1', 'text2'],
  },
  {
    label: 'Sacombank',
    description: ['text1', 'text2'],
  },
];

export default function ExperienceMainContainer() {
  return (
    <Box class="flex justify-center w-full">
      <Stepper className="w-[50%]" activeStep={-1} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} expanded={true}>
            <StepLabel icon>{step.label}</StepLabel>
            <StepContent></StepContent>
            {step.description.map((item) => {
              <StepContent>Dead</StepContent>;
            })}
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
