import type { Meta, StoryObj } from '@storybook/react';
import { TagPage } from './tag';

const meta: Meta<typeof TagPage> = {
  title: 'Tag',
  component: TagPage
};

export default meta;
type Story = StoryObj<typeof TagPage>;

export const Primary: Story = (args: any) => <TagPage {...args} />;
Primary.args = {};
