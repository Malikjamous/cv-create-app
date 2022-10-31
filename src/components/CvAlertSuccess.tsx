import { Typography, Alert } from "@mui/material";
import React from "react";

//Alerts the Succuss Massage
export default function AlertSuccuss() {
    return (
        <React.Fragment>
            <React.Fragment>
                <Typography variant="h5" gutterBottom>
                    Thank you for your download.
                </Typography>
                <Typography variant="subtitle1">
                    <Alert severity="success" color="info">
                        Download succeeded!
                    </Alert>
                </Typography>
            </React.Fragment>
        </React.Fragment>
    );
}