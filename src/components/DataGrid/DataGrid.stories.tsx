import type { Meta, StoryObj } from "@storybook/react";
import { DataGrid } from "./DataGrid";

const meta = {
  title: "Example/DataGrid",
  component: DataGrid,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof DataGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    applicationName: "Visual Studio Code",
    durationUsed: 4124,
    iconPath:
      "/var/folders/pz/rldnky716vjg7yvy6rvbd3980000gn/T//Visual Studio Code.png",
  },
  {
    applicationName: "Google Chrome",
    durationUsed: 4124,
    iconPath:
      "/var/folders/pz/rldnky716vjg7yvy6rvbd3980000gn/T//Google Chrome.png",
  },
  {
    applicationName: "Slack",
    durationUsed: 4124,
    iconPath: "/var/folders/pz/rldnky716vjg7yvy6rvbd3980000gn/T//Slack.png",
  },
  {
    applicationName: "Finder",
    durationUsed: 4124,
    iconPath: "/var/folders/pz/rldnky716vjg7yvy6rvbd3980000gn/T//Finder.png",
  },
  {
    applicationName: "System Preferences",
    durationUsed: 4124,
    iconPath:
      "/var/folders/pz/rldnky716vjg7yvy6rvbd3980000gn/T//System Preferences.png",
  },
  {
    applicationName: "Messages",
    durationUsed: 4124,
    iconPath: "/var/folders/pz/rldnky716vjg7yvy6rvbd3980000gn/T//Messages.png",
  },
];

export const SimpleDataGrid: Story = {
  args: {
    dataGridLabel: "DataGrid Label",
    dataGridDescription:
      "DataGrid Description. The quick brown fox jumps over the lazy dog.",
    header: () => {
      return (
        <div className="flex flex-row  px-2 py-1 justify-start items-center gap-1">
          <div className="text-sm cursor-default">Application</div>
        </div>
      );
    },
    items: sampleItems,
    itemTemplate: (item: any, index: number) => {
      return (
        <div className="flex flex-row  px-2 py-1 justify-start items-center gap-1">
          <div className="text-sm cursor-default">{item.applicationName}</div>
        </div>
      );
    },
    footer: () => {
      return (
        <div className="flex flex-row  px-2 py-1 justify-start items-center gap-1">
          <div className="text-sm cursor-default">Footer</div>
        </div>
      );
    },
  },
};
