import {Meta, StoryObj} from '@storybook/react';
import { TextInput } from '../formfields/TextInput';
import { fn } from '@storybook/test';

const meta = {
    title: 'Example/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    
    },
     args: {
        onChange: fn()
     }

} satisfies Meta<typeof TextInput>

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        name: 'test-input',
        defaultValue: 'Placeholder text'
    }
}

export const Disabled: Story = {
    args: {
        name: 'test-input',
        defaultValue: 'Placeholder text',
        isDisabled: true
    }
}