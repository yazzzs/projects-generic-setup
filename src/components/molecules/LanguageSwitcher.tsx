import { useTranslation } from "react-i18next";
import { Select } from "@atoms";
import { useLanguageChange } from "@hooks";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const languages = [
    { value: "en", label: "EN" },
    { value: "it", label: "IT" },
  ];

  const { setIsChangingLanguage } = useLanguageChange();

  const handleLanguageChange = async (value: string) => {
    setIsChangingLanguage(true);
    setTimeout(async () => {
      await i18n.changeLanguage(value);
      setIsChangingLanguage(false);
    }, 500);
  };

  return (
    <div className={className}>
      <Select
        options={languages}
        onChange={handleLanguageChange}
        defaultValue={i18n.language}
        size="xs"
      />
    </div>
  );
};
