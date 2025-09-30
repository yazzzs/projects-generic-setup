export const iconNames = [
  "AscendArrow",
  "DescendArrow",
  "menu"
] as const;

export type IconNames = (typeof iconNames)[number];
