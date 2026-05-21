import { Icon } from "../Icon/Icon";
import { useProactiveTheme } from "../../theme/useProactiveTheme";

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
  maxHeight?: string;
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
  maxHeight = "400px",
}) => {
  const theme = useProactiveTheme();
  const displayEmtpyState = (items && items.length === 0) || !items;
  emptyGridMessage = emptyGridMessage
    ? emptyGridMessage
    : "No items to display";
  return (
    <div className="flex flex-col justify-normal gap-2">
      <div className="px-1 font-bold" style={{ color: theme.text.primary }}>{dataGridLabel}</div>
      <div className="px-1 font-light text-xs" style={{ color: theme.text.muted }}>
        {dataGridDescription}
      </div>
      <div className="border rounded-md" style={{ borderColor: theme.dataGrid.border }}>
        <div className="px-2 py-1" style={{ backgroundColor: theme.dataGrid.headerBackground }}>
          {header && header()}
        </div>
        <div className="min-h-[100px] overflow-y-auto" style={{ maxHeight }}>
          {items &&
            items.map((item: any, index: number) => {
              const isAltRow = index % 2 === 0;
              return (
                <div
                  className="w-full"
                  style={{
                    backgroundColor: isAltRow
                      ? theme.dataGrid.alternateRowBackground
                      : "transparent",
                  }}
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
            <div className="px-2 py-1 text-xs" style={{ color: theme.text.muted }}>
              {emptyGridMessage}
            </div>
          )}
        </div>
        <div className="px-2 py-1" style={{ backgroundColor: theme.dataGrid.footerBackground }}>
          {footer && footer()}
          {!footer && showAddRemoveButtons && (
            <div className="flex flex-row justify-start items-center gap-1">
              <Icon
                iconName="Plus"
                size="20"
                color={theme.text.primary}
                onClick={onAddItemClick}
              />
              <div className="inline" style={{ color: theme.text.divider }}>|</div>
              <Icon
                iconName="Minus"
                size="20"
                color={theme.text.primary}
                onClick={onRemoveItemClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
