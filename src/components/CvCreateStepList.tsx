
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormCsvDetailsCreate from './CvCreateDetailsForm';
import FormCsvLanguageCreate from './CvCreateLanguageForm';
import FormCsvLogoCreate from './CvCreateLogoForm';
import { useHistory } from "react-router-dom";
import { WizardContext } from '../contexts/WizardContext';
import { useContext } from 'react';
import { generateLinkCsv } from './CvLinkGenerator';
import CircularStatic from './CircularProgresswithlabel';
import FormCsvEmployeesCreate from './CvCreateEmployees';

// The steps in the list
const steps = ['NAME', 'LANGUAGE', 'LOGO', 'DETAILS', 'DOWNLOAD SUCCEEDED'];


// switch and return the content for step
function getStepContent(step: number) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    switch (step) {
        case 0:
            history.push("/create-cv-name");
            return <FormCsvEmployeesCreate />;
        case 1:
            history.push("/create-cv-language");
            return <FormCsvLanguageCreate />;
        case 2:
            history.push("/create-cv-logo");
            return <FormCsvLogoCreate />;
        case 3:
            history.push("/create-cv-details");
            return <FormCsvDetailsCreate />;
        case 4:
            history.push("/cv-result");
            return <CircularStatic />;
        default:
            throw new Error('Unknown step');
    }
}
// Generate a theme base on the options received.
const theme = createTheme();

// Create List and all list and content Logic
export default function CvCreateList() {
    const { employees, logo, language, summary } = useContext(WizardContext)
    const [activeStep, setActiveStep] = React.useState(0);

    // navigate one step forward 
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    // navigate one step backward
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // navigate to download 
    const handleDownload = () => {
        let urls = [];
        if (employees) {
            handleNext();
            for (const employee of employees) {
                let url = generateLinkCsv(employee.name, language, summary, logo);
                urls.push(url);
            }
            urls.forEach((url) => {
                window.open(url);
            });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <img width={"140px"} height={"60px"} src="https://bevelop.de/logos/bevelop-logo-standard.svg" alt="" />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        bevelop CV Tool
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {getStepContent(activeStep)}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                    back
                                </Button>
                            )}
                            {activeStep < steps.length - 2 && (
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    next
                                </Button>)}
                            {activeStep === steps.length - 2 && (
                                <Button
                                    variant="contained"
                                    onClick={handleDownload}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    download
                                </Button>)}
                        </Box>
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}