import { createContext, useState, FC, ReactNode } from "react"
import { Employee } from "../models/EmployeeModel";
import { IWizardContext } from "../models/WizardModel";


// DefaultState for the Context
const defaultState: IWizardContext = {
    employees: [],
    setEmployees: (): void => {
        throw new Error('setEmployee function must be overridden');
    },

    logo: '',
    setLogo: (): void => {
        throw new Error('setLogo function must be overridden');
    },

    language: '',
    setLanguage: (): void => {
        throw new Error('setLanguage function must be overridden');
    },

    summary: false,
    setSummary: (): void => {
        throw new Error('setSummary function must be overridden');
    },
}

// Create Context with defaultState
export const WizardContext = createContext<IWizardContext>(defaultState);

// Create Context provider for all components to allow save and transfer data between components
export const WizardContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [employees, setEmployees] = useState<Employee[] | null>(null);
    const [logo, setLogo] = useState('');
    const [language, setLanguage] = useState('');
    const [summary, setSummary] = useState(false);

    const value = {
        employees,
        setEmployees,
        logo,
        setLogo,
        language,
        setLanguage,
        summary,
        setSummary,
    }
    return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>;
}
