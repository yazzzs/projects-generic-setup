import { iconsMap } from "./iconsMap";
import { IconNames } from "./iconNames";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: IconNames;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ iconName, size, ...props }) => {
  const SvgIcon = iconsMap[iconName];
  if (!SvgIcon) return null;

  return (<SvgIcon {...props} width={size} height={size} />);
};
