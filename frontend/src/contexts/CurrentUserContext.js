import { createContext } from 'react';
import { defaultUserContext } from '../utils/constants';

export const CurrentUserContext = createContext(defaultUserContext);
