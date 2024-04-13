import React, { useEffect } from "react";

export interface MultiSelectGridProps<T> {
  data: Array<T>;
  itemTemplate: (item: T) => React.ReactElement;
  onSelectionChange?: (selectedItems: Array<T>) => void;
}

export const MultiSelectGrid = <T,>(props: MultiSelectGridProps<T>) => {
  const { onSelectionChange, itemTemplate, data } = props;
  const [selectedItems, setSelectedItems] = React.useState<Array<T>>([]);

  useEffect(() => {
    onSelectionChange && onSelectionChange(selectedItems);
  }, [selectedItems, onSelectionChange]);

  return (
    <div className="flex flex-wrap w-full">
      {data.map((item, index) => {
        const isSelected = selectedItems.includes(item);
        const classes = `w-24 h-24 rounded-lg text-center ${
          isSelected
            ? "bg-gray-200 border-gray-400 border-2 "
            : "bg-transparent"
        }`;
        return (
          <div className="p-2" key={`item-${index}`}>
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
