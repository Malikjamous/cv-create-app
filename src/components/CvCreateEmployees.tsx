import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { WizardContext } from '../contexts/WizardContext';
import { Employee } from '../models/EmployeeModel';
import { Avatar, Box, FormControl } from '@mui/material';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function FormCsvEmployeesCreate() {
    const { employees, setEmployees } = React.useContext(WizardContext);
    const [selectedEmployees] = React.useState<Employee[]>([]);
    const handelChange = (value: Employee) => () => {
        const isEmployeeExist = selectedEmployees?.find((employee) => employee.id === value.id);
        if (!isEmployeeExist) {
            selectedEmployees.push(value);
            setEmployees(selectedEmployees);
        } else {
            return;
        }
    };

    const url = 'https://europe-west3-cv-generator-342414.cloudfunctions.net/cv-generator-employees?AUTH=sg5vhLTZTAKJweBF';

    const [newEmployees, setNewEmployees] = React.useState<Employee[]>([]);
    // fetch workers Data
    React.useEffect(() => {
        const fetchWorkers = async () => {
            const result: Employee[] = await fetch(url)
                .then(async (res) => await res.json());
            setNewEmployees(result);
        }
        fetchWorkers();
    }, []);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl >
                <Autocomplete
                    limitTags={3}
                    multiple
                    id="checkboxes-tags-demo"
                    options={newEmployees}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option, { selected }) => (
                        <div key={option.id} onClick={handelChange(option)}>
                            <li  {...props}>
                                <Checkbox
                                    onClick={handelChange(option)}
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                <Avatar
                                    style={{ marginRight: "15px" }}
                                    src={option.imageURL}
                                />
                                <div style={{ marginTop: "10px" }}>
                                    {option.name}
                                </div>
                            </li>
                        </div>

                    )}
                    style={{ width: 802 }}
                    renderInput={(params) => (
                        <TextField
                            {...params} label="Name" placeholder="Name" />
                    )}
                />
            </FormControl>
        </Box>
    );
}