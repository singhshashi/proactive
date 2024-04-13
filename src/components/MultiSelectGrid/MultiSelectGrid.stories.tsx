import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelectGrid, MultiSelectGridProps } from "./MultiSelectGrid";
import sampledata from "./sampledata.json";

type SampleDataType = {
  iconPath: string;
  name: string;
};

const meta: Meta<MultiSelectGridProps<SampleDataType>> = {
  title: "Example/MultiSelectGrid",
  component: MultiSelectGrid,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof MultiSelectGrid<SampleDataType>>;

export default meta;

type Story = StoryObj<typeof meta>;

console.log(sampledata);

export const Default: Story = {
  args: {
    data: sampledata.response as SampleDataType[],
    itemTemplate: (item) => {
      const correctedIconPath = item.iconPath.replace(
        "/var/folders/pz/rldnky716vjg7yvy6rvbd3980000gn/T/",
        "/sampleIcons/"
      );
      return (
        <div className="flex flex-col justify-around gap-2 h-full">
          <div className="">
            <img
              className="w-12 h-12 rounded-full mx-auto"
              src={correctedIconPath}
              alt={item.name}
            />
          </div>
          <div className="text-sm">{item.name}</div>
        </div>
      );
    },
    onSelectionChange: (selectedItems: Array<SampleDataType>) => {
      console.log(selectedItems);
    },
  },
};
