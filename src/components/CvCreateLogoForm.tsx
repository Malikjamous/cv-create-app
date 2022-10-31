import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { WizardContext } from '../contexts/WizardContext';
import { useContext } from 'react';

//form to create logo
export default function FormCsvLogoCreate() {
    const { logo, setLogo } = useContext(WizardContext);

    const handleChange = (event: SelectChangeEvent) => {
        setLogo(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Logo</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={logo}
                    label="Logo"
                    onChange={handleChange}
                >
                    <MenuItem value={"bevelop"}>bevelop</MenuItem>
                    <MenuItem value={"diagonal"}>diagonal</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}