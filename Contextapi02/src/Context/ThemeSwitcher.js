import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ThemeSwitcher = createContext({
  themeMode:'light',
  darkTheme:()=>{},
  lightTheme:()=>{}
})

export const ThemeProvider = ThemeSwitcher.Provider;

export default function useTheme(){
    return  useContext(ThemeSwitcher)
}