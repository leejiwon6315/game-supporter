import { createContext } from 'react';
import { User } from 'shared/types';

const userInitialValue: User[] = [];

export const UserContext = createContext(userInitialValue);
