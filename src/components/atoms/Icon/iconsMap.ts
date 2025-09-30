import { IconNames } from './iconNames';

const icons = import.meta.glob('./icons/*.svg', { eager: true }) as Record<string, { ReactComponent: React.FC<React.SVGProps<SVGSVGElement>> }>;

const iconsMap = {} as Record<IconNames, React.FC<React.SVGProps<SVGSVGElement>>>;

for (const path in icons) {
  const match = path.match(/\.\/icons\/(.*)\.svg$/);
  if (match) {
    const name = match[1] as IconNames;
    iconsMap[name] = icons[path].ReactComponent;
  }
}

export { iconsMap };
