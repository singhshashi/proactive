import React, { useEffect } from "react";
import { useProactiveTheme } from "../../theme/useProactiveTheme";

export interface MultiSelectGridProps<T> {
  data: Array<T>;
  itemTemplate: (item: T) => React.ReactElement;
  onSelectionChange?: (selectedItems: Array<T>) => void;
}

export const MultiSelectGrid = <T,>(props: MultiSelectGridProps<T>) => {
  const theme = useProactiveTheme();
  const { onSelectionChange, itemTemplate, data } = props;
  const [selectedItems, setSelectedItems] = React.useState<Array<T>>([]);

  useEffect(() => {
    onSelectionChange && onSelectionChange(selectedItems);
  }, [selectedItems, onSelectionChange]);

  return (
    <div className="flex flex-wrap w-full">
      {data.map((item, index) => {
        const isSelected = selectedItems.includes(item);
        const classes = `w-24 h-24 rounded-lg text-center border-2 ${
          isSelected ? "" : "border-transparent"
        }`;
        const style: React.CSSProperties = isSelected
          ? {
              backgroundColor: theme.multiSelectGrid.selectedBackground,
              borderColor: theme.multiSelectGrid.selectedBorder,
            }
          : {
              backgroundColor: "transparent",
              borderColor: "transparent",
            };
        return (
          <div className="p-2" key={`item-${index}`}>
            <div
              className={classes}
              style={style}
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
