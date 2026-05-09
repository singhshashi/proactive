import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

export type IconName = keyof typeof Icons;

export interface IconProps extends LucideProps {
  iconName: IconName;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  const LucideIcon = Icons[iconName] as React.ComponentType<LucideProps> | undefined;
  if (!LucideIcon) {
    return <div className="text-red-500">??</div>;
  }

  return <LucideIcon {...props} />;
};
