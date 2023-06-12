import type { Meta, StoryObj } from '@storybook/react';
import { TagPage } from './tag';
import {ThemeProvider} from '../theme/theme.provider';

const meta: Meta<typeof TagPage> = {
  title: 'Tag',
  component: TagPage
};

export default meta;
type Story = StoryObj<typeof TagPage>;

export const Primary: Story = (args: any) => (
  <ThemeProvider>
    <TagPage {...args} />
  </ThemeProvider>
);
Primary.args = {};
