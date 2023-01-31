import { createContext, } from "react";

interface MenuContextProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}
export const MenuContext = createContext<MenuContextProps>({} as MenuContextProps);