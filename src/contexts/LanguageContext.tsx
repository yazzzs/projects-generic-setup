import { createContext } from 'react';

export const LanguageContext = createContext<{
  isChangingLanguage: boolean;
  setIsChangingLanguage: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
