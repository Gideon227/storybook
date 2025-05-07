import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';
import { LiaUserSecretSolid } from 'react-icons/lia';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: "centered",
  }
};

export default meta;

export const Default: StoryObj<typeof Card> = {
  args: {
    title: 'Anonymous identity',
    description: 'Track without revealing identity. Stay private.',
    icon: <LiaUserSecretSolid size={20} />,
  },
};
