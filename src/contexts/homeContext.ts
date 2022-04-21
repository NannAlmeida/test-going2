import { createContext } from "react";

import { HomeContextProps } from "../types";

export const HomeContext = createContext<HomeContextProps | {}>({});