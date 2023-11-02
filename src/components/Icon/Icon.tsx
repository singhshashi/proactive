import React from "react";
// import * as Icons from "@heroicons/react/24/solid";
import * as Icons from "react-bootstrap-icons";

export type IconName = keyof typeof Icons;

export interface IconProps extends Icons.IconProps {
  iconName: IconName;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  console.log("iconName", iconName);
  console.log("props:", props);
  const BootstrapIcon = Icons[iconName as keyof typeof Icons];
  console.log("BootstrapIcon:", BootstrapIcon);
  if (!BootstrapIcon) {
    return <div className="text-red-500">??</div>;
  }

  return (
    <>
      <BootstrapIcon {...props} />
    </>
  );
};
