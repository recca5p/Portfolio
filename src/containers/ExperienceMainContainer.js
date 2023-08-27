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
import Image from 'next/image';
import { useState } from 'react';

const steps = [
  {
    label: 'Sacombank - Saigon Thuong Tin Commercial Joint Stock Bank',
    description: [
      'Develop and maintain RESTful APIs and microservices using .NET Core and ABP Framework for core banking systems. Implement caching with Redis and messaging with RabbitMQ to improve performance and reliability.',
      'Work collaboratively in an Agile team to complete tasks and features for an integrated banking platform, participating in both front-end and back-end development.',
      'Lead a mobile app development project using React Native to extend core banking capabilities to customers on iOS and Android devices. Manage mobile team members and oversee planning, development, testing, and release of the app.',
      'Consult with business analysts and product owners to understand requirements and translate them into pragmatic software solutions.',
      'Containerize services using Docker and orchestrate deployments using Kubernetes to improve scalability and efficiency.',
      'Implement CI/CD pipelines, infrastructure as code, and automated deployments using Jenkins to streamline delivery processes.',
      'Troubleshoot issues across the full tech stack and continuously deploy improvements to enhance system stability.',
      'Contribute to code reviews, documentation, and knowledge sharing to uphold team standards.',
    ],
    time: 'January 2023 - Present',
    jobType: 'Full-time',
    img: 'https://www.linkpicture.com/q/business1619171978-logo-170x125-01.jpg',
    title: 'Software Engineer',
  },
  {
    label: 'Apollo education and training organization Vietnam',
    description: [
      'Successfully integrated third-party payment systems like Vietcombank and Payoo, ensuring seamless and secure payment processing.',
      'Maintained and supported existing software modules, analyzing business requirements and fixing bugs in legacy code.',
      'Worked closely with product managers and business analysts to understand software requirements and bridge communication gaps between business and technical teams.',
      'Improved software quality and system stability by refactoring old code and implementing best practices for maintainability.',
      'Identified performance bottlenecks and resolved issues to improve overall system speed and scalability.',
      'Was responsible for the maintenance and updates of the company portfolio pages, which were built on the WordPress platform, ensuring optimal functionality and user experience',
    ],
    time: 'June 2022 -  Present',
    jobType: 'Part-time',
    img: 'https://www.linkpicture.com/q/1542106839251-0b3cf8b6-6ace-11e7-bc57-2e995a9a3302-1.jpg',
    title: 'Fullstack Developer',
  },
  {
    label: 'Rozitek - Intelligent Intralogistics Solutions',
    description: [
      'Provided technical leadership, oversaw the planning and structuring of projects to develop a robust Warehouse Management System (WMS) product. Technologies utilized included .NET Core, NextJS, and Postgresql.',
      'Collaborated closely with automation engineers to address complex customer issues outside their scope by leveraging Socket or CronJob functionalities.',
      'Engaged directly with customers to ensure seamless integration of our solutions with their systems, utilizing RESTful APIs or database connections for efficient data exchange',
      'Took charge of server building and configuration, with a focus on deploying projects on CentOS and implementing CI/CD practices to streamline the deployment process.',
      'Facilitated effective coordination and communication with outsourced partners for smooth ERP maintenance and handover. The ERP system was developed using Java, ReactJS, and MySQL.',
      'Was responsible for the maintenance and updates of the company portfolio pages, which were built on the WordPress platform, ensuring optimal functionality and user experience',
    ],
    time: 'June 2022 -  January 2023',
    jobType: 'Full-time',
    img: 'https://www.linkpicture.com/q/Rozitek.jpg',
    title: 'Software Engineer',
  },
  {
    label: 'Apollo education and training organization Vietnam',
    description: [
      'Managed and maintained the system, resolved bugs, implemented UI and backend modifications, and introduced innovative features to enhance capabilities. Demonstrated leadership by mentoring a junior team and fostering collaboration.',
      'Developed robust applications using AngularJS, Angular, ReactJS, and .Net frameworks with a Postgresql database, delivering optimized user experiences.',
      'Spearheaded the implementation of CI/CD pipelines, leveraging industry best practices to streamline the deployment process across different environments such as development, QC, and production. This involved automating build, test, and deployment steps, resulting in faster and more reliable software releases.',
      'Ensured efficient knowledge transfer through comprehensive project documentation.',
      'Managed GitFlow for a small team, enforced branching strategies, and conducted code reviews to minimize conflicts.',
      'Practiced Agile and Scrum methodologies, participated in ceremonies, and contributed to high-quality software delivery.',
    ],
    time: 'December 2021 -  June 2022',
    jobType: 'Full-time',
    img: 'https://www.linkpicture.com/q/1542106839251-0b3cf8b6-6ace-11e7-bc57-2e995a9a3302-1.jpg',
    title: 'Junior Fullstack Developer',
  },
];

export default function ExperienceMainContainer() {
  const [activeStep, setActiveStep] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = function (index) {
    setImageIndex(index);
    setActiveStep(index);
  };

  return (
    <Box>
      <Box className="font-['SVN-Bold'] text-[32px] text-blueTheme-dark">
        <span className="text-blueTheme-dark">#</span>Experiences
      </Box>
      <Box className="text-justify col-span-2 flex justify-center font-['SVN-Bold'] py-[30px] h-fit text-blueTheme-dark">
        <Stepper
          className="w-[90%]"
          activeStep={activeStep}
          orientation="vertical"
          sx={{
            color: '#278EA5',
            '& .MuiStepLabel-label': {
              color: '#278EA5',
              fontFamily: 'SVN, Arial, sans-serif',
              fontStyle: 'oblique',
            },
          }}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                className="font-[SVN-Bold]"
                icon
                onClick={() => handleClick(index)}
              >
                {step.label}
              </StepLabel>
              <Box className="grid grid-cols-3">
                <Box className="col-span-2 w-[80%]">
                  <StepContent className="pl-[5%]">
                    <Typography
                      variant="body2"
                      className="font-[SVN]"
                      sx={{
                        textTransform: 'uppercase',
                        fontSize: 16,
                        color: '#ADC4CE',
                        fontFamily: 'SVN, Arial, sans-serif',
                      }}
                    >
                      {step.time}
                    </Typography>{' '}
                    <Typography
                      variant="h6"
                      className="font-['SVN-Bold']"
                      sx={{
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}
                    >
                      {step.title}
                    </Typography>{' '}
                    <Typography
                      variant="body1"
                      className="font-[SVN]"
                      sx={{
                        fontStyle: 'italic',
                        color: '#ADC4CE',
                        fontFamily: 'SVN, Arial, sans-serif',
                      }}
                    >
                      {step.jobType}
                    </Typography>{' '}
                  </StepContent>
                  <StepContent>
                    <ul className="list-disc pl-[5%]">
                      {step.description.map((item) => (
                        <li key={item}>
                          <Typography className="py-[1%] font-['SVN-Bold']">
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </StepContent>
                </Box>
                {index === activeStep && (
                  <Box className="flex items-center justify-center">
                    <Image
                      src={steps[imageIndex].img}
                      width={900}
                      height={1600}
                      alt={steps[imageIndex].img}
                    />
                  </Box>
                )}
              </Box>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
}
