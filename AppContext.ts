import React from 'react';

export interface AppContextInterface {
  signIn: () => void;
  signOut: () => void;
  isSignedIn: () => boolean;
  registerUser: () => void;
}

export const AppContext = React.createContext<AppContextInterface | null>(null);
