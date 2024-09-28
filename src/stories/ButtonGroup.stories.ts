import { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "../buttons/ButtonGroup";
import { Button } from "./Button";


const meta = {
    title: 'Example/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        layout: 'centered'
    },
    args: {},
    argTypes: {},
    tags: ['autodocs']
} satisfies Meta<typeof ButtonGroup>;

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'contained',
        children: 'I am a Child'
    }
}