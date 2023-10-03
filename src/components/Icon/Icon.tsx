import React from "react";
import * as Icons from "@heroicons/react/24/solid";

export interface IconProps {
  name: string;
  dimension?: string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, dimension, color }) => {
  const componentName = name + "Icon";
  console.log(componentName);
  const Icon = Icons[componentName as keyof typeof Icons];
  if (!Icon) {
    return <div className="text-red-500">??</div>;
  }

  if (dimension === undefined) {
    dimension = "24";
  }

  const styles = {
    width: `${dimension}px`,
    height: `${dimension}px`,
    color: `${color}`,
  };

  return (
    <div style={styles}>
      <Icon />
    </div>
  );
};
