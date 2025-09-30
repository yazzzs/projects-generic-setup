import { useContext } from "react";
import { LanguageContext } from "@contexts";

export const useLanguageChange = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageChange must be used within a LanguageChangeProvider"
    );
  }
  return context;
};
