import  {AuthContext} from "./AuthContext";
import { authInitialState } from "./authInitialState";
import * as React from 'react';

export const AuthProvider = ({children}: any) => {
  return (
     <AuthContext.Provider
      value={{
        authState: authInitialState,
        signIn: () => {},
      }}>
        {children}
    </AuthContext.Provider>
  );
};