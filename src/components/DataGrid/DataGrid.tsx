import { Icon } from "../Icon/Icon";

/**
 *  DataGrid Component. Always used on a light surface.
 */
export interface DataGridProps {
  dataGridLabel?: string;
  dataGridDescription?: string;
  header?: () => React.ReactElement;
  items: Array<any>;
  itemTemplate?: (item: any, index: number) => React.ReactElement;
  onItemSelectionChange?: (selectedItem: any) => void;
  emptyGridMessage?: string;
  footer?: () => React.ReactElement;
  onAddItemClick?: () => void;
  onRemoveItemClick?: () => void;
  showAddRemoveButtons?: boolean;
}
export const DataGrid: React.FC<DataGridProps> = ({
  dataGridLabel,
  dataGridDescription,
  header,
  items,
  itemTemplate,
  onItemSelectionChange,
  emptyGridMessage,
  footer,
  onAddItemClick,
  onRemoveItemClick,
  showAddRemoveButtons = true,
}) => {
  const displayEmtpyState = (items && items.length === 0) || !items;
  emptyGridMessage = emptyGridMessage
    ? emptyGridMessage
    : "No items to display";
  return (
    <div className="flex flex-col justify-normal gap-2">
      <div className="px-1 font-bold">{dataGridLabel}</div>
      <div className="px-1 font-light text-zinc-500 text-xs">
        {dataGridDescription}
      </div>
      <div className="border rounded-md border-zinc-200 ">
        <div className="bg-zinc-100 px-2 py-1">{header && header()}</div>
        <div className="min-h-[100px]">
          {items &&
            items.map((item: any, index: number) => {
              const classes = `w-full ${index % 2 === 0 ? "bg-zinc-50" : ""} `;
              return (
                <div
                  className={classes}
                  key={`item-${index}`}
                  onClick={() =>
                    onItemSelectionChange && onItemSelectionChange(item)
                  }
                >
                  {itemTemplate && itemTemplate(item, index)}
                </div>
              );
            })}
          {displayEmtpyState && (
            <div className="px-2 py-1 text-zinc-500 text-xs">
              {emptyGridMessage}
            </div>
          )}
        </div>
        <div className="bg-zinc-100 px-2 py-1">
          {footer && footer()}
          {!footer && showAddRemoveButtons && (
            <div className="flex flex-row justify-start items-center gap-1">
              <Icon
                iconName="Plus"
                size="20"
                color="#000000"
                onClick={onAddItemClick}
              />
              <div className="text-zinc-200 inline">|</div>
              <Icon
                iconName="Dash"
                size="20"
                color="#000000"
                onClick={onRemoveItemClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
