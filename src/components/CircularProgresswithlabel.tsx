import * as React from 'react';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AlertSuccuss from './CvAlertSuccess';

// Circular Progress 
function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}
// Circular Static to get the progress or alert the succuss 
export default function CircularStatic() {
    const [progress, setProgress] = React.useState(10);
    React.useEffect(() => {
        setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 110 : prevProgress + 10));
        }, 2400);
    }, []);

    return (<div className="container">
        {progress < 100 ? <CircularProgressWithLabel value={progress} /> : <AlertSuccuss />}
    </div>);
}