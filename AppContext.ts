import React from 'react';

export interface AppContextInterface {
  signIn: () => void;
  registerUser: () => void;
}

export const AppContext = React.createContext<AppContextInterface | null>(null);
