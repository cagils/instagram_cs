import {createContext} from 'react';

const navContext = createContext(null); // This will run only once even if it is imported multiple times...

export default navContext;
