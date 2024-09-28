import { Meta, StoryObj} from '@storybook/react'
import { Icon } from '../icons/Icon'

const meta = {
    title: 'Example/Icon',
    component: Icon,
    args:{},
    argTypes: {},
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Icon>;

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        icon: 'Eye',
        onClick: () => {
            window.alert("icon click working")
        },
    }
}