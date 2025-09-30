import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "@i18n/t";
import { Icon } from "@atoms";

interface IMenuItem {
  name: string;
  path: string;
}

interface NavigationProps {
  menu: IMenuItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ menu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const [activePath, setActivePath] = useState(window.location.hash);

  return (
    <nav className="relative">
      <Icon
        iconName="menu"
        size={24}
        className="md:hidden text-primary focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <ul
        className={`${
          isMenuOpen ? "max-h-60" : "max-h-0 md:max-h-fit"
        } flex flex-col md:flex-row gap-6 overflow-hidden items-center justify-center absolute md:relative px-3 py-1 rounded-lg z-40 top-full left-1/2 -translate-x-[50%] bg-background shadow-md transition-all duration-300`}
      >
        {menu.map((item, index) => (
          <li
            key={index}
            className={`font-cinzel text-center md:text-nowrap hover:text-primary transition-all duration-300 cursor-pointer ${
              activePath === item.path
                ? "text-primary md:text-lg md:tracking-widest"
                : "text-primary-darker"
            }`}
          >
            <HashLink
              smooth
              to={item.path}
              onClick={() => setActivePath(item.path)}
            >
              {t(`menu.${item.name}`)}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export type { IMenuItem };
