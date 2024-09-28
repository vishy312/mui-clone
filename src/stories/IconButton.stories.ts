import { Meta, StoryObj } from "@storybook/react";
import IconButton from "../buttons/IconButton";
import { fn } from "@storybook/test";


const meta = {
    title: 'Example/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {},
    argTypes: {
        onClick: fn()
    }
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        icon: 'Eye',
        onClick() {
            window.alert("click action is working")
        },
    }
}