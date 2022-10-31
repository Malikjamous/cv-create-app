import { Dispatch, SetStateAction } from "react";
import { Employee } from "./EmployeeModel";

// WizardContext interface
export interface IWizardContext {
    employees: Employee[] | null,
    setEmployees: Dispatch<SetStateAction<Employee[] | null>>,
    logo: string,
    setLogo: Dispatch<SetStateAction<string>>,
    language: string,
    setLanguage: Dispatch<SetStateAction<string>>,
    summary: boolean,
    setSummary: Dispatch<SetStateAction<boolean>>,
}