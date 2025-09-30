import { Icon } from "./Icon";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center gap-2`}
    >
      <Icon
        iconName="logo"
        className="text-primary size-5 md:size-9 lg:size-11"
      />
      <p className="font-cinzel text-primary text-xs text-center">
        Oracle’s
        <br />
        Breath
      </p>
    </div>
  );
};
