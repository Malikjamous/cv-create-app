import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { WizardContext } from '../contexts/WizardContext';
import { useContext } from 'react';

// form to create language
export default function FormCsvLanguageCreate() {
    const { language, setLanguage } = useContext(WizardContext);

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="language"
                    onChange={handleChange}
                >
                    <MenuItem value={"DE"}>German</MenuItem>
                    <MenuItem value={"EN"}>English</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}