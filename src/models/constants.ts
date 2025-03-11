import { createContext } from "react";
import { IAuthProviderValue } from "./interfaces";

export const AuthContext = createContext<IAuthProviderValue | null>(null);
