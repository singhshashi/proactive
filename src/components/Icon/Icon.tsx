import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { useProactiveTheme } from "../../theme/useProactiveTheme";

export type IconName = keyof typeof Icons;

export interface IconProps extends LucideProps {
  iconName: IconName;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  const theme = useProactiveTheme();
  const LucideIcon = Icons[iconName] as React.ComponentType<LucideProps> | undefined;
  if (!LucideIcon) {
    return <div style={{ color: theme.icon.invalid }}>??</div>;
  }

  return <LucideIcon {...props} />;
};
