import type { Meta, StoryObj } from '@storybook/react';
import StatCard from '../components/StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
};

export default meta;

export const Default: StoryObj<typeof StatCard> = {};