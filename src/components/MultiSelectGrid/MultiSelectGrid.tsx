import React from "react";

export interface MultiSelectGridProps {
  data: Array<any>;
  itemTemplate: (item: any) => React.ReactElement;
}

export const MultiSelectGrid: React.FC<MultiSelectGridProps> = ({
  data,
  itemTemplate,
}) => {
  const [selectedItems, setSelectedItems] = React.useState<Array<any>>([]);

  return (
    <div className="flex flex-wrap w-full">
      {data.map((item: any) => {
        const isSelected = selectedItems.includes(item);
        const classes = `w-24 h-24 rounded-lg text-center ${
          isSelected
            ? "bg-gray-200 border-gray-400 border-2 "
            : "bg-transparent"
        }`;
        return (
          <div className="p-2">
            <div
              className={classes}
              onClick={() => {
                // if item is already selected, remove it from the list
                // otherwise add it to the list
                if (isSelected) {
                  setSelectedItems(selectedItems.filter((i) => i !== item));
                } else {
                  setSelectedItems([...selectedItems, item]);
                }
              }}
            >
              {itemTemplate(item)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
