import { useTranslation as useTranslationLibrary } from "react-i18next";
import { useLanguageChange } from "@hooks";

export const useTranslation = () => {
  const { t: translate } = useTranslationLibrary();
  const { isChangingLanguage } = useLanguageChange();

  const t = (key: string) => (
    <div
      className={`transition-opacity duration-500 ${
        isChangingLanguage ? "opacity-0 blur-lg" : "opacity-100 blur-0"
      }`}
    >
      {translate(key)}
    </div>
  );
  return { t };
};
