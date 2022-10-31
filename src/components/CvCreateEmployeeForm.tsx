import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { WizardContext } from '../contexts/WizardContext';
import { Employee } from '../models/EmployeeModel';

// form to create Name
export default function FormCsvEmployeeCreate() {
    const url = 'https://europe-west3-cv-generator-342414.cloudfunctions.net/cv-generator-employees?AUTH=sg5vhLTZTAKJweBF';
    const [newEmployees, setNewEmployees] = useState<Employee[]>();
    // fetch workers
    useEffect(() => {
        const fetchWorkers = async () => {
            const result: Employee[] = await fetch(url)
                .then(async (res) => await res.json());
            setNewEmployees(result);
        }
        fetchWorkers();
    }, []);

    const { employees, setEmployees } = useContext(WizardContext);

    const handleChange = (event: SelectChangeEvent) => {
        const selectedEmployee = newEmployees?.find((employee) => employee.id === event.target.value);
        if (selectedEmployee) {
            // setEmployees(selectedEmployee);
        }
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>Name</InputLabel>
                <Select
                    style={{
                        display: 'flex'
                    }}
                    label="name"
                    onChange={handleChange}
                >
                    {newEmployees?.map((worker: Employee) => (
                        <MenuItem
                            key={worker.id}
                            value={worker.id}
                        >
                            <div style={{ display: 'flex' }}>
                                <Avatar style={{ marginRight: "15px" }} src={worker.imageURL} />

                                <div style={{ marginTop: "10px" }} >
                                    {worker.name}
                                </div>
                            </div>
                        </MenuItem>

                    ))}
                </Select>
            </FormControl>
        </Box >
    );
}