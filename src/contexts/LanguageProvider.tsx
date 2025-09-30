import React, { useState } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageChangeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  return (
    <LanguageContext.Provider value={{ isChangingLanguage, setIsChangingLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
