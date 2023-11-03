// import * as Icons from "@heroicons/react/24/solid";
import * as Icons from "react-bootstrap-icons";

export type IconName = keyof typeof Icons;

export interface IconProps extends Icons.IconProps {
  iconName: IconName;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  const BootstrapIcon = Icons[iconName as keyof typeof Icons];
  if (!BootstrapIcon) {
    return <div className="text-red-500">??</div>;
  }

  return (
    <>
      <BootstrapIcon {...props} />
    </>
  );
};
