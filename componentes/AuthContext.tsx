import { AuthContextProps } from "./AuthContextProps";
import * as React from 'react';
import { createContext } from "react";

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
};


export const AuthContext = createContext({} as AuthContextProps);
