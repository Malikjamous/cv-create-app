import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext } from 'react';
import { WizardContext } from '../contexts/WizardContext';

// form to create the details
export default function FormCsvDetailsCreate() {
    const { summary, setSummary } = useContext(WizardContext);

    const handleChange = (event: SelectChangeEvent) => {
        setSummary((event.target.value as string) === 'yes');
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">With Details?</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={summary ? 'yes' : 'no'}
                    label="with Details?"
                    onChange={handleChange}
                >
                    <MenuItem value={'yes'}>Yes</MenuItem>
                    <MenuItem value={'no'}>No</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}