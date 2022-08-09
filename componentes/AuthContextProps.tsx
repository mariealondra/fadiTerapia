import { AuthState } from "./AuthContext";

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

